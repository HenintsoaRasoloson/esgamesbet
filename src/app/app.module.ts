import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { LoginComponent } from './login/login.component';
import { HomepageComponent } from './homepage/homepage.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http'; 
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { QRCodeModule } from 'angularx-qrcode';

import { CategorieComponent } from './categorie/categorie.component';
import { JeuComponent } from './jeu/jeu.component';
import { PanierComponent } from './panier/panier.component';
import { PariComponent } from './pari/pari.component';
import { ProfilComponent } from './profil/profil.component';
import { InfopersoComponent } from './profil/infoperso/infoperso.component';
import { MesParisComponent } from './profil/mes-paris/mes-paris.component';

const routes:Routes = [
  {
    // indique que http://localhost:4200 sans rien ou avec un "/" à la fin
    path:"",
    component: LoginComponent
  },
  {
    // idem avec  http://localhost:4200/home
    path:"home",
    component: HomepageComponent
  },
  {
    // idem avec  http://localhost:4200/home
    path:"categorie",
    component: CategorieComponent
  },
  {
    path:"jeu",
    component: JeuComponent
  },
  {
    path:"profil",
    component: ProfilComponent
  },
  // {
  //   path:"assignment/:id",
  //   component:
  // }
  // {
  //   path:"assignment/:id/edit",
  //   component:EditAssigmentComponent,
  //   canActivate : [AuthGuard]
  // }
]

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomepageComponent,
    HeaderComponent,
    FooterComponent,
    CategorieComponent,
    JeuComponent,
    PanierComponent,
    PariComponent,
    ProfilComponent,
    InfopersoComponent,
    MesParisComponent
  ],
  imports: [
    BrowserModule,
    NgbModule,
    FormsModule,
    RouterModule.forRoot(routes),
    FontAwesomeModule,
    HttpClientModule,
    ToastrModule.forRoot(),
    QRCodeModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
