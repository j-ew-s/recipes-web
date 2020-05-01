import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms'

// APP and Routing 
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

//Recipes
import { RecipeListComponent } from './recipe/recipe-list/recipe-list.component';
import { RecipeItemComponent } from './recipe/recipe-list/recipe-item/recipe-item.component';
import { RecipeFormComponent } from './recipe/recipe-form/recipe-form.component';
import { PageNotFoundComponent } from './handlers/page-not-found/page-not-found.component';
import { RecipeDetailComponent } from './recipe/recipe-detail/recipe-detail.component';



@NgModule({
  declarations: [
    AppComponent,
    RecipeListComponent,
    RecipeItemComponent,
    RecipeFormComponent,
    PageNotFoundComponent,
    RecipeDetailComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
