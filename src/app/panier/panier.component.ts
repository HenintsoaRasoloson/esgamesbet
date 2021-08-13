import { Component, OnInit } from '@angular/core';
import {NgbModal, NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';
import { CartService } from "../shared/cart.service";
import { PariService } from "../shared/pari.service";
import { Pari } from "../pari/pari.model";
import { ToastrService } from 'ngx-toastr';

import * as $ from "jquery";

@Component({
  selector: 'app-panier',
  templateUrl: './panier.component.html',
  styleUrls: ['./panier.component.css']
})
export class PanierComponent implements OnInit {
  closeResult = '';
  Panier=[];
  constructor(
    public activeModal: NgbActiveModal,
    private cartService: CartService,
    private pariService: PariService,
    private toastr: ToastrService,
    ) { }

  ngOnInit(): void {
    this.Panier = this.cartService.GetCurrentCart();
  }

  closeModal(sendData:any) {   
    this.activeModal.close(sendData);
  }
  SavePari(sendData:any) {
    let listPari = this.cartService.GetCurrentCart();
    console.log(listPari);
    listPari.forEach(((pari,index) =>{
      this.pariService.SavePari(pari).subscribe(()=>{
        console.log("subscribe save pari");
        this.cartService.RemoveFromCart(index);
        this.toastr.success("Pari(s) enregistré(s) avec succès")
      });
    }));
    
    this.activeModal.close(sendData);
  }

  RemoveFromCart(id:number){
    this.cartService.RemoveFromCart(id);
    $(".Panieritem"+id).remove();
  }
  isEmptyCart(){
    if(this.cartService.GetCurrentCart().length == 0){ return true;}
    else { return false;}
  }
  
}
