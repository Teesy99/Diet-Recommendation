import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './main/home/home.component';
import { ServicesComponent } from './main/services/services.component';
import { AdviceComponent } from './main/advice/advice.component';
import { RemedyBlogComponent } from './main/remedy-blog/remedy-blog.component';
import { PagenotfoundComponent } from './main/pagenotfound/pagenotfound.component';
import { ContactComponent } from './main/contact/contact.component';
import { TCComponent } from './main/tc/tc.component';
import { AboutComponent } from './main/about/about.component';
import { FoodComponent } from './main/food/food.component';
import { DairyComponent } from './main/dairy/dairy.component';
import { MealComponent } from './main/meal/meal.component';
import { FruitsComponent } from './main/fruits/fruits.component';
import { HerbComponent } from './main/herb/herb.component';
import { BeverageComponent } from './main/beverage/beverage.component';
import { SearchResultComponent } from './main/search-result/search-result.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'services', component: ServicesComponent},
  { path: 'advice', component: AdviceComponent },
  { path:'food', component: FoodComponent},
  { path:'dairy', component: DairyComponent},
  { path:'meal', component: MealComponent},
  { path:'fruits', component: FruitsComponent},
  { path:'herb', component: HerbComponent},
  {path:'beverage', component:BeverageComponent},
  { path: 'blog', component: RemedyBlogComponent },
  { path: 'about', component: AboutComponent },
  { path: 'contact', component: ContactComponent },
  {path:'search',component:SearchResultComponent},
  { path: 'tc', component: TCComponent },
  { path: '**', component: PagenotfoundComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
