import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DataPage } from '../models/data-page.model';

@Injectable({
  providedIn: 'root'
})
export class InfoPaginaService {
  constructor( private http: HttpClient ) {
  }

  async get() {
    const data: DataPage = await this.http.get<DataPage>('assets/data/data-page.json').toPromise();
    return data;
  }
}
