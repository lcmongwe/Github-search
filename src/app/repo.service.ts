import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { lastValueFrom } from 'rxjs';
import { DataRequestService } from './data-request.service';

@Injectable({
  providedIn: 'root',
})
export class RepoService {
  repo: any[]
  
  constructor(private http: HttpClient,  private dataRequestService:DataRequestService) { }
  //   async getRepo(userName: string) {
  //     const promise = this.http.get(`${environment.githuapi}/users/repos${repoName}`);

  //     return await lastValueFrom(promise)
  //       .then((result) => result)
  //       .catch((error) => console.log(error));
  //   }
  // }

  async getRepos(username: string) {
    this.repo = [];
    const value = this.http.get(
      `${environment.githuapi}/users/${username}/repo?`);
    await lastValueFrom(value)
      .then((repo:any) => (this.repo = repo))
      .catch((error) => error);
    return this.repo;
    // console.log(this.repos);
  }

}