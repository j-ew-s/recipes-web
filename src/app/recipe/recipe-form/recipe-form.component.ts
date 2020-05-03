// Angular
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap} from '@angular/router'
//import { FormGroup, FormControl} from '@angular/forms';
import { FormBuilder, Validators} from '@angular/forms';

// Services
import { RecipeService } from '../services/recipe.service';
import { Recipe } from '../models/Recipe.model';
import { ListRecipes } from '../models/ListRecipes.model';
import { FieldPatternValidator, URLPatternValidator } from 'src/app/shared/validators/form.validators';


@Component({
  selector: 'app-recipe-form',
  templateUrl: './recipe-form.component.html',
  styleUrls: ['./recipe-form.component.css']
})
export class RecipeFormComponent implements OnInit {

  public loading :boolean = true;
  public recipeEdit: Recipe;
  public editMode: boolean = false;

  /*
    Um FormGroup é criado pelo FormBuilder por meio da função group.

    Os itens dentro de um group são os FormControllers.
    Para as definições, de um FormControl utilizamos um array de configs.
    1. O valor Default do FormControl.
    2. A Validação a ser utilizada.
  */
  public recipeFormGroup =  this.formBuilder.group({
    name : ['', [Validators.required, Validators.minLength(3), FieldPatternValidator(/recipe\b/)]],
    description : [''],
    link : ['', [Validators.required, URLPatternValidator]],
    tags : [''],
    rate : ['', [Validators.required, Validators.min(1), Validators.max(5)]]
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


  /*
    Os Gets a seguir são uma maneira de REDUZIR texto no HTML.
    onde teriamos  recipeFormGroup.get('name') 
    passamos a ter recipeName.
  */
  // Variavel Name do RecipeFormGroup
  get recipeName(){
    return this.recipeFormGroup.get('name');
  }

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
          else{
            this.loading = false;
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
    this.recipeFormGroup.patchValue({
      name: this.recipeEdit.name,
      description : this.recipeEdit.description,
      link : this.recipeEdit.link,
      tags : this.recipeEdit.tags,
      rate : this.recipeEdit.rate
    });

    this.loading = false;
  }

  submitForm(){
    var formValue = this.recipeFormGroup.value;
    var recipe = new Recipe(formValue);
    console.log(recipe);
    this.recipeService.post(recipe)
    .subscribe(
      (data) =>{
        console.log(data);
        this.router.navigate(['recipes', {"id" : data['_id']}])
      }
    )
  }

}
