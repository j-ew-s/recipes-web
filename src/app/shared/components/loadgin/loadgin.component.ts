import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-loadgin',
  templateUrl: './loadgin.component.html',
  styleUrls: ['./loadgin.component.css']
})
export class LoadginComponent implements OnInit {

  @Input() loading: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

}
