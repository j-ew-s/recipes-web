import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

// RXJS
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

// Project Files
import { BaseService } from 'src/app/shared/services/base.service';
import { ListRecipes } from '../models/ListRecipes.model';

@Injectable({
  providedIn: 'root'
})
export class RecipeService extends BaseService {

  constructor(private httpClient : HttpClient) { 
    super()

  }

  getAll() : Observable<object>{

    return this.httpClient
      .get<object>(this.getRecipes);

  }

  errorHandler( error  : HttpErrorResponse){
    return throwError(error);
  }

}
