import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

// RXJS
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

// Project Files
import { BaseService } from 'src/app/shared/services/base.service';
import { ListRecipes } from '../models/ListRecipes.model';
import { Recipe } from '../models/Recipe.model';

@Injectable({
  providedIn: 'root'
})
export class RecipeService extends BaseService {

  constructor(private httpClient : HttpClient) { 
    super()

  }

  /*
    Uses httpCLient to call recipes
    the URL is passed by getRecipes property (from BaseService)
  */
  getAll() : Observable<object>{

    return this.httpClient
      .get<object>(this.getRecipes);

  }

  /*
    Uses httpCLient to call recipes
    the URL is passed by getRecipes property (from BaseService)
  */
  getById(id : string) : Observable<object>{

    return this.httpClient
      .get<object>(this.getRecipeById+'/'+id);

  }

  post(recipe :Recipe) : Observable<object>{
    return this.httpClient.post( this.postRecipe, recipe, this.options );
  }

  put(recipe :Recipe) : Observable<object>{
    let putURL = this.putRecipe + recipe.id;
    return this.httpClient.put(putURL, recipe, this.options );
  }

  errorHandler( error  : HttpErrorResponse){
    return throwError(error);
  }

}
