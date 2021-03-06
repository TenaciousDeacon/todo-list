import { Injectable } from '@angular/core';

import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';

import { Hero } from './hero';
import { HEROES } from './mock-heroes';
import { MessageService } from './message.service';

/*uses the service to send a message*/
@Injectable()
export class HeroService {

  constructor(private messageService: MessageService) { }

  getHeroes(): Observable<Hero[]> {
    this.messageService.add('HeroService: fetched Heroes');
    return of(HEROES);
    /*of(HEROES) returns and Observable<Hero[]> that emits a single value, the array of mock hereos*/
  }
}
/*
@Injectable() tells Angular that this service might have injected dependencies.
Angular style guidelines strongly recommend keeping it and the linter enforces the rule.
**Linter is the tool that analyzes source code to flag programming errors.
*/
