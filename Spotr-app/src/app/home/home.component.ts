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
    $(document).on("scroll", function(){
      if
      ($(document).scrollTop() > 0){
        $("#homePage").addClass("shrink");
      }
      else
      {
        $("#homePage").removeClass("shrink");
      }
    });

  }

}
