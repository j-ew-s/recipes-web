// Angular
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap} from '@angular/router'
//import { FormGroup, FormControl} from '@angular/forms';
import { FormBuilder} from '@angular/forms';

// Services
import { RecipeService } from '../services/recipe.service';
import { Recipe } from '../models/Recipe.model';
import { ListRecipes } from '../models/ListRecipes.model';


@Component({
  selector: 'app-recipe-form',
  templateUrl: './recipe-form.component.html',
  styleUrls: ['./recipe-form.component.css']
})
export class RecipeFormComponent implements OnInit {

  public recipeEdit: Recipe;
  public editMode: boolean = false;

  public recipeFormGroup =  this.formBuilder.group({
    name : [''],
    description : [''],
    link : [''],
    tags : [''],
    rate : ['']
  });

  // Desta Maneira podemos criar explicitando FromGroup e FormControl.
  // Mas tambem podemos evitar isto utilizando o FormBuilder que é um jeito
  // mais facil de gerenciar.
 /* public recipeFormGroup = new FormGroup({
    name : new FormControl(''),
    description : new FormControl(''),
    link : new FormControl(''),
    tags : new FormControl(''),
    rate : new FormControl(''),
  })*/

  constructor(private router : Router, 
              private activatedRoute : ActivatedRoute,
              private recipeService : RecipeService,
              private formBuilder : FormBuilder) { }

  ngOnInit(): void {
    /*
      Aqui estamos a verificar a URL em busca de um ID.
      Este form é compartilhado entre Edit e New recipe.

      Se um ID é encontrado, passamos ele para a variavel recipeEdit
      e setamos o editMode como true. 
      Caso contrario, recipeEdit recebe null e editMode fica a false.

    */
    this.activatedRoute.paramMap
      .subscribe(
        (param :ParamMap) =>{
            
          // Busca o ID na URL
          var id = param.get('id');
            
          // Define editMode
          this.editMode = id != null;
           
          // Se for Edição, carrega a Recipe
          if(this.editMode){
            this.loadRecipe(id);
          }
        }
      );    
  }

  /*
    Carrega a recipe indicada na URL
  */
  loadRecipe(id:string):void{
      this.recipeService
      .getById(id)
      .subscribe(
        (data) =>{       
          var recipesList = new ListRecipes(data);
          this.recipeEdit = recipesList.recipes[0];
          this.loadFormFromAPI();
        }
      );

  }

  /*
    Now just Load 
  */
  loadFormFromAPI(){
    this.recipeFormGroup.patchValue(
      {
        name: this.recipeEdit.name,
        description : this.recipeEdit.description,
        link : this.recipeEdit.link,
        tags : this.recipeEdit.tags,
        rate : this.recipeEdit.rate
      }
    )
  }

}
