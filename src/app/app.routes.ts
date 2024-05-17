import { Routes } from '@angular/router';
import { Gridview1Component } from './views/gridview1/gridview1.component';
import { HomeComponent } from './views/home/home.component';
import { Gridview2Component } from './views/gridview2/gridview1.component';

export const routes: Routes = [
    { path: 'home', component: HomeComponent},
    { path: 'gridview1', component: Gridview1Component },
    { path: 'gridview2', component: Gridview2Component },
];
