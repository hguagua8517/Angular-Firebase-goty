import { Component, OnInit } from '@angular/core';
import { GameService } from '../../services/game.service';
import { Game } from '../../interfaces/interfaces';
import Swal from 'sweetalert2';


interface Respuesta {
  ok: boolean,
  mensaje: string
}




@Component({
  selector: 'app-goty',
  templateUrl: './goty.component.html',
  styles: [
  ]
})
export class GotyComponent implements OnInit{

  juegos: Game[] = [];

  constructor(private gameService: GameService){}

  ngOnInit(){

    this.gameService.getNominados()
    .subscribe( games => {
      console.log(games);
      this.juegos = games;
    })
  }

  votarJuego(juego: Game){
    console.log(juego);
    this.gameService.votarJuegos(juego.id)
    .subscribe( (resp: Respuesta | any) => {
      console.log(resp);
      if (resp.ok){
        Swal.fire('Gracias', resp.mensaje, 'success');
      }else{
        Swal.fire('Oops', resp.mensaje, 'error');
      }
    });
  }

}

