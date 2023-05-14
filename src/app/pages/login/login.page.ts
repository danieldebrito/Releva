import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, FormGroup, FormControl, Validators, ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { UsersService } from 'src/app/services/users.service';
import { Usuario } from 'src/app/class/usuario';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule, ReactiveFormsModule, RouterModule]
})
export class LoginPage implements OnInit {

  public usuarios: Usuario[] = [];

  loginForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required, Validators.minLength(6)]),
  });

  public constructor(private usuariosSv: UsersService) { }

  async onLogin(): Promise<void> {
    const { email, password } = this.loginForm.value;
    if (email && password) {
      try {
        // const user = await this.authService.SignIn(email, password);
      } catch (error) {
        console.log(error);
      }
    }
  }

  public AutoSignIn(iniciales: string) {
    switch (iniciales) {
      case 'ADM':
        this.loginForm.setValue({
          email: 'admin@admin.com',
          password: '1111'
        });
        break;
      case 'INV':
        this.loginForm.setValue({
          email: 'invitado@invitado.com',
          password: '2222'
        });
        break;
      case 'USR':
        this.loginForm.setValue({ 
          email: 'usuario@usuario.com', 
          password: '3333' 
        });
        break;
      case 'ANN':
        this.loginForm.setValue({ 
          email: 'anonimo@anonimo.com', 
          password: '4444'
         });
        break;
      case 'TST':
        this.loginForm.setValue({ 
          email: 'tester@tester.com', 
          password: '5555'
         });
        break;
      default:
        this.loginForm.setValue({ 
          email: 'ERROR', 
          password: 'ERROR'
         });
        break;
    }
  }

  public errorFalse(){}


  ngOnInit() {
    this.usuariosSv.getItems().subscribe(res => {
      this.usuarios = res;
      console.log(res);
    });
  }

  login(a: any) { return a; }

}
