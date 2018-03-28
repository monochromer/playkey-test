import {
  Component,
  OnInit,
  HostBinding,
  Input
} from '@angular/core';

@Component({
  selector: 'loader',
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.scss'],
  host: {
    'class': 'loader'
  }
})
export class LoaderComponent implements OnInit {

  @Input()
  active: boolean;

  @HostBinding('class.loader_active')
  get isActive(): boolean {
    return this.active === true;
  }

  constructor() { }

  ngOnInit() {}
}
