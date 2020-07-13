import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Component } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { CreateUserComponent } from './User/create-user/create-user.component';
import { GetUserComponent } from './User/get-user/get-user.component';
import { UserService } from './service/user.service';
import { HomeComponent } from './home/home.component';
import { UpdateUserComponent } from './user/update-user/update-user.component';
import { CreatePublicationComponent } from './publication/create-publication/create-publication.component';
import { GetPublicationComponent } from './publication/get-publication/get-publication.component';
import { CreateFormationComponent } from './formation/create-formation/create-formation.component';
import { GetFormationComponent } from './formation/get-formation/get-formation.component';
import { CreateEvenementComponent } from './evenement/create-evenement/create-evenement.component';
import { GetEvenementComponent } from './evenement/get-evenement/get-evenement.component';
import { LoginComponent } from './user/login/login.component';
import { CreateEquipementComponent } from './equipement/create-equipement/create-equipement.component';
import { GetEquipementComponent } from './equipement/get-equipement/get-equipement.component';
import { CreateParkingComponent } from './parking/create-parking/create-parking.component';
import { GetParkingComponent } from './parking/get-parking/get-parking.component';
import { UpdatePublicationComponent } from './publication/update-publication/update-publication.component';
import { UpdateFormationComponent } from './formation/update-formation/update-formation.component';
import { UpdateEvenementComponent } from './evenement/update-evenement/update-evenement.component';
import { UpdateEquipemetComponent } from './equipement/update-equipemet/update-equipemet.component';
import { CreateSalleComponent } from './salle_reunion/create-salle/create-salle.component';
import { GetSalleComponent } from './salle_reunion/get-salle/get-salle.component';
import { GetUserByIdComponent } from './user/get-user-by-id/get-user-by-id.component';

const routes = [
  //User
  { path: 'home', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'create', component: CreateUserComponent },
  { path: 'list-employes', component: GetUserComponent },
  { path: 'update-employe/:id', component: UpdateUserComponent },
  { path: 'get-employe/:id', component: GetUserByIdComponent},

  //Publication
  { path: 'ajouter/publication', component: CreatePublicationComponent },
  { path: 'liste-publication', component: GetPublicationComponent },
  { path: 'update-publication/:id', component: UpdatePublicationComponent },

  //Formation
  { path: 'ajouter/formation', component: CreateFormationComponent },
  { path: 'liste-formation', component: GetFormationComponent },
  { path: 'update-formation/:id', component: UpdateFormationComponent },

  //Evenement
  { path: 'ajouter/evenement', component: CreateEvenementComponent },
  { path: 'liste-evenement', component: GetEvenementComponent },
  { path: 'update-evenement/:id', component: UpdateEvenementComponent },


  //Equipement
  { path: 'ajouter/equipement', component: CreateEquipementComponent },
  { path: 'liste-equipement', component: GetEquipementComponent },
  { path: 'update-equipement/:id', component: UpdateEquipemetComponent },


  //Parking
  { path: 'ajouter/place-parking', component: CreateParkingComponent },
  { path: 'liste-place-parking', component: GetParkingComponent },

  //Salle Reunion
  { path: 'ajouter/salle', component: CreateSalleComponent },
  { path: 'afficher-salle', component: GetSalleComponent }
]

@NgModule({
  declarations: [
    AppComponent,
    CreateUserComponent,
    GetUserComponent,
    HomeComponent,
    UpdateUserComponent,
    CreatePublicationComponent,
    GetPublicationComponent,
    CreateFormationComponent,
    GetFormationComponent,
    CreateEvenementComponent,
    GetEvenementComponent,
    LoginComponent,
    CreateEquipementComponent,
    GetEquipementComponent,
    CreateParkingComponent,
    GetParkingComponent,
    UpdatePublicationComponent,
    UpdateFormationComponent,
    UpdateEvenementComponent,
    UpdateEquipemetComponent,
    CreateSalleComponent,
    GetSalleComponent,
    GetUserByIdComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routes),

  ],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
