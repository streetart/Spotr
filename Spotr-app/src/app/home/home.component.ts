import { Component, OnInit } from '@angular/core';
declare var jquery:any;
declare var $ :any;

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  title = 'Spotr.';

  constructor() {
  }

  ngOnInit() {
    $(window).scroll(function(){
      $('#homePage').css('opacity', 1 - $(window).scrollTop() / 600);
    });


  }

}
