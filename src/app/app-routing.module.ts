import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { GithubComponent } from './github/github.component';
import { SearchComponent } from './search/search.component';
import { FormComponent } from './form/form.component';
const routes: Routes = [
  { path: '', redirectTo: 'git', pathMatch: 'full' },
  { path: 'search', component: SearchComponent },
  { path: 'git', component: GithubComponent },
  { path: 'form', component: FormComponent },
  // { path: '**', component: NotFoundComponent },
  // { path: 'goals/:id', component: GoalDetailComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
