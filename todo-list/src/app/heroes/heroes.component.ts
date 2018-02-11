import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { HEROES } from '../mock-heroes';

// ALWAYS import the Component symbol from the Angular core lib and note the component class with @Component
// @Component is a decorator function that specifies the angular metadata for the component
@Component({
  selector: 'app-heroes', // selector: the component CSS element selector
  templateUrl: './heroes.component.html', // the location of the components template file
  styleUrls: ['./heroes.component.css'] // the location of the components private CSS Style
})
// app-heroes matches the name of the HTML element that Ids this component within a parent components template

// always export the class so you can import it elsewhere..like in the AppModule
// tslint:disable-next-line:no-trailing-whitespace
export class HeroesComponent implements OnInit { // master detail view
  // hero: Hero = {
  //   id: 1,
  //   name: 'Chumpchange'
  // }; the page no longer displays because you changed the hero from a string to an object
  heroes = HEROES;

  selectedHero: Hero; // renamed hero property
  onSelect(hero: Hero): void {// assigns the clicked hero from the template to selectedHero prop
    this.selectedHero = hero;
  }
  // tslint:disable-next-line:no-trailing-whitespace

  constructor() { }

  ngOnInit() { // a lifecycle hook that is a good place for putting initialization logic
  }

}
