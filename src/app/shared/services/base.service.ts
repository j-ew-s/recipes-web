import { Injectable } from '@angular/core';

// The Configuration file
import { ENVS } from 'src/assets/env.configuration';


@Injectable({
  providedIn: 'root'
})
export class BaseService {

  public apiURL: string;
  public getRecipes :string; 

  constructor() {
    this.getEnvConfiguration();
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
  }

}
