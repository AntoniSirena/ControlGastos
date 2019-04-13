import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { LoginService } from 'src/app/servicios/login/login.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private httpClient: HttpClient, private loginService: LoginService, private router: Router) { }

  user: any ={Password:'', Email:''}
  data: any ={Resultado:'', Mensaje:''}

  validarUser(user){
    this.loginService.validarService(user).subscribe(result => {
        this.data.Resultado = result.Resultado;
        this.data.Mensaje = result.Mensaje;

        if(this.data.Resultado == true)
        {
          this.router.navigate(['/portada']);
        }

        },       
        error => { console.log(JSON.stringify(error));
        });   
    }





  ngOnInit() {
  }

}
