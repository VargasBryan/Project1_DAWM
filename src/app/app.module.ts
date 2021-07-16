import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
//rutas principales
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';


import { HomeComponent } from './page/home/home.component';
import { AboutComponent } from './page/about/about.component';
import { ContactComponent } from './page/contact/contact.component';
import { ServicesComponent } from './page/services/services.component';
import { RouterModule, Routes } from '@angular/router';
import { NavComponent } from './page/nav/nav.component';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './page/register/register.component';
import { ProgressComponent } from './page/progress/progress.component';


const routes: Routes = [
  {path:'home',component:HomeComponent},
  {path:'about',component:AboutComponent},
  {path:'contact',component: ContactComponent},
  {path:'services',component: ServicesComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    ContactComponent,
    ServicesComponent,
    NavComponent,
    LoginComponent,
    RegisterComponent,
    ProgressComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule,
    HttpClientModule,
    RouterModule.forRoot(routes)

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
