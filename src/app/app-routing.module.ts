import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RecipeListComponent } from './recipe/recipe-list/recipe-list.component';
import { RecipeFormComponent } from './recipe/recipe-form/recipe-form.component';
import { PageNotFoundComponent } from './handlers/page-not-found/page-not-found.component';



/*
  Estas são todas as rotas da nossa aplicação.
  
  Após a sua declaração, elas serão passadas para no imports 
  utilizando o RouterModule forRoutes. Configurando assim, nossas rotas

  Esta classe ainda exporta o RouterModule para ser utilizado no AppModule
  desta maneira, já se tem o RouterModule a ser utilizado no AppModule sem 
  precisar importa-lo novamente.

  *** Rotas Básicas ***
  As rotas são compostas basicamente de Path e Component.
   - path : Endereço pelo qual será reconhecido o componente.
   - component : Componente a ser executado quando o Endereço for chamado.


*/
const routes: Routes = [
  {path : '', redirectTo : 'recipes', pathMatch : 'full'},
  {path : 'recipes', component : RecipeListComponent},
  {path : 'details', component : RecipeListComponent},
  {path : 'recipes/form', component : RecipeFormComponent},
  {path : '**', component : PageNotFoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
