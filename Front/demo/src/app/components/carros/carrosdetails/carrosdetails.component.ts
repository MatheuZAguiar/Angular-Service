import { Component, EventEmitter, Input, Output, inject } from '@angular/core';
import { CarroService } from 'src/app/services/carro.service';
import { Carro } from 'src/app/models/carro';

@Component({
  selector: 'app-carrosdetails',
  templateUrl: './carrosdetails.component.html',
  styleUrls: ['./carrosdetails.component.scss']
})
export class CarrosdetailsComponent {

  @Input() carro: Carro = new Carro();
  @Output() retorno = new EventEmitter<Carro>();

  carroService = inject(CarroService);


  constructor(){

  }

  salvar(){
    this.carroService.save(this.carro).subscribe({
      next: carro => {
        this.retorno.emit(carro);
      },
      error: erro => {
        alert('Observe o Erro no Console !')
        console.log(erro);
      }
    })
  }

}
