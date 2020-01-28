import { Component, OnInit } from '@angular/core';
import { InfoPaginaService } from '../../services/info-pagina.service';
import { DataPage } from 'src/app/models/data-page.model';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  anio: number = new Date().getFullYear();
  info: DataPage = {};
  constructor(public _INFO_PAGINA: InfoPaginaService) { }

  async getData() {
    this.info = await this._INFO_PAGINA.get();
  }

  ngOnInit() {
    this.getData();
  }

}
