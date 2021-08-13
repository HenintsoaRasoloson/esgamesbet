import { ParticipantMatch } from "./participantMatch.model";
import { Resultat } from "./resultat.model";
import { Jeu } from "../jeu/jeu.model";

export class Match {
    _id? : string;
    idMatch : number;
    TypeJeu : Jeu;
    DateMatch :Date;
    ParticipantMatch :ParticipantMatch;
    Resultat: Resultat;
    ImageMatch : string;
    EtatMatch : number; // 0 : à venir, 1 : en cours, 2 : terminé, 3 : annulé

}