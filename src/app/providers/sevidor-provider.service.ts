import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class SevidorProviderService {

  url: string="http://localhost:8081/agenda_php/";

  constructor(public http: HttpClient) { }

  getPegar(){
    return this.http.get(this.url + 'dados.php');
    
  }
}
