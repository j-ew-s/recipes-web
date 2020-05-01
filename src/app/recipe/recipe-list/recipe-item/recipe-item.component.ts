// Imports do Angular
import { Component, OnInit, Input } from '@angular/core';
import { Router, ActivatedRoute, ParamMap}  from '@angular/router';

// Imports de Modelos 
import { Recipe } from '../../models/Recipe.model';


@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})
export class RecipeItemComponent implements OnInit {

  @Input()  recipe : Recipe;
  public lastSelected : string;

  constructor(private router : Router,  
              private activatedRoute : ActivatedRoute) { }

  ngOnInit(): void {

    /*
      Este metodo funciona exatamente como o anterior porem é flexivel à 
      mudanças que podem existir quando parametros na URL mudanm. 

      Isso é possivel pois o paramMap tem um observable, que pode ser Subscrito
      e ficar a escuta de mudanças.

      O Subscribe precisa de uma Arrow Function.
      A Arrow Function deve receber um parametro do tipo ParamMap.
      ParamMap é quem consegue fazer o GET do parametro da URL.
    */

    this.activatedRoute.paramMap.subscribe(
      (params : ParamMap) => {
        let id = params.get('id');
        this.lastSelected = id !== ""? id : null;
      }
    );
  }

  /*
    Faz redirecionamento para o Details utilizando a propriedade ID
    @id : string representando ID de recipe
  */
  displayDetails(id: string){

    /*
      Você tem duas opções para fazer a navegação.
        1 - Indicado especificamente o endereço para onde quer redirecionar.
        2 - Realizar navegação relativa ao endereço atual.

      Ambos utilizam Router de @angular/router para fazer a navegação.
    */


    /* Opção 1
      Navigate espera uma lista de parametros, onde o primeiro deles é o endereço
        os seguintes são parametros a serem passados na construção.

      A rota deve estar previamente existindo em RouterModule.
    */

    this.router.navigate(['recipes/'+id+'/detail']);

    /* Opção 2
      Nesta segunda opção podemos navegar relativamente à URL atual.

      Esta é uma boa opção quando temos uma parte da URL que é comum a todas as rotas.
      No nosso caso 'recipes'.
      Isso ajuda a trazer flexibilidade ao código, caso esta URL base seja alterada 
      em algum momento no RouteModel.

      Com esta opção, temos dois parametros. 

      1º Array com os valores que vamos carregar na URL atual.
      Ex : 
        URL atual = teste.com/recipe 
        onde queremos ir = teste.com/recipe/detail/19
        
        Então teremos que passar :
        parametro = 'detail/19'

      2º Referencia do caminho relativo. 
      Esta referencia se faz pela utilização do ActivatedRoute que
      deve ser passado na propriedade relativeTo. 
      O nome da propiedade já indica o que o ActiveRoute vai fazer.

    */

    //this.router.navigate(['detail/'+id], { relativeTo: this.activatedRoute });
  }

  /*
    Valida se a recipe atual é igual à ultima recipe lida no details.
  */
  wasLastSelected(id : string){
    return this.lastSelected === id;
  }

}
