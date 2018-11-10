import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './core/home/home.component';

const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'login', redirectTo: '' },
  { path: 'home', component: HomeComponent,
  children: [
    { path: 'dashboard', loadChildren: './dashboard/dashboard.module#DashboardModule' },
    { path: 'feature', loadChildren: './feature/feature.module#FeatureModule' }
  ],
 },
];

@NgModule({
  imports: [RouterModule.forRoot(routes), CommonModule],
  exports: [RouterModule]
})
export class AppRoutingModule {}
