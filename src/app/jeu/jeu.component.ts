import { Component, OnInit } from '@angular/core';
import { Categorie } from '../categorie/categorie.model';
import { Jeu } from './jeu.model';

@Component({
  selector: 'app-jeu',
  templateUrl: './jeu.component.html',
  styleUrls: ['./jeu.component.css']
})
export class JeuComponent implements OnInit {
  AllGames:Jeu[] = [];
  constructor() { }

  ngOnInit(): void {
    this.getAllGames();
  }

  getAllGames() {
    var game = new Jeu();
    game.NomJeu = "Dota 2";
    game.ImageJeu = "dota2.jpg"
    var categ = new Categorie();
    categ.NomCategorie = "MOBA";
    game.Categorie = categ;

    for (var i = 0; i < 5;i++) {
      this.AllGames.push(game);
    }
  }
}
