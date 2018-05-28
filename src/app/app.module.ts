import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AngularFireModule } from 'angularfire2';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { TimeAgoPipe } from 'time-ago-pipe';

import { AppComponent } from './app.component';
import { environment } from './../environments/environment';

import { AuthService } from './auth/auth.service';
import { AngularFireService } from './angular-fire.service';
import { PostComponent } from './post/post.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { AddPostComponent } from './post/add-post/add-post.component';

@NgModule({
  declarations: [
    AppComponent,
    TimeAgoPipe,
    PostComponent,
    NavbarComponent,
    FooterComponent,
    AddPostComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
    AngularFirestoreModule
  ],
  providers: [
    AuthService,
    AngularFireService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
