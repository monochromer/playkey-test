import {
  Component,
  OnInit,
  OnDestroy,
  ElementRef
} from '@angular/core';

@Component({
  selector: 'slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss']
})
export class SliderComponent implements OnInit, OnDestroy {

  constructor(
    private el: ElementRef
  ) {}

  ngOnInit() {}

  ngOnDestroy() {}
}
