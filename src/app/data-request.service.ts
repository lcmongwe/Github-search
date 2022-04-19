import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { environment } from '../environments/environment';
import { lastValueFrom } from 'rxjs'

@Injectable({
  providedIn: 'root',
})
export class DataRequestService {

  constructor(private httpClient: HttpClient) {}

  async getUser(userName: string) {
    const promise = this.httpClient.get(
      `${environment.githuapi}/users/${userName}`
    );
    return await lastValueFrom(promise)
      .then((result) => result)
      .catch((error) => console.log(error));
  }
}
