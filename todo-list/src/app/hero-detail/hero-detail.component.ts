import { Component, OnInit, Input } from '@angular/core'; // for input prop add Input
import { Hero } from '../hero'; // binds to the components hero property of type Hero

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css']
})
// This component only recieves a hero object thru its hero property and displays it
export class HeroDetailComponent implements OnInit {
  @Input() hero: Hero; // this component simply receives a hero object thru its hero prop and displays it
  constructor() { }

  ngOnInit() {
  }

}
