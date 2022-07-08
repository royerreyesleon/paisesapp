import { Component, EventEmitter, Output, OnInit } from '@angular/core';
import { debounceTime, Subject } from 'rxjs';

@Component({
    selector: 'app-pais-input',
    templateUrl: './pais-input.component.html',
    styleUrls: ['./pais-input.component.css']
})
export class PaisInputComponent implements OnInit{
    
    @Output() onEnter: EventEmitter<string> = new EventEmitter();
    @Output() onDebounce: EventEmitter<string> = new EventEmitter();

    debouncer: Subject<string> = new Subject();
    termino: string = '';

    ngOnInit(): void {
        // throw new Error('Method not implemented.');
        this.debouncer
            .pipe(
                debounceTime(300)
            )
            .subscribe(valor => {
                // this.termino = valor;
                console.log('debouncer', valor);
                
            });
    }
    
    buscar() {
        this.onEnter.emit(this.termino);
    }
    
    teclaPresionada() {
    // teclaPresionada(event:any) {
        // const valor = event.target.value;
        // console.log(valor);
        // console.log(this.termino);
        this.debouncer.next(this.termino);
        
    }

}
