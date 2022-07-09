import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Country } from '../../interfaces/pais.interface';

@Component({
    selector: 'app-pais-sugerencias',
    templateUrl: './pais-sugerencias.component.html',
    styleUrls: ['./pais-sugerencias.component.css']
})
export class PaisSugerenciasComponent implements OnInit {

    @Input() mostrarSugerencias:boolean = false;
    @Input() paisesSugeridos: Country[] = [];
    @Input() termino: string = '';
    @Output() onClickBuscarTermino: EventEmitter<string> = new EventEmitter();

    constructor() { }

    ngOnInit(): void {
    }
    
    buscarSugerido(termino: string) {
        this.onClickBuscarTermino.emit(this.termino);
    }

}
