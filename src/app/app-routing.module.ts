import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './home/home.component'
import {AboutComponent} from './about/about.component'
import {PagesComponent} from './pages/pages.component'
import {BlogComponent} from './blog/blog.component'
import {ShopComponent} from './shop/shop.component'
import {ContactComponent} from './contact/contact.component'
import {LoginComponent} from './login/login.component'
const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'home',component:HomeComponent},
  {path:'about',component:AboutComponent},
  {path:'page',component:PagesComponent},
  {path:'shop',component:ShopComponent},
  {path:'blog',component:BlogComponent},
  {path:'contact',component:ContactComponent},
  {path:'login',component:LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
