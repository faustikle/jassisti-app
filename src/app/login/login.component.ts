import { Component, OnInit } from '@angular/core';
import { LoginService } from '../login.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public url: String = '';

  constructor(
    private loginService: LoginService,
    private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.loginService.getUrl().subscribe((url) => this.url = url);

    this.activatedRoute.queryParams.subscribe(params => {
      if (params['code']) {
        this.loginService.login(params['code']).subscribe((response) => {
          localStorage.setItem('token', response.accessToken);
          location.replace('/');
        });
      }
    });
  }

}
