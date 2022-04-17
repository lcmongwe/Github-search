import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormComponent } from './form/form.component';

const routes: Routes = [
  { path: 'form', component: FormComponent },
  // { path: 'about', component: AboutComponent },
  // { path: '**', component: NotFoundComponent },
  // { path: 'goals/:id', component: GoalDetailComponent },
  // { path: '', redirectTo: '/goals', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
