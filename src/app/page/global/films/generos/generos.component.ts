import { Component, Input, OnInit } from '@angular/core';
import { Films } from '../../models/netflix-model';

@Component({
  selector: 'app-generos',
  templateUrl: './generos.component.html',
  styleUrls: ['./generos.component.scss']
})
export class GenerosComponent implements OnInit {
  @Input() public films!: Films;  


constructor() { }

  ngOnInit(): void {
  }

}
