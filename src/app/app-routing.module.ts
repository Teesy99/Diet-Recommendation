import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './main/home/home.component';
import { ServicesComponent } from './main/services/services.component';
import { AdviceComponent } from './main/advice/advice.component';
import { RemedyBlogComponent } from './main/remedy-blog/remedy-blog.component';
import { PagenotfoundComponent } from './main/pagenotfound/pagenotfound.component';
<<<<<<< HEAD
import { FoodComponent } from './main/food/food.component';
import { DairyComponent } from './main/dairy/dairy.component';
import { MealComponent } from './main/meal/meal.component';
import { FruitsComponent } from './main/fruits/fruits.component';
import { HerbComponent } from './main/herb/herb.component';
import { BeverageComponent } from './main/beverage/beverage.component';

=======
import { ContactComponent } from './main/contact/contact.component';
import { TCComponent } from './main/tc/tc.component';
import { AboutComponent } from './main/about/about.component';
>>>>>>> fe1460f6e775d7bb487d3bd6da01eb073640b468

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'services', component: ServicesComponent},
  { path: 'advice', component: AdviceComponent },
<<<<<<< HEAD
  { path: 'remedy', component: RemedyBlogComponent },
  { path:'food', component: FoodComponent},
  { path:'Dairy', component: DairyComponent},
  { path:'meal', component: MealComponent},
  { path:'Fruits', component: FruitsComponent},
  { path:'Herb', component: HerbComponent},
  {path:'Beverage', component:BeverageComponent},
=======
  { path: 'blog', component: RemedyBlogComponent },
  { path: 'about', component: AboutComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'tc', component: TCComponent },
>>>>>>> fe1460f6e775d7bb487d3bd6da01eb073640b468
  { path: '**', component: PagenotfoundComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
