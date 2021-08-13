import { Injectable } from '@angular/core';
import { User } from '../user/user.model';
import { UserListdata } from './data/user.data';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  loggedIn = false;
  admin = false;
  loggedUser:User;
  GlobalUserList:any;

  constructor() {}

  logIn(login, password) {
    UserListdata.forEach((user) =>{
      if(login == user.username && password == user.motdepasse){
        localStorage.clear();
        this.loggedIn = true;
        this.admin = true;
        this.loggedUser = new User();
        this.loggedIn = true;
        this.loggedUser.username = login;
        this.loggedUser.motdepasse = password;
        this.loggedUser.Nom = user.Nom;
        this.loggedUser.Datedenaissance = new Date(user.Datedenaissance);
        this.loggedUser.contact = user.contact;
        this.loggedUser.email = user.email;
        this.loggedUser.montantbet = user.montantbet;
        this.loggedUser._id = String(user.userid);
        console.log(this.loggedUser);
        localStorage.setItem("loggeduser", JSON.stringify(this.loggedUser));
      }
    })
  }
  CreateAccount(user:User):void{
    this.loggedIn = true;
    this.GlobalUserList.push(user);
    this.logIn(user.username, user.motdepasse)
  }

  logOut() {
    this.loggedIn = false;
    this.admin = false;
    this.loggedUser = null;
    localStorage.clear();
  }

  isAdmin() {
    return new Promise((resolve, reject) => {
      resolve(this.admin);
    });
  }

  isLogged(){
    return new Promise((resolve, reject) => {
      const res = localStorage.getItem("loggeduser");
      if(res == null || res == undefined){ resolve(false)}
      resolve(true);
    });
  }
}
