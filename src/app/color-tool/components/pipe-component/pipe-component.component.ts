import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'pipe-component',
  templateUrl: './pipe-component.component.html',
  styleUrls: ['./pipe-component.component.css']
})
export class PipeComponentComponent implements OnInit {
  nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ];
  constructor() { }

  ngOnInit() {
  }

}
