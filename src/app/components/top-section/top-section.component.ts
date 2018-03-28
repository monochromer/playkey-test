import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'top-section',
  templateUrl: './top-section.component.html',
  styleUrls: ['./top-section.component.scss'],
  host: {
    'class': 'top-section'
  }
})
export class TopSectionComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
