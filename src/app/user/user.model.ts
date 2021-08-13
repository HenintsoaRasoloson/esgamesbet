import { Typeuser } from "../user/typeuser.model";

export class User{
    _id? :string;
    Typeuser : Typeuser;
    userid :number;
    Nom: string;
    username : string;
    Datedenaissance : Date;
    email :string;
    motdepasse : string;
    contact : string;
    montantbet: number;

}