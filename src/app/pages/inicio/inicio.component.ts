import { Component, OnInit } from '@angular/core';
import {AngularFirestore} from '@angular/fire/compat/firestore';
import {map} from 'rxjs/operators';
import {Game} from '../../interfaces/interfaces';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styles: [
  ]
})
export class InicioComponent implements OnInit{

  juegos: any[] = [];
  constructor(private db: AngularFirestore){

  }

  ngOnInit(){

    this.db.collection<Game>('goty').valueChanges()
    .pipe(
      map((resp: Game[]) => resp.map(({name, votos}) => ({name, value: votos})))
    )
    .subscribe(juegos => {
      console.log(juegos);
      this.juegos = juegos;
    });
  }

}
