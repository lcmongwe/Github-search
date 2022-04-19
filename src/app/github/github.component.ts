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
  
  constructor(public dataRequestService: DataRequestService, private http: HttpClient) {
    this.imagePath='assets/images/animate.gif'
  }
  datas: any;

  ngOnInit() {}
}
