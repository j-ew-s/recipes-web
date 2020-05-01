import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {

  public id: string;

  constructor(private activatedRouter : ActivatedRoute) { }

  ngOnInit(): void {
    /* 
      Este é um meio de se buscar o parametro ID da URL.
      O problema aqui é que, se houver um refresh para o mesmo componente
      ele não será criado novamente, portanto ngOnInit nao será executado
      e o ActivatedRouter não chamará o Snapshot. 

      Esta abordagem é eficiente para os casos onde o Componente só é chamado
      em um fluxo único vindo de fora, sem necessidade de reconstrução do componente
      quando um parametro é alterado pela rota.
    */
    
    //this.id = this.activatedRouter.snapshot.paramMap.get('id'); 

    /*
      Este metodo funciona exatamente como o anterior porem é flexivel à 
      mudanças que podem existir quando parametros na URL mudanm. 
      
      Isso é possivel pois o paramMap tem um observable, que pode ser Subscrito
      e ficar a escuta de mudanças.

      O Subscribe precisa de uma Arrow Function.
      A Arrow Function deve receber um parametro do tipo ParamMap.
      ParamMap é quem consegue fazer o GET do parametro da URL.
    */
    this.activatedRouter.paramMap.subscribe(
      (params : ParamMap) => {
        let id = params.get('id');
        this.id = id;
      }
    )

  }

}
