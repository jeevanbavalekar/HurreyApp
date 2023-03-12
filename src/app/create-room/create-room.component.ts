import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../data.service';

@Component({
  selector: 'app-create-room',
  templateUrl: './create-room.component.html',
  styleUrls: ['./create-room.component.css']
})
export class CreateRoomComponent implements OnInit {
  selectedImage: any;
  updateUserInfo: any;
  constructor(private dataService: DataService, private router: Router) { }
  @ViewChild('submitButton') submitButton!: ElementRef<HTMLButtonElement>;

  ngOnInit(): void {

    this.dataService.getNewUserInfo().subscribe((info: any) => {
      this.updateUserInfo = info;
    })
    this.selectedImage = this.dataService.getSelectedImage();
  }

  generateRandomNumber() {
    this.router.navigate(['/page5']);
  }
}
