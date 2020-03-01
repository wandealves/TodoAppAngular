import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from './pages/login/login.component';
import { HomeComponent } from './pages/home/home.component';
import { TodayComponent } from './pages/today/today.component';
import { TomorrowComponent } from './pages/tomorrow/tomorrow.component';
import { AllComponent } from './pages/all/all.component';
import { NewComponent } from './pages/new/new.component';

const routes: Routes = [
  {
    path: '', component: HomeComponent, children: [
      { path: '', component: TodayComponent },
      { path: 'tomorrow', component: TomorrowComponent },
      { path: 'all', component: AllComponent },
      { path: 'new', component: NewComponent },
    ]
  },
  { path: 'login', component: LoginComponent, }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
