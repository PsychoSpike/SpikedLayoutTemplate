import { Routes } from '@angular/router';
import { Gridview1Component } from './views/gridview1/gridview1.component';
import { HomeComponent } from './views/home/home.component';

export const routes: Routes = [
    { path: 'home', component: HomeComponent},
    { path: 'gridview1', component: Gridview1Component },
];
