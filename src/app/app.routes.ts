import { Routes } from '@angular/router';
import { HomeComponent } from './components/home.component';
import { ServicesComponent } from './components/services.component';
import { ProjectsComponent } from './components/projects.component';
import { ContactComponent } from './components/contact.component';
import { PaymentComponent } from './components/payment.component';
import { AboutComponent } from './components/about.component';
import { NewsComponent } from './components/news.component';
import { SigninComponent } from './components/auth-signin.component';
import { SignupComponent } from './components/auth-signup.component';

export const routes: Routes = [
	{ path: '', component: HomeComponent },
	{ path: 'services', component: ServicesComponent },
	{ path: 'projects', component: ProjectsComponent },
	{ path: 'about', component: AboutComponent },
	{ path: 'news', component: NewsComponent },
	{ path: 'signin', component: SigninComponent },
	{ path: 'signup', component: SignupComponent },
	{ path: 'contact', component: ContactComponent },
	{ path: 'payment', component: PaymentComponent },
	{ path: '**', redirectTo: '' },
];
