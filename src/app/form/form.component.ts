import { Component, OnInit } from '@angular/core';
import { DataRequestService } from '../data-request.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css'],
})
export class FormComponent implements OnInit {
  userInput: string = '';
  user: any;
  repos: any[];
  constructor(private dataRequestService: DataRequestService) {}

  ngOnInit(): void { }
  getRepo(repos: any) {
    // this.
    
  }
  getUsername(userName: string) {
    this.dataRequestService
      .getUser(userName)
      .then((result) => (this.user = result));
    
  }

}
