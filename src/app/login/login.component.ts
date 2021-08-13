import { Component, OnInit } from '@angular/core';
import { User } from "../user/user.model";
import { AuthService } from "../shared/auth.service";
import { Router } from "@angular/router";
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  user: User;
  login = "";
  password = "";
  confirmPassword="";

  constructor(
    private authService: AuthService, 
    private router: Router,
    private toastr: ToastrService,
  ) {}

  ngOnInit(): void {
    let src = 'assets/js/login_animation.js';
    this.loadScript(src);
  }
  public loadScript(src) {
    let body = <HTMLDivElement>document.body;
    let script = document.createElement('script');
    script.innerHTML = '';
    script.src = src;
    script.async = true;
    script.defer = true;
    body.appendChild(script);
  }
  onSubmit($event) {
    if (!this.login || !this.password) return;
    this.user = new User();
    this.authService.logIn(this.login, this.password);
    if (this.authService.loggedIn){
     this.router.navigate(["/home"]);
    } else {
      this.toastr.error("Login et/ou mot de passe incorrect")
    }
  }
  onSubmitSigninup($event){
    console.log(this.confirmPassword);
  }
}
