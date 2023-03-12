import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private selectedImage: any;

  constructor() { }

  private newUser = new BehaviorSubject<any>({
    firstName: 'Kevin',
  })


  setNewUserInfo(user: any) {
    this.newUser.next(user);
  }


  getNewUserInfo() {
    return this.newUser.asObservable();
  }

  setSelectedImage(image: string) {
    this.selectedImage = image;
  }

  getSelectedImage(): string {
    return this.selectedImage;
  }

}
