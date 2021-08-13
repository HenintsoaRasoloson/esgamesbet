import { User } from "../user/user.model";
import { Match } from "../match/match.model";
import {Prediction} from '../prediction/prediction.model';

export class Pari {
    _id? : string;
    pari_id: number;
    Match : Match;
    DatePari:Date;
    parieur : User;
    prediction : Prediction;
}