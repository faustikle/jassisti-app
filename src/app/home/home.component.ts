import { Component, OnInit } from '@angular/core';
import { UsuarioService } from '../usuario.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public usuario: Object;

  constructor(private usuarioService: UsuarioService) {
    this.usuarioService.getDados()
    .subscribe((data) => this.usuario = data);
  }

  ngOnInit() {
  }

  deslogar() {
    localStorage.removeItem('token');
    location.replace('/login');
  }
}
