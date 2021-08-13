import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-infoperso',
  templateUrl: './infoperso.component.html',
  styleUrls: ['./infoperso.component.css']
})
export class InfopersoComponent implements OnInit {
  current_user;
  myAngularxQrCode;
  constructor() { }

  ngOnInit(): void {
    this.current_user = JSON.parse(localStorage.getItem('loggeduser'));
    this.myAngularxQrCode = JSON.stringify(this.current_user);
  }

}
