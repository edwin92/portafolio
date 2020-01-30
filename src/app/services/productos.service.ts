import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ProductoIdx, Producto } from '../models/productos.model';

@Injectable({
  providedIn: 'root'
})
export class ProductosService {

  constructor(private http: HttpClient) { }

  async cargarProdustos(id: string) {
    const url = `https://angular-html-8bc8a.firebaseio.com/productos/${id}.json`;
    const data: Producto = await this.http.get<Producto>(url).toPromise();
    return data;
  }

  async cargarProdustosIdx() {
    const data: ProductoIdx[] = await this.http.get<any[]>('https://angular-html-8bc8a.firebaseio.com/productos_idx.json').toPromise();
    return data;
  }

  async filtrarProducto(texto: string) {
    const data: ProductoIdx[] = await this.cargarProdustosIdx();

    return data.filter( producto => {
      return true;
    });

  }
}
