import { Component, OnInit } from '@angular/core';

import { DataRequestService } from '../data-request.service';

@Component({
  selector: 'app-github',
  templateUrl: './github.component.html',
  styleUrls: ['./github.component.css'],
})
export class GithubComponent implements OnInit {
  constructor(public dataRequestService: DataRequestService) {}
  datas: any;

  ngOnInit() {}
}
