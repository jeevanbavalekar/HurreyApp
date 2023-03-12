import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../data.service';

@Component({
  selector: 'app-page3',
  templateUrl: './page3.component.html',
  styleUrls: ['./page3.component.css']
})
export class Page3Component implements OnInit {
  updateUserInfo: any;
  selectedImage: any;
  isImageSelected = false;

  constructor(private dataService: DataService, private router: Router) { }

  ngOnInit(): void {
    this.dataService.getNewUserInfo().subscribe((info: any) => {
      this.updateUserInfo = info;
    })
  }

  images = [
    { src: 'assets/person1.png', selected: false },
    { src: 'assets/person2.png', selected: false },
    { src: 'assets/person3.png', selected: false },
    { src: 'assets/person4.png', selected: false },
    { src: 'assets/person5.png', selected: false },
  ]


  onSelectImage(image: any) {

    // Set selected property to true for selected image and false for all other images
    for (let i = 0; i < this.images.length; i++) {
      if (this.images[i].src === image.src) {
        this.images[i].selected = true;
        // Set selected image in service
        this.dataService.setSelectedImage(image.src);
      } else {
        this.images[i].selected = false;
      }
    }
    this.router.navigate(['/page4']);


  }


  selectImage(selectedImage: any) {
    // Set selected property to true for selected image and false for all other images
    this.images.forEach(image => {
      image.selected = image === selectedImage;
    });
    this.isImageSelected = this.images.some(image => image.selected);

    for (let i = 0; i < this.images.length; i++) {
      if (this.images[i].src === selectedImage.src) {
        this.images[i].selected = true;
        // Set selected image in service
        this.dataService.setSelectedImage(selectedImage.src);
      } else {
        this.images[i].selected = false;
      }

    }
  }

  next() {
    this.router.navigate(['/page4']);

  }
}
