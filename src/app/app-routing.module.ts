import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormComponent } from './form/form.component';
import { GithubComponent } from './github/github.component';

const routes: Routes = [
  { path: 'login', component: FormComponent },
  { path: 'home', component: GithubComponent },
  // { path: '**', component: NotFoundComponent },
  // { path: 'goals/:id', component: GoalDetailComponent },
  // { path: '', redirectTo: '/goals', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
