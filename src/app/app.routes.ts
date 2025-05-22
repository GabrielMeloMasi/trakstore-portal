import { Routes } from '@angular/router';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { MarketPageComponent } from './pages/market-page/market-page.component';

export const routes: Routes = [
    {path:'', component: HomePageComponent},
    {path:'home', component: HomePageComponent},
    {path:'market', component: MarketPageComponent}
];
