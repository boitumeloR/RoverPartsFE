import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ViewPartComponent } from './pages/view-part/view-part.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'view-part',
    component: ViewPartComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
