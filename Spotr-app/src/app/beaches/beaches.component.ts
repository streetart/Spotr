import { Component, OnInit } from '@angular/core';



@Component({
  selector: 'app-beaches',
  templateUrl: './beaches.component.html',
  styleUrls: ['./beaches.component.css'],
})
export class BeachesComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    var duration = anime({
      targets: '#duration .el',
      translateX: [400, 0],
      duration: 10000,
    });
  }

}
