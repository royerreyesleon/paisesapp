import { Component } from '@angular/core';
import { Country } from '../../interfaces/pais.interface';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-capital',
  templateUrl: './por-capital.component.html',
  styleUrls: ['./por-capital.component.css']
})
export class PorCapitalComponent {

    termino: string = '';
    hayError: boolean = false;
    paises: Country[] = [];
    paisesSugeridos: Country[] = [];
    mostrarSugerencias = false;
    

    constructor(private paisService: PaisService) { }

    buscar(termino: string) {
        this.mostrarSugerencias = false;
        this.termino = termino;
        this.hayError = false;
        
        this.paisService.buscarCapital(this.termino)
        .subscribe((paises) => {
            console.log('capitales', paises);
            this.paises = paises;
        }, (err) => {
            console.log('err', err);
            this.hayError = true;
            this.paises = [];
        });

    }
    
    sugerencias(termino: string) {
        this.mostrarSugerencias = true;
        this.hayError = false;
        this.termino = termino;
        
        this.paisService.buscarCapital(termino)
            .subscribe((
                paises) => this.paisesSugeridos = paises.splice(0, 5),
                (err) => this.paisesSugeridos = []
            );
    }
    
    buscarSugerido(termino: string) {
        this.buscar(termino);
    }
}
