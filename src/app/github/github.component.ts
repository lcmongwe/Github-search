import { Component, OnInit } from '@angular/core';

import { DataRequestService } from '../data-request.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-github',
  templateUrl: './github.component.html',
  styleUrls: ['./github.component.css'],
})
export class GithubComponent implements OnInit {
  imagePath: string;
  path: string;
  
  constructor(public dataRequestService: DataRequestService, private http: HttpClient) {
    this.imagePath = 'assets/images/animate.gif'
    this.path='assets/back1.jpg'
  }
  datas: any;

  ngOnInit() {}
}
