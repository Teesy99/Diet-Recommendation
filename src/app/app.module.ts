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
import {MatCardModule, MatToolbarModule, MatIconModule, MatMenuModule,  MatFormFieldModule, MatInputModule, MatButtonModule, MatTabsModule, MatExpansionModule, MatDividerModule, MatListModule, MatAutocompleteModule} from '@angular/material'
import { ReactiveFormsModule } from '@angular/forms';
import { FoodComponent } from './main/food/food.component';
import { DairyComponent } from './main/dairy/dairy.component';
import { MealComponent } from './main/meal/meal.component';
import { FruitsComponent } from './main/fruits/fruits.component';
import { HerbComponent } from './main/herb/herb.component';
import { BeverageComponent } from './main/beverage/beverage.component';

import { AboutComponent } from './main/about/about.component';
import { ContactComponent } from './main/contact/contact.component';
import { TCComponent } from './main/tc/tc.component';
import { SearchResultComponent } from './main/search-result/search-result.component';
import { HttpClientModule } from '@angular/common/http';


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
    BeverageComponent,
    AboutComponent,
    ContactComponent,
    TCComponent,
    SearchResultComponent
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
    MatListModule,
    MatAutocompleteModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
