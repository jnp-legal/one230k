import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AngularFireModule } from '@angular/fire';
import { AngularFireAuthModule } from "@angular/fire/auth";
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AppComponent } from './app.component';
import { environment } from '../../environments/environment';
import { RepositoryComponent } from '../repository/repository.component';
import { AppRoutingModule } from './app-routing.module';
import { LoginComponent } from '../user/login/login.component';
import { RegisterComponent } from '../user/register/register.component'

@NgModule({
  declarations: [
    AppComponent,
    RepositoryComponent,
    LoginComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireAuthModule,
    AngularFirestoreModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
