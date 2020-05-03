import { Injectable } from '@angular/core';

// The Configuration file
import { ENVS } from 'src/assets/env.configuration';
import { HttpHeaders } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class BaseService {

  /* APIS */
  public apiURL: string;
  public getRecipes :string; 
  public getRecipeById :string; 
  public postRecipe : string;

  /* HEADERS */
  public headers :HttpHeaders;
  public options;

  /* Authorizarion Headers */
  public basic = '';



  constructor() {
    this.getEnvConfiguration();
    this.setOptions();
  }

  /*
  * Gets the Environment configurations.
  * @TODO : Make it flexible so can decide wheter the WEB project is running.
  */
  private getEnvConfiguration(){

    this.apiURL = ENVS.dev.recipeAPI;

    this.setRecipesRoutes();
  }

  /*
  * Prepare routes for recipes
  * @TODO : Make it flexible so can decide wheter the WEB project is running.
  */
  private setRecipesRoutes(){
    this.getRecipes = this.apiURL+"/recipes/";
    this.getRecipeById = this.apiURL+"/recipes/id";
    this.postRecipe = this.apiURL+"/recipes/"
  }

  private setOptions(){

  this.headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin' : '*',
      'Access-Control-Allow-Headers' : '*',
      'Authorization': this.basic });

   this.options = { headers: this.headers };
  }

}
