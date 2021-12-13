import { Component, Input, OnInit } from '@angular/core';
import { Nav } from '../models/netflix-model';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {

  // importo para que me llame y lea lo del padre
  // el ! le digo que no te preocupes que le pasaré la variable,. el ? dice que es opcional la variable 
  @Input() public nav!: Nav; 

  constructor() { }

  ngOnInit(): void {
  }

}
