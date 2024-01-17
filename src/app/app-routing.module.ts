import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CompanyComponent } from './company/company.component';
import { ServicesComponent } from './services/services.component';
import { ProjectsComponent } from './projects/projects.component';
import { OrderComponent } from './order/order.component';
import { ContactComponent } from './contact/contact.component';

const routes: Routes = [
  { path: "home", component: HomeComponent },
  { path: "company", component: CompanyComponent },
  { path: "services", component: ServicesComponent },
  { path: "projects", component: ProjectsComponent },
  { path: "order", component: OrderComponent },
  { path: "contact", component: ContactComponent },
  { path: "**", redirectTo: 'home' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
