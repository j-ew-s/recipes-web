import { Component, OnInit } from '@angular/core';


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

  constructor(private recipeService : RecipeService) { 

  }

  ngOnInit(): void {

    this.recipeService
      .getAll()
      .subscribe(
        (data) => {
          this.recipeList = new ListRecipes(data);
          console.log(this.recipeList);
        },
        error => console.log(error),
      );
  }

}
