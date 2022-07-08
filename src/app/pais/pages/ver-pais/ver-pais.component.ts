import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { switchMap, tap } from 'rxjs';
import { PaisService } from '../../services/pais.service';
import { Country } from '../../interfaces/pais.interface';

@Component({
  selector: 'app-ver-pais',
  templateUrl: './ver-pais.component.html',
  styleUrls: ['./ver-pais.component.css']
})
export class VerPaisComponent implements OnInit {
    
    pais!: Country;

    constructor(
        private activatedRoute: ActivatedRoute,
        private paisService: PaisService,
    ) { }

    ngOnInit(): void {
        /*
        this.activatedRoute.params
            .subscribe(({ id }) => {
                console.log('params', id);
                
                this.paisService.getPaisPorAlpha(id).subscribe(pais => {
                    console.log('pais', pais);
                    
                });
                
            });
        */
        
        this.activatedRoute.params
            .pipe(
                // switchMap( (param) => this.paisService.getPaisPorAlpha(param.id) )
                switchMap(({ id }) => this.paisService.getPaisPorAlpha(id)),
                // tap( console.log )
                tap( resp => console.log(resp ))
            )
            // .subscribe(pais => {console.log('pais',pais);});
            // .subscribe((pais) => this.pais = pais);
            .subscribe((pais) => this.pais = pais[0]);
  }

}
