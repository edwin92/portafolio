import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  buscarProducto(texto: string) {
    if ( texto.length < 1 ) { return; }
    this.router.navigate(['/search', texto]);
  }
}
