import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { lastValueFrom } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class RepoService {
  constructor(private http: HttpClient) {}
  async getRepo(repoName: any) {
    const promise = this.http.get(`${environment.githuapi}/users/${repoName}`);

    return await lastValueFrom(promise)
      .then((result) => result)
      .catch((error) => console.log(error));
  }
}
