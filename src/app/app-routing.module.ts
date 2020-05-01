import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RecipeListComponent } from './recipe/recipe-list/recipe-list.component';
import { RecipeFormComponent } from './recipe/recipe-form/recipe-form.component';
import { PageNotFoundComponent } from './handlers/page-not-found/page-not-found.component';
import { RecipeDetailComponent } from './recipe/recipe-detail/recipe-detail.component';



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

  *** Rotas de Redirecionamento ***
  O redirecionamento utilizamos as propriedades : path, redirectTo e pathMatch.
    - path: defina a rota que deseja redirecionar.
    - redirectTo : qual é a rota para a qual deseja redirecionar.
    - pathMatch : Existem duas opções.
      - prefix  : Diz que o que está em path é o prefixo, portando, toda rota que contem
                 este prefixo, deve-se fazer o redirect.
                 Note que, o path em branco com pathMatch prefix vai substituir TODAS as rotas
                 já que este pode ser prefixo para toda e qualquer rota.
      - full    : Indica que apenas o comparativo TOTAL do o que está em path deve
                 ser analisado.

  *** Rotas com Parametros ***
  Para pasasgem de um parametro na rota, como no caso o ID. utilizamos a sintaxe
  :<nome_parametro>

  ** Rotas Genéricas ou WildCards ***
  O handler para o genérico ou WildCards são denotados pelo uso de dois asteriscos 
  na propriedade PATH, para alem disso, da-se o componente que deseja executar.
    - Nota importante é que este deve ser utilizado sempre ao final da lista, pois, 
    se ele estiver antes, todas as outras rotas serão sobrescritas por esta.


*/
const routes: Routes = [
  {path : '', redirectTo : 'recipes', pathMatch : 'full'},
  {path : 'recipes', component : RecipeListComponent},
  {path : 'recipes/detail/:id', component : RecipeDetailComponent},
  {path : 'recipes/form', component : RecipeFormComponent},
  {path : '**', component : PageNotFoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
