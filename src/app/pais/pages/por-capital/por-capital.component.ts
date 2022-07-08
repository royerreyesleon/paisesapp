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

    constructor(private paisService: PaisService) { }

    buscar(termino: string) {
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
}
