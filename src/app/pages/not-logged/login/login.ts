import { Component } from '@angular/core';
import { LoginCard } from "../../../components/not-logged/login-card/login-card";
import { Header } from "../../../components/logged/header/header";

@Component({
  selector: 'app-login',
  imports: [LoginCard, Header],
  templateUrl: './login.html',
  styleUrl: './login.scss'
})
export class Login {

}
