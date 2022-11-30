import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { GalleryComponent } from './gallery/gallery.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { ContactComponent } from './contact/contact.component';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { FormsModule } from '@angular/forms';
import { ViewFriendComponent } from './view-friend/view-friend.component';
import { ViewCourseComponent } from './view-course/view-course.component';
import { HttpClientModule } from '@angular/common/http';
import { EmployeeLoginComponent } from './employee-login/employee-login.component';
import { AddCourseComponent } from './add-course/add-course.component';
import { AddFriendComponent } from './add-friend/add-friend.component';
import { EmployeeRegisterComponent } from './employee-register/employee-register.component';
import { NavbarComponent } from './navbar/navbar.component';
import { RouterModule, Routes } from '@angular/router';
import { ViewNavbarComponent } from './view-navbar/view-navbar.component';
import { AddNavbarComponent } from './add-navbar/add-navbar.component';


const myRoute:Routes=[
  {
    path:"",
    component:HomeComponent
  },
  {
    path:"gallery",
    component:GalleryComponent
  },
  {
    path:"about",
    component:AboutUsComponent
  },
  {
    path:"contact",
    component:ContactComponent
  },
  {
    path:"adminlogin",
    component:AdminLoginComponent
  },
  {
    path:"emplogin",
    component:EmployeeLoginComponent
  },
  {
    path:"viewfriend",
    component:ViewFriendComponent

  },
  {
    path:"viewcourses",
    component:ViewCourseComponent
  },
  {
    path:"addfriend",
    component:AddFriendComponent
  },
  {
    path:"addcourse",
    component:AddCourseComponent
  },
  {
    path:"register",
    component:EmployeeRegisterComponent
  }
]

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    GalleryComponent,
    AboutUsComponent,
    ContactComponent,
    AdminLoginComponent,
    ViewFriendComponent,
    ViewCourseComponent,
    EmployeeLoginComponent,
    AddCourseComponent,
    AddFriendComponent,
    EmployeeRegisterComponent,
    NavbarComponent,
    ViewNavbarComponent,
    AddNavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(myRoute)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
