import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-grafica',
  templateUrl: './app-grafica.component.html',
  styleUrls: ['./app-grafica.component.scss']
})
export class AppGraficaComponent implements OnInit {
  cuadernoA5 = {
    "size" : "A5",
    "price": 250,
    "stock": 2
  }
  constructor() { }

  ngOnInit(): void {
  }

}
