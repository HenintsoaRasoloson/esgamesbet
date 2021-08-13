import { Component, OnInit } from '@angular/core';
import { NgbModal, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { PariService } from '../shared/pari.service';
import {Prediction} from '../prediction/prediction.model'
import {CartService} from '../shared/cart.service';

@Component({
  selector: 'app-pari',
  templateUrl: './pari.component.html',
  styleUrls: ['./pari.component.css'],
})
export class PariComponent implements OnInit {
  current_pari;
  gain1:any;
  gain2:any;
  gainnul:any;
  bet1;
  betnul;
  bet2;
  cote: number = 3.14;
  constructor(
    public activeModal: NgbActiveModal,
    private PariService: PariService,
    private cartService: CartService,
  ) {}

  ngOnInit(): void {
    this.current_pari = this.PariService.GetCurrentPari();
    console.log(this.current_pari);
  }

  closeModal(sendData: any) {
    this.activeModal.close(sendData);
  }

  setgainteam1($event) {
    this.bet1 = $event;
    let totalgain1= this.cote * $event;
    this.gain1 = totalgain1.toFixed(2).replace(/(\d)(?=(\d{3})+\b)/g,'$1 ');
  }
  setgainnul($event) {
    this.betnul = $event;
    let totalgainnul = this.cote * $event;
    // séparateur de millier
    this.gainnul = totalgainnul.toFixed(2).replace(/(\d)(?=(\d{3})+\b)/g,'$1 ');
  }
  setgainteam2($event) {
    this.bet2 = $event;
    let totalgain2 = this.cote * $event;
    // séparateur de millier
    this.gain2 = totalgain2.toFixed(2).replace(/(\d)(?=(\d{3})+\b)/g,'$1 ');
  }

  onSubmit($event){
    console.log("ato",this.bet1,this.bet2,this.betnul);
    const predict = new Prediction();
    predict.team1bet = this.bet1;
    predict.egalite = this.betnul;
    predict.team2bet = this.bet2;
    this.current_pari.prediction = predict;

    console.log(this.current_pari);
    this.cartService.AddToCart(this.current_pari);
    this.closeModal("sent to cart");
    
  }
}
