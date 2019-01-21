import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { NgPipesModule } from 'ngx-pipes';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { AlbumsComponent } from './albums/albums.component';
import { AlbumsService } from './albums/albums.service';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    AlbumsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    NgPipesModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [
    AlbumsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
