import { Categorie } from "../categorie/categorie.model";

export class Jeu {
    _id? : string;
    id : number;
    NomJeu : string;
    ImageJeu : string;
    Categorie : Categorie;
}