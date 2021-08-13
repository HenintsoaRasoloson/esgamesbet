import { Injectable } from '@angular/core';
import { forkJoin, Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import {Pari} from '../pari/pari.model';
import {Match} from '../match/match.model'

@Injectable({
  providedIn: 'root',
})
export class PariService {
  Pari:Pari;
  loggeduser = JSON.parse(localStorage.getItem('loggeduser'));
  uri = 'http://localhost:8010/api/pari';
  urimesparis = 'http://localhost:8010/api/user/pari/'+this.loggeduser._id;

  constructor(
    private http:HttpClient
  ) {
  }

  GetCurrentPari(){
      return this.Pari;
  }

  CreateTempPari(item:Match){

    const pari = new Pari();
    pari.Match = item;
    pari.parieur = JSON.parse(localStorage.getItem("loggeduser"));
    pari.DatePari =  new Date();

    this.Pari = pari;
  }

  SavePari(pari:Pari):Observable<any> {  
      console.log("eto le add", pari)
      return this.http.post(this.uri, pari);
  }

  GetAllPari():Observable<Pari[]>{
    return this.http.get<Pari[]>(this.urimesparis);
  }
}
