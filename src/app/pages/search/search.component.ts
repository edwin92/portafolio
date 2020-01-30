import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductosService } from '../../services/productos.service';
import { ProductoIdx } from '../../models/productos.model';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  productos: ProductoIdx[] = [];
  constructor(private route: ActivatedRoute, private _PRODUCTO: ProductosService) { }

  ngOnInit() {
    this.route.params
      .subscribe( params => {
        this.filtrarProducto(params.texto);
      });
  }

  async filtrarProducto(texto: string) {
    this.productos = await this._PRODUCTO.filtrarProducto(texto);
    console.log(this.productos);

  }

}
