import { Component, OnInit } from '@angular/core';
import { Categorie } from './categorie.model';

@Component({
  selector: 'app-categorie',
  templateUrl: './categorie.component.html',
  styleUrls: ['./categorie.component.css']
})
export class CategorieComponent implements OnInit {
  AllCategories:Categorie[] = []

  constructor() { }

  ngOnInit(): void {
    this.getAllCategorie();
  }
  getAllCategorie() {
    var CategorieList = ["Jeu de course", "Jeu de Strategie", "MOBA", "Jeu de Sport", "Battle Royale"];
    for(let c of CategorieList){
      var i = 0;
      var categ = new Categorie();
      categ.id = i;
      categ.NomCategorie = c;
      categ.ImageCategorie = "jeu_smartphone.jpg"
      this.AllCategories.push(categ);
    }
  }
}
