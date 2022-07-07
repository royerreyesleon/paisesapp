import { Component, OnInit } from '@angular/core';
import { PaisService } from '../../services/pais.service';

@Component({
    selector: 'app-por-pais',
    templateUrl: './por-pais.component.html',
    styleUrls: ['./por-pais.component.css']
})
export class PorPaisComponent implements OnInit {

    termino: string = '';
    hayError: boolean = false;

    constructor(private paisService: PaisService) { }

    ngOnInit(): void {
    }

    buscar() {
        this.hayError = false;
        console.log(this.termino);
        
        this.paisService.buscarPais(this.termino)
        .subscribe((resp) => {
            console.log('resp', resp);
        }, (err) => {
            console.log('err', err);
            this.hayError = true;
        });

    }

}
