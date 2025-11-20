import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-hero-section',
  imports: [RouterLink, CommonModule],
  template: `
    <section class="hero relative w-full overflow-hidden" style="height:calc(100vh - 72px);">

      <!-- High-quality background video -->
      <video
        #bgVideo
        autoplay
        muted
        loop
        playsinline
        preload="auto"
        class="absolute inset-0 w-full h-full z-0 high-video"
        poster="assets/WhatsApp Image 2025-11-20 at 5.19.00 PM.jpeg">

        <source src="assets/تشطيب.mp4" type="video/mp4" />

        <img 
          src="assets/WhatsApp Image 2025-11-20 at 5.19.00 PM.jpeg" 
          alt="Background fallback" 
          class="w-full h-full object-cover" />
      </video>

      <!-- Architectural SVG overlay -->
      <svg class="absolute inset-0 w-full h-full z-10 pointer-events-none svg-overlay"
           viewBox="0 0 1440 600" fill="none">
        <g stroke="#fff" stroke-width="1.5">
          <rect x="100" y="100" width="400" height="200" rx="18" />
          <rect x="600" y="180" width="320" height="120" rx="12" />
          <rect x="1050" y="60" width="220" height="180" rx="20" />
          <line x1="200" y1="400" x2="1240" y2="400" />
          <line x1="400" y1="100" x2="400" y2="500" />
          <line x1="900" y1="180" x2="900" y2="500" />
          <circle cx="1200" cy="500" r="60" />
        </g>
      </svg>

      <!-- Dark Overlay -->
      <div class="absolute inset-0 z-20 overlay-dark"></div>

      <!-- Controls -->
      <button 
        (click)="toggleVideo(bgVideo)"
        class="absolute right-6 bottom-6 z-40 bg-white/80 backdrop-blur-sm p-2 rounded-full shadow hover:scale-105 transition">
        
        <svg *ngIf="isPlaying" xmlns="http://www.w3.org/2000/svg" class="w-6 h-6 text-slate-800" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
          <path d="M6 19h4V5H6v14zM14 5v14h4V5h-4z"/>
        </svg>

        <svg *ngIf="!isPlaying" xmlns="http://www.w3.org/2000/svg" class="w-6 h-6 text-slate-800" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
          <path d="M5 3v18l15-9L5 3z"/>
        </svg>
      </button>

      <!-- Text -->
      <div class="container-max absolute left-0 bottom-0 p-6 z-30"
           style="transform:translateY(-20%);">
        <h1 class="text-3xl font-bold text-white mb-4 animate-pop">
           — A to Z Innovations
        </h1>
        <p class="text-white opacity-90 mb-6">
          تصميم معماري متميز، تشطيبات داخلية وخارجية، ومتابعة تنفيذ احترافية.
        </p>
        <div>
          <button (click)="goProjects()" class="btn btn-primary mr-3">شاهد أعمالنا</button>
          <a routerLink="/contact" class="btn btn-secondary">تواصل معنا</a>
        </div>
      </div>

    </section>
  `,
  styles: [`
    /* Improve video sharpness */
    .high-video {
      object-fit: cover;
      image-rendering: crisp-edges;
      image-rendering: -webkit-optimize-contrast;
      transform: translateZ(0);
      backface-visibility: hidden;
    }

    /* Smooth SVG overlay */
    .svg-overlay {
      opacity: 0.17;
      mix-blend-mode: lighten;
    }

    /* Dark blend overlay */
    .overlay-dark {
      background: linear-gradient(180deg, rgba(15,23,42,0.55) 0%, rgba(15,23,42,0.85) 100%);
    }
  `]
})
export class HeroSectionComponent {
  isPlaying = true;

  constructor(private router: Router) {}

  goProjects() {
    this.router.navigate(['/projects']);
  }

  toggleVideo(videoEl: HTMLVideoElement | null) {
    if (!videoEl) return;
    videoEl.paused ? videoEl.play() : videoEl.pause();
    this.isPlaying = !videoEl.paused;
  }
}
