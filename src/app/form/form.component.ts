import { Component, OnInit } from '@angular/core';
import { DataRequestService } from '../data-request.service';
import { HttpClient } from '@angular/common/http';
import { RepoService } from '../repo.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css'],
})
export class FormComponent implements OnInit {
  userInput: string = '';
  user: any;
  repos: any[];
userName:string

  constructor(
    private dataRequestService: DataRequestService,
    private http: HttpClient,
    private repoService:RepoService
  ) {}

  ngOnInit(): void {}

  getUsername(userName: string) {
    this.dataRequestService
      .getUser(userName)
      .then((result) => (this.user = result));
   

  
  }

}
