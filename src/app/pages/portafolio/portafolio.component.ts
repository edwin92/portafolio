import { Component, OnInit } from '@angular/core';
import { ProductosService } from '../../services/productos.service';
import { ProductoIdx } from '../../models/productos.model';

@Component({
  selector: 'app-portafolio',
  templateUrl: './portafolio.component.html',
  styleUrls: ['./portafolio.component.scss']
})
export class PortafolioComponent implements OnInit {
  public productos: ProductoIdx[] = [];
  constructor(private _PRODUCTO: ProductosService) { }

  ngOnInit() {
    this.cargarProdustos();
  }

  async cargarProdustos() {
    this.productos = await this._PRODUCTO.cargarProdustosIdx();
    console.log(this.productos);
  }

}
