import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { HeroesComponent } from './heroes/heroes.component';
import { FormsModule } from '@angular/forms';
import { HeroDetailComponent } from './hero-detail/hero-detail.component'; // ngModel lives there
import { HeroService } from './hero.service';
import { MessagesComponent } from './messages/messages.component';

@NgModule({
  declarations: [
    AppComponent,
    HeroesComponent,
    HeroDetailComponent,
    MessagesComponent
  ],
  imports: [
    BrowserModule, FormsModule// after adding import add FormsModule to imports array
  ],
  providers: [/*providers array tells Angular to create a single shared instance of HeroService and
    inject into any class that asks for it.*/
    HeroService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
