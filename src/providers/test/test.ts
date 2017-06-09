import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

/*
  Generated class for the TestProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class TestProvider {
  items: {};
  str:string;
  constructor(public http: Http) {
  }

  load(){
    const promise = new Promise((resolve, reject) => {
      this.http.get('https://www.reddit.com/r/gifs/new/.json?limit=10').map(res => res.json()).subscribe(data => {
        resolve(data.data.children);
      })
    });
    return promise;
  }

}
