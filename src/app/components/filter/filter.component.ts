import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss'],
  host: {
    'class': 'filter'
  }
})
export class FilterComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
