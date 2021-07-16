import { Component, OnInit } from '@angular/core';
import { Negocio } from 'src/app/models/Negocio';
import { ServiceNegocioService } from 'src/app/services/service-negocio.service';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css']
})
export class ServicesComponent implements OnInit {
  negocios!:Array<Negocio>
  constructor(private negocioService:ServiceNegocioService) { 
  }

  ngOnInit(): void {
    
  }

  async ejecutarfetch(){
    let response = await fetch('http://localhost:4000/api/negocio');
    let datos = await response.json();
    console.log(datos);
  }

}
