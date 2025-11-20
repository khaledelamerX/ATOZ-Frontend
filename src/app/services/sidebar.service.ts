import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class SidebarService {
  private _open$ = new BehaviorSubject<boolean>(false);
  readonly open$ = this._open$.asObservable();

  isOpen() { return this._open$.getValue(); }
  open() { this._open$.next(true); }
  close() { this._open$.next(false); }
  toggle() { this._open$.next(!this._open$.getValue()); }
}
