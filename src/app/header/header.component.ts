import { Component, OnInit } from '@angular/core';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
import {PanierComponent} from '../panier/panier.component';
import { CartService } from "../shared/cart.service";
import {AuthService} from "../shared/auth.service";
import { Router } from "@angular/router";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})

export class HeaderComponent implements OnInit {
  Panier=[];
  closeResult = '';
  loggeduser = JSON.parse(localStorage.getItem('loggeduser'));
  
  constructor(
    private modalService: NgbModal,
    private cartService: CartService,
    private authService: AuthService,
    private router: Router
    ) { }

  ngOnInit(): void {
    // this.AddSomeDataToCart(4);
    this.Panier = this.cartService.GetCurrentCart();
    this.IsLogged();
  }

  openCart() {
    this.IsLogged();
    const modalRef = this.modalService.open(PanierComponent,
      {
        scrollable: true,
        // keyboard: false,
        // backdrop: 'static'
      });

    modalRef.result.then((result) => {
      console.log(result); 
    }, (reason) => {
    });
  }

  AddSomeDataToCart(item:number){
    this.IsLogged();
    console.log("add some data to cart")
    for (let i = 0; i <item;i++){
      this.cartService.AddToCart("item"+i);
    }
  }
  RemoveItemFromCart(id){
    this.IsLogged();
    this.cartService.RemoveFromCart(id);
  }

  Logout(){
    this.authService.logOut();
    if (!this.authService.loggedIn){
      this.router.navigate(["/"]);
     } 
  }

  IsLogged(){
    return this.authService.isLogged().then((logged) =>{
      if(!logged){
        this.router.navigate([""]);
      }
    });
  }
}
