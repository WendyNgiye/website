import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { AboutUSComponent } from './about-us/about-us.component';
import { ProjectsComponent } from './projects/projects.component';
import { ProductsServicesComponent } from './products-services/products-services.component';

const routes: Routes = [

  {
    path: 'contact us',
    component: ContactUsComponent,
  },
  
  {
    path: 'home',
    component: HomeComponent,
  },
  {
    path: 'about us',
    component: AboutUSComponent,
  },
  {
    path: 'projects',
    component: ProjectsComponent,
  },
  {
    path: 'products/services',
    component: ProductsServicesComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
