import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-beach-profile',
  templateUrl: './beach-profile.component.html',
  styleUrls: ['./beach-profile.component.css']
})
export class BeachProfileComponent implements OnInit {

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.paramMap
      .subscribe(params => {
        let id = +params.get('id');
        // service.getProfile(id)
console.log(id);
      });
  }

}
