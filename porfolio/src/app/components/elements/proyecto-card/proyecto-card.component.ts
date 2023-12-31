import { Component, OnInit } from '@angular/core';
import { ProductosService } from 'src/app/services/productos.service';

@Component({
  selector: 'app-proyecto-card',
  templateUrl: './proyecto-card.component.html',
  styleUrls: ['./proyecto-card.component.scss']
})
export class ProyectoCardComponent implements OnInit {
proyectos:any;
  constructor(private proyectosService:ProductosService) { }

  ngOnInit(): void {
    this.proyectosService.getProyectos()
    .subscribe({
      next:(proyecto:any)=>{
        this.proyectos= proyecto.Proyectos;
      },
      error:(e:any)=>{
        console.error(e)
      },
      complete:()=> {
        console.log('completado')
      },
    })
  }

}
