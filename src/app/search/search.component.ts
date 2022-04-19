import { Component, OnInit } from '@angular/core';
import { DataRequestService } from '../data-request.service';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
})
export class SearchComponent implements OnInit {
  imagePath: string;
  constructor(http: HttpClient) {
    this.imagePath = 'assets/images/search.png';
  }

  ngOnInit(): void {}
}
