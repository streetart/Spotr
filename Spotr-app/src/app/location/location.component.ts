import { Component} from '@angular/core';
import { AngularFireDatabase} from 'angularfire2/database';




@Component({
  selector: 'app-location',
  templateUrl: './location.component.html',
  styleUrls: ['./location.component.css']
})
export class LocationComponent{
  beachesList: any[];

  constructor(db: AngularFireDatabase) {
    db.list('/beaches')
      .valueChanges().subscribe(beaches => {
      this.beachesList = beaches;
      console.log(this.beachesList);
    });
  }
}
