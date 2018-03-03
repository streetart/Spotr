import { Component} from '@angular/core';
import {animate, query, stagger, style, transition, trigger} from "@angular/animations";


@Component({
  selector: 'app-beach-cards',
  templateUrl: './beach-cards.component.html',
  styleUrls: ['./beach-cards.component.css'],
  animations: [

    trigger('slideInAnimation', [
      transition('* => *', [
        query('div',style({ transform: 'translateY(100%)'})),
        query('div',
          stagger('1200ms', [
            animate('900ms', style({ transform: 'translateX(0)'}))
          ]))
      ])
    ])
  ]
})
export class BeachCardsComponent{

  myBeachCards = [
    {'name': 'Beach-1', 'area': 'South Coast', 'image': 'https://picsum.photos/300/200?image=1041'},
    {'name': 'Beach-2', 'area': 'North Coast', 'image': 'https://picsum.photos/300/200?image=986'},
    {'name': 'Beach-3', 'area': 'West Coast', 'image': 'https://picsum.photos/300/200?image=970'},
    {'name': 'Beach-4', 'area': 'East Coast', 'image': 'https://picsum.photos/300/200?image=909'},
    {'name': 'Beach-4', 'area': 'East Coast', 'image': 'https://picsum.photos/300/200?image=846'},
    {'name': 'Beach-4', 'area': 'East Coast', 'image': 'https://picsum.photos/300/200?image=653'},
    {'name': 'Beach-4', 'area': 'East Coast', 'image': 'https://picsum.photos/300/200?image=610'},
  ];

  constructor() { }


}
