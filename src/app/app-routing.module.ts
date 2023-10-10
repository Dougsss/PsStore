import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NewComponent } from './pages/new/new.component';
import { ExclusiveComponent } from './pages/exclusive/exclusive.component';
import { SaleComponent } from './pages/sale/sale.component';
import { BestComponent } from './pages/best/best.component';
import { HomeComponent } from './pages/home/home.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'NewGames', component: NewComponent },
  { path: 'ExclusiveGames', component: ExclusiveComponent },
  { path: 'SaleGames', component: SaleComponent },
  { path: 'BestGames', component: BestComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
