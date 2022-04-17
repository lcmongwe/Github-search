import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../environments/environment';
import { Data } from './data';

@Injectable({
  providedIn: 'root',
})
export class DataRequestService {
  data: Data;

  constructor(private http: HttpClient) {
    // this.data=new Data()
  }
}
