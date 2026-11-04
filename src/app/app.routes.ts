import { Routes } from '@angular/router';
import { HomeComponent } from './home-component/home-component';
import { CityComponent } from './city-component/city-component';
import { AboutComponent } from './about-component/about-component';

export const routes: Routes = [
    {path: 'home', component: HomeComponent },
    {path: '', component: HomeComponent },
    {path: 'city', component: CityComponent },
    {path: 'about', component: AboutComponent }
];
