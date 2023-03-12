import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../data.service';

@Component({
  selector: 'app-page2',
  templateUrl: './page2.component.html',
  styleUrls: ['./page2.component.css']
})
export class Page2Component implements OnInit {
  firstName = "";

  constructor(private dataService: DataService, private router: Router) { }

  ngOnInit(): void {

  }
  submitBtn() {
    this.dataService.setNewUserInfo({
      firstName: this.firstName,
    });
    this.router.navigate(['/page3']);

  }
}
