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
import {MatCardModule, MatToolbarModule, MatIconModule, MatMenuModule,  MatFormFieldModule, MatInputModule, MatButtonModule, MatTabsModule} from '@angular/material'
import { ReactiveFormsModule } from '@angular/forms';
import { FoodComponent } from './main/food/food.component';
import { DairyComponent } from './main/dairy/dairy.component';
import { MealComponent } from './main/meal/meal.component';
import { FruitsComponent } from './main/fruits/fruits.component';
import { HerbComponent } from './main/herb/herb.component';


@NgModule({
  declarations: [
    AppComponent,
    TopNavigationComponent,
    BottomNavigationComponent,
    HomeComponent,
    ServicesComponent,
    AdviceComponent,
    RemedyBlogComponent,
    PagenotfoundComponent,
    FoodComponent,
    DairyComponent,
    MealComponent,
    FruitsComponent,
    HerbComponent,
    
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
    MatTabsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
