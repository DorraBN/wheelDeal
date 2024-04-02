import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component'; // Importez le composant de connexion
import { ProfileComponent } from './profile/profile.component';
import { SigninComponent } from './signin/signin.component';
import { SignupComponent } from './signup/signup.component';
import { Home1Component } from './Home1/home1.component';

import { NavigationComponent } from './navigation/navigation.component';
import { Home2Component } from './home2/home2.component';

const routes: Routes = [

  {
    path: 'login', // Chemin pour le composant de connexion
    component: LoginComponent, // Composant de connexion
  },
  {
    path: 'home1', // Chemin pour le composant de connexion
    component: Home1Component, // Composant de connexion
  },
  {
    path: 'home2', // Chemin pour le composant de connexion
    component: Home2Component, // Composant de connexion
  },
  {
    path: 'profile', // Chemin pour le composant de connexion
    component: ProfileComponent, // Composant de connexion
  },
  {
    path: 'signup', // Chemin pour le composant de connexion
    component: SignupComponent, // Composant de connexion
  },
  {
    path: 'sign', // Chemin pour le composant de connexion
    component: SigninComponent, // Composant de connexion
  },
  {
    path: 'nav', // Chemin pour le composant de connexion
    component:NavigationComponent, // Composant de connexion
  },
  
  {
    path: '', // Redirection par défaut vers la page d'accueil
    redirectTo: 'home',
    pathMatch: 'full'
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
