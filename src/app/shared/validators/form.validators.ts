import { ValidatorFn, AbstractControl } from '@angular/forms';


/*
    FieldPatternValidator

    É uma Abstract Factory para criar validações de acordo com um Pattern.

    Retorna um Validator Function (ValidatorFn) que é o que realmente faz
    a validação do o que precisamos.

    Input :
        Uma relugar expression que será avaliada.
    Output:
        Uma função de Validator Function a ser utilizada num FormControl.
*/
export function FieldPatternValidator(pattern: RegExp) : ValidatorFn{

    /*
        Criamos uma função que recebe um AbstractControl e retorna dados de validação
        Estes dados podem ser um Key : Value ou Null.
        O Input é um Abstract Control que representa um FormControl.
    */

    return (control : AbstractControl) : {[key:string] : any} | null => {

        // utilizando o Patter da função, faz o testes de equiparação
        const validation = pattern.test(control.value);

        /* 
            Caso o resultado da validação seja diferente de null
             -> Retorna um Validator que possui Chave (nome do error a ser validador) e o seu valor (o que deu match no teste)
            Caso o resultado da validação SEJA null
             -> Retorna null
        */
       return validation ? {'FieldPattern': {value : control.value}} : null;

    }
}



export function  URLPatternValidator(control : AbstractControl) : {[key:string] : any} | null  {

    var expression = /(https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|www\.[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9]+\.[^\s]{2,}|www\.[a-zA-Z0-9]+\.[^\s]{2,})/;
    var regex = new RegExp(expression);

    const validation = control.value.match(regex);

    return validation ? null: {'URLPattern': {value : control.value}};
}