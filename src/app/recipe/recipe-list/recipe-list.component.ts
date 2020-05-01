// Angular
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute , ParamMap} from '@angular/router';

// RXJS
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

// Services 
import { RecipeService } from '../services/recipe.service';

// Models
import { ListRecipes } from '../models/ListRecipes.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

  public recipeList : ListRecipes = new ListRecipes(null);



  constructor(private recipeService : RecipeService,
              private activatedRoute : ActivatedRoute) { 

  }

  ngOnInit(): void {

    /*
      Leitura das Recipes pelo RecipesService.

      Utilizamos o Subscribe  (pois o metodo retorna um Observable)
      para tratar as informações de recipes.

    */
    this.recipeService
      .getAll()
      .subscribe(
        (data) => {
          this.recipeList = new ListRecipes(data);
        },
        error => console.log(error),
      );


  }




}
