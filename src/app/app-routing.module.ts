import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './main/home/home.component';
import { ServicesComponent } from './main/services/services.component';
import { AdviceComponent } from './main/advice/advice.component';
import { RemedyBlogComponent } from './main/remedy-blog/remedy-blog.component';
import { PagenotfoundComponent } from './main/pagenotfound/pagenotfound.component';
import { FoodComponent } from './main/food/food.component';
import { DairyComponent } from './main/dairy/dairy.component';
import { MealComponent } from './main/meal/meal.component';
import { FruitsComponent } from './main/fruits/fruits.component';
import { HerbComponent } from './main/herb/herb.component';


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
=======
  { path: 'blog', component: RemedyBlogComponent },
>>>>>>> cc99983d271114aaae647e4904ff567ccd520185
  { path: '**', component: PagenotfoundComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
