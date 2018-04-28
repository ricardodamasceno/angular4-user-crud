import { Component } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent {

  constructor(private router: Router, private route: ActivatedRoute) {
  }

  createUser(): void {
    this.router.navigate(['add-user'], {relativeTo: this.route});
  }

  listUser(): void {
    this.router.navigate(['list-user'], {relativeTo: this.route});
  }

}
