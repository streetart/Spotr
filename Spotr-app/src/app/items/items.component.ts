import { Component, OnInit } from '@angular/core';
import { ItemService } from '../service/item.service';

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.css']
})
export class ItemsComponent implements OnInit {

  constructor(public itemService: ItemService) { }

  ngOnInit() {
    console.log('ngOnInit run');
  }

}
