import { Component, OnInit } from '@angular/core';
import {Match} from '../match/match.model';
import {ParticipantMatch} from '../match/participantMatch.model';
import {Participant} from '../match/participant.model';
import {CartService} from '../shared/cart.service';
import {Jeu} from '../jeu/jeu.model';
import {Categorie} from '../categorie/categorie.model';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {PariComponent} from '../pari/pari.component';
import {PariService} from '../shared/pari.service';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {
  Top8Match:Match[] = [];

  constructor(
    private cartService:CartService,
    private modalService: NgbModal,
    private PariService: PariService,
    
  ) { }

  ngOnInit(): void { 
    this.getTop8Match();
  }

  getTop8Match() {
    for (let i = 0; i < 8; i++) {
      // participant 
      var participant1 = new Participant(); var participant2 = new Participant();
      participant1.NomParticipant = "France";
      participant2.NomParticipant = "Allemagne";
      // participant match 
      var ParticipantMatch1 = new ParticipantMatch();
      ParticipantMatch1.Team1 = participant1;
      ParticipantMatch1.Team2 = participant2;
      // categorie
      var categorie = new Categorie();
      categorie.NomCategorie = "Sports";
      // Jeu
      var jeu = new  Jeu();
      jeu.NomJeu = "Pro Evolution Soccer" ;
      jeu.Categorie = categorie;
      // match
      var match = new Match();
      match.ParticipantMatch = ParticipantMatch1;
      match.DateMatch = new Date();
      match.ImageMatch = "PES.jpg";
      match.idMatch = i;
      match.TypeJeu = jeu;
      this.Top8Match.push(match);
    }
  }

  AddToCart(item){
    console.log(item);
    if(item != undefined || item!=null){
      this.cartService.AddToCart(item);
    }
  }


  openPariModal(item:Match) {
    const modalRef = this.modalService.open(PariComponent,
      {
        scrollable: true,
        size: 'lg',
        // keyboard: false,
        // backdrop: 'static'
      });
     this.PariService.CreateTempPari(item);

    modalRef.result.then((result) => {
      console.log(result); 
    }, (reason) => {
    });
  }

}
