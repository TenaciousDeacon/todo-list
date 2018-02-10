import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class HeroService {

  constructor() { }

  getHeroes(): Observable<Hero[]> {
    //Todo: send the message _after_ fetching the heroes
    this.messageService.add('HeroService: fetched heroes');
    return of(HEROES);
  }
}
/*
@Injectable() tells Angular that this service might have injected dependencies.
Angular style guidelines strongly recommend keeping it and the linter enforces the rule.
**Linter is the tool that analyzes source code to flag programming errors.
*/