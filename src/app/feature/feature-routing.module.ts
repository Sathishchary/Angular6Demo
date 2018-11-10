import { Routes, RouterModule } from '@angular/router';
import { FeatureComponent } from './feature/feature.component';
import { NgModule } from '@angular/core';

const routes: Routes = [
  { path: '', component: FeatureComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class FeatureRoutingModule { }
