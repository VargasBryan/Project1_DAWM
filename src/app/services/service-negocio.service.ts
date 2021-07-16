import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


import { environment } from './../../environments/environment';
import { Negocio } from '../models/Negocio';


@Injectable({
  providedIn: 'root'
})

export class ServiceNegocioService {

  constructor( private http: HttpClient ) { 

  }

  getAllProducts() {
    return this.http.get<Negocio[]>('http://localhost:4000/api/negocio');
  }

   
}
