import { Component, OnInit, Input, Output, EventEmitter, ViewChild, ElementRef } from '@angular/core';


@Component({
  selector: 'app-graficodonas',
  templateUrl: './graficodonas.component.html',
  styleUrls: []
})
export class GraficodonasComponent implements OnInit {
  @Input('nombre') leyenda: string = 'Leyenda';
  @Input('chartConfig') chartConfig: any = {};





  constructor() {}

  ngOnInit() {
    console.log(this.leyenda);
  }

}
