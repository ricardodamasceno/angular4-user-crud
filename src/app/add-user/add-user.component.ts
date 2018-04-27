import {Component} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent {

  baseUrl = 'http://localhost:8080/rest/v1/user';
  name = '';
  lastName = '';
  birthDate = undefined;

  constructor(private http: HttpClient) {
  }

  resetForm(): void {
    this.name = '';
    this.lastName = '';
    this.birthDate = '';
  }

  saveUser(): void {
    const user = {
      name: this.name,
      lastName: this.lastName,
      birthDate: this.birthDate
    };

    this.http.post(this.baseUrl, user).subscribe(
      (data: any) => {
        this.resetForm();
      }
    );
  }

}
