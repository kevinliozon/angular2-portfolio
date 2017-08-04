import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/Rx';

@Injectable()

export class CodeschoolService
{

  constructor(private http: Http) { }

  public getCodeschoolProfile()
  {
    // https://www.codeschool.com/users/kevinliozon.json
    return this.http.get('app/shared/data/mock-codeschool.json')
    .map(response => response.json());
  }

}
