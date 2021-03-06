import { Injectable } from '@angular/core';
import {Http} from '@angular/http';
import * as _ from 'underscore';
import 'rxjs/add/operator/map';

@Injectable()
export class JrnlentryService {
  BASE_URL: string = 'http://localhost:3000';
  entries: Object[] = [];

  constructor(private http: Http) { }

  getList(){
    return this.http.get(`${this.BASE_URL}/api/journal-entries`)
    .map((res) => res.json());
  }

  getEntry(id: Number): Object{
    return this.entries.find(x => x['id'] === id);
  }

  get(id) {
    return this.http.get(`${this.BASE_URL}/api/journal-entries/${id}`)
    .map((res) => res.json());
  }

}
