import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TopNavigationComponent } from './nav/top-navigation/top-navigation.component';
import { BottomNavigationComponent } from './nav/bottom-navigation/bottom-navigation.component';
import { HomeComponent } from './main/home/home.component';
import { ServicesComponent } from './main/services/services.component';
import { AdviceComponent } from './main/advice/advice.component';
import { RemedyBlogComponent } from './main/remedy-blog/remedy-blog.component';
import { PagenotfoundComponent } from './main/pagenotfound/pagenotfound.component';
import {MatCardModule, MatToolbarModule, MatIconModule, MatMenuModule,  MatFormFieldModule, MatInputModule, MatButtonModule, MatTabsModule, MatExpansionModule, MatDividerModule, MatListModule} from '@angular/material'
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    TopNavigationComponent,
    BottomNavigationComponent,
    HomeComponent,
    ServicesComponent,
    AdviceComponent,
    RemedyBlogComponent,
    PagenotfoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatMenuModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatTabsModule,
    MatExpansionModule,
    MatDividerModule,
    MatListModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
