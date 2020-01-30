import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductosService } from '../../services/productos.service';
import { Producto } from '../../models/productos.model';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss']
})
export class ItemComponent implements OnInit {
  public item: Producto = {};

  constructor(private router: ActivatedRoute, private _PRODUCTO: ProductosService) { }

  ngOnInit() {
    this.router.params
      .subscribe( params => {
        this.cargarDatos(params.id);
      });
  }

  async cargarDatos(id: string) {
    this.item = await this._PRODUCTO.cargarProdustos(id);
  }

}
