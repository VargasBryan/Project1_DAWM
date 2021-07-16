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
    this.negocioService.getAllProducts().subscribe(listaNegocio=>{
      this.negocios=listaNegocio
      console.log(this.negocios)
    })
  }


}
