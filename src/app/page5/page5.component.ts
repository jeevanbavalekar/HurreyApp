import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { DataService } from '../data.service';

@Component({
  selector: 'app-page5',
  templateUrl: './page5.component.html',
  styleUrls: ['./page5.component.css']
})
export class Page5Component implements OnInit {
  code: any;
  selectedImage: any;
  showAlert = false;

  constructor(private dataService: DataService, public snackBar: MatSnackBar) { }

  ngOnInit(): void {
    this.generateCode();
    this.selectedImage = this.dataService.getSelectedImage();

  }


  generateCode() {
    const code = Math.floor(Math.random() * 900000) + 100000;
    this.code = code.toString();
  }
  copyCode() {
    const el = document.createElement('textarea');
    el.value = this.code;
    document.body.appendChild(el);
    el.select();
    document.execCommand('copy');
    document.body.removeChild(el);
    // alert(" Code copied on clipboard ! ")
    this.showAlert = true;

  }

  closeAlert() {
    this.showAlert = false;
  }
}
