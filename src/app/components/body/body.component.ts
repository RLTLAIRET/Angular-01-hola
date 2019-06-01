import { Component } from "@angular/core";

@Component({
    selector:'app-body',
    templateUrl: './body.component.html'

})

export class BodyComponent{

    frase: any={
       mostrar:true,
       autor:"Simon Bolivar",
       mensaje:"un pueblo ignorante es un instrumento de su propia destrucion"
    }
    
    personajes:string[] =['Real Madrid','Juventus',"Barcelona",'PSG','Monaco']
};