import {Component} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(private router: Router, private route: ActivatedRoute) {
  }

  createUser(): void {
    this.router.navigate(['add-user'], {relativeTo: this.route});
  }

  listUser(): void {
    this.router.navigate(['list-user'], {relativeTo: this.route});
  }

}
