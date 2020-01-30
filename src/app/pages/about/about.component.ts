import { Component, OnInit } from '@angular/core';
import { InfoPaginaService } from '../../services/info-pagina.service';
import { DataTeams } from '../../models/data-page.model';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {
  public teams: DataTeams[] = [];
  constructor(private _INFO_PAGE: InfoPaginaService) { }

  ngOnInit() {
    this.getTeam();
  }

  async getTeam() {
    this.teams = await this._INFO_PAGE.getTeam();
  }

}
