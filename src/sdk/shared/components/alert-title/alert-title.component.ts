import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-alert-title',
  templateUrl: './alert-title.component.html',
  styleUrls: ['./alert-title.component.scss'],
})
export class AlertTitleComponent implements OnInit {
    @Input('label') public label: any;
    @Input('title') public title: any;
    @Input('icon') public icon: any;
    @Input('class') public class: any;
  constructor() { }

  ngOnInit() {}

}
