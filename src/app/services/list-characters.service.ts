import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ListCharactersService {
  apiURL = 'https://rickandmortyapi.com/api/'

  constructor(private httpClient : HttpClient) { }

  getList () : Observable<any> {
    return this.httpClient.get<any>(`${this.apiURL}character`)
  }

  searchList(name: string) {
    return this.httpClient.get<any>(`${this.apiURL}character/?name=${name}`)
  }

  pagNavigation(href:string) {
    return this.httpClient.get<any>(`${href}`)
  }
}
