// Imports do Angular
import { Component, OnInit, Input } from '@angular/core';
import { Router}  from '@angular/router';

// Imports de Modelos 
import { Recipe } from '../../models/Recipe.model';


@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})
export class RecipeItemComponent implements OnInit {

  @Input()  recipe : Recipe;

  constructor(private router : Router) { }

  ngOnInit(): void {
  }

  /*
    Faz redirecionamento para o Details utilizando a propriedade ID
    @id : string representando ID de recipe
  */
  displayDetails(id : string){
    // Utiliza Router de @angular/router para fazer a navegação.
    // Navigate espera uma lista de parametros, onde o primeiro deles é o endereço
    //  os seguintes são parametros a serem passados na construção.
    // A rota deve estar previamente existindo em RouterModule.
    this.router.navigate(['recipes/detail', id]);
  }

}
