import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../data.service';

@Component({
  selector: 'app-page4',
  templateUrl: './page4.component.html',
  styleUrls: ['./page4.component.css']
})
export class Page4Component implements OnInit {
  selectedImage: any;
  updateUserInfo: any;

  constructor(private dataService: DataService, private router: Router) { }

  ngOnInit(): void {
    this.dataService.getNewUserInfo().subscribe((info: any) => {
      this.updateUserInfo = info;
    })
    this.selectedImage = this.dataService.getSelectedImage();
  }

  join() {
    this.router.navigate(['/joinRoom']);
  }

  create() {
    this.router.navigate(['/createRoom']);
  }

}
