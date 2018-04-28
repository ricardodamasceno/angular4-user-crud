import {Component, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-list-users',
  templateUrl: './list-users.component.html',
  styleUrls: ['./list-users.component.css']
})
export class ListUsersComponent implements OnInit {

  constructor(private http: HttpClient) {
  }

  baseUrl = 'http://localhost:8080/rest/v1/user';
  users = [];

  ngOnInit() {
    this.findAllUsers();
  }

  findAllUsers() {
    this.http.get(this.baseUrl).subscribe(
      (data: any) => {
        this.users = data;
      }
    );
  }

  deleteUser(id) {
    this.http.delete(this.baseUrl + '/' + id).subscribe(
      (data: any) => {
        this.findAllUsers();
      }
    );
  }

}
