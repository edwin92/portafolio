import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DataPage, DataTeams } from '../models/data-page.model';

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

  async getTeam() {
    const data: any = await this.http.get<any[]>('https://angular-html-8bc8a.firebaseio.com/equipo.json').toPromise();
    return data;
  }
}
