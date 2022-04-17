import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { GithubComponent } from './github/github.component';
import { SearchComponent } from './search/search.component';

const routes: Routes = [
  { path: 'search', component: SearchComponent },
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
