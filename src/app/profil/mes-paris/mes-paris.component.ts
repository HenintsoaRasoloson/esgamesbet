import { Component, OnInit } from '@angular/core';
import { PariService } from '../../shared/pari.service'
import {Pari} from '../../pari/pari.model';
import { User } from '../../user/user.model';
import {Match} from '../../match/match.model';
import {ParticipantMatch} from '../../match/participantMatch.model';
import {Participant} from '../../match/participant.model';
import {CartService} from '../../shared/cart.service';
import {Jeu} from '../../jeu/jeu.model';
import {Categorie} from '../../categorie/categorie.model';
import {Prediction} from '../../prediction/prediction.model';

@Component({
  selector: 'app-mes-paris',
  templateUrl: './mes-paris.component.html',
  styleUrls: ['./mes-paris.component.css']
})
export class MesParisComponent implements OnInit {
  MesParis=[];
  constructor(
    private PariService: PariService
  ) { }

  ngOnInit(): void {
   this.getMesParis();
  }

  getMesParis(){
    this.PariService.GetAllPari().subscribe((data) =>{
      console.log("data",data);
      data.forEach((item) => {
        //create object match with all details
        let user = new User();
        user.username = item.parieur.username;

        let prediction = new Prediction();
        prediction.team1bet = item.prediction.team1bet;
        prediction.egalite = item.prediction.egalite;
        prediction.team2bet = item.prediction.team2bet;

        let categ = new Categorie();
        categ.NomCategorie = item.Match.TypeJeu.Categorie.NomCategorie;
        categ.ImageCategorie = item.Match.TypeJeu.Categorie.ImageCategorie;

        let jeu = new Jeu();
        jeu.NomJeu = item.Match.TypeJeu.NomJeu;
        jeu.Categorie = categ;

        let participant1 = new Participant();
        participant1.NomParticipant = item.Match.ParticipantMatch.Team1.NomParticipant;
        let participant2 = new Participant();
        participant2.NomParticipant = item.Match.ParticipantMatch.Team2.NomParticipant;

        let pm = new ParticipantMatch();
        pm.Team1 = participant1;
        pm.Team2 = participant2;

        let match = new Match();
        match.DateMatch = item.Match.DateMatch;
        match.ImageMatch = item.Match.ImageMatch;
        match.idMatch = item.Match.idMatch;
        match.TypeJeu = jeu;
        match.ParticipantMatch = pm;

        let pari = new Pari();
        pari.DatePari = item.DatePari;
        pari.Match = match;
        pari.parieur = user;
        pari.prediction = prediction;

        this.MesParis.push(pari);
      })
    });
  }

}
