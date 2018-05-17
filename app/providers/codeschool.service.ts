import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/Rx';

@Injectable()
export class CodeschoolService {

  constructor(private http: Http) { }

  public getCodeschoolProfile(): any {
    // https://www.codeschool.com/users/kevinliozon.json
    return this.http.get('app/shared/data/mock-codeschool.json')
    .map(response => response.json());
  }
}
