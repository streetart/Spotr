import { Component} from '@angular/core';
import {
  trigger,
  state,
  stagger,
  query,
  style,
  animate,
  transition
} from '@angular/animations';



@Component({
  selector: 'app-beaches',
  templateUrl: './beaches.component.html',
  styleUrls: ['./beaches.component.css'],
  animations: [
    trigger('slideInAnimation', [
      transition('* => *', [
        query('div',style({ transform: 'translateX(100%)'})),
        query('div',
          stagger('600ms', [
            animate('900ms', style({ transform: 'translateX(0)'}))
          ]))
      ])
    ])
  ]

})
export class BeachesComponent{

  constructor() { }



}
