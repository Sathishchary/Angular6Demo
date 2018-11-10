import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LeftbarComponent } from './leftbar/leftbar.component';
import { TopnavComponent } from './topnav/topnav.component';
import { BottombarComponent } from './bottombar/bottombar.component';
import { HomeComponent } from './home/home.component';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    CommonModule, RouterModule
  ],
  declarations: [LeftbarComponent, TopnavComponent, BottombarComponent, HomeComponent],
  exports: [LeftbarComponent, TopnavComponent, BottombarComponent, HomeComponent]
})
export class CoreModule { }
