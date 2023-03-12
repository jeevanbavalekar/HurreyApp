import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-join-room',
  templateUrl: './join-room.component.html',
  styleUrls: ['./join-room.component.css']
})
export class JoinRoomComponent implements OnInit {
  selectedImage: any;
  updateUserInfo: any;

  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    this.dataService.getNewUserInfo().subscribe((info: any) => {
      this.updateUserInfo = info;
    })
    this.selectedImage = this.dataService.getSelectedImage();
  }


}
