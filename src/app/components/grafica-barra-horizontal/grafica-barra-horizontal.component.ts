import { Component, OnDestroy, Input } from '@angular/core';

@Component({
  selector: 'app-grafica-barra-horizontal',
  templateUrl: './grafica-barra-horizontal.component.html',
  styleUrls: ['./grafica-barra-horizontal.component.scss'],
  styles: [`
    `]
})
export class GraficaBarraHorizontalComponent implements OnDestroy{

  @Input() results: any[] = [];

  view: any[] = [700, 400];

  // options
  showXAxis = true;
  showYAxis = true;
  gradient = true;
  showLegend = true;
  showXAxisLabel = true;
  xAxisLabel = 'Juegos';
  showYAxisLabel = true;
  yAxisLabel = 'Votos';

  colorScheme = 'picnic';

//intervalo;

  constructor() {

//  this.intervalo = setInterval(() => {
//    console.log('tick');
//    const newResults = [...this.results];

//      for (let item of newResults) {
//        newResults[item].value = Math.round(Math.random() * 500);
      }
 //     this.results = [...newResults];
 //   }, 1500);
//}

  onSelect(event: MouseEvent): void {
    console.log(event);
  }

  ngOnDestroy() {
    //clearInterval(this.intervalo);
  }

}

