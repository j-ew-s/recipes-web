
import { Recipe } from './Recipe.model';

export class ListRecipes {

    public recipes : Recipe[] = [];
    public quantity : number = 0;

    constructor(listResponse: object){

        if(listResponse != null)
        {
            let response = JSON.parse(JSON.stringify(listResponse));

            this.quantity = response.quantity;

            response.recipes.forEach(item => {

                var recipe = new Recipe(item);

                this.recipes.push(recipe);
            });
        }
    }

}