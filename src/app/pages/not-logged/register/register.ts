import { Component } from '@angular/core';
import { Header } from "../../../components/not-logged/header/header";
import { LoginCard } from "../../../components/not-logged/login-card/login-card";
import { RegisterCard } from "../../../components/not-logged/register-card/register-card";


@Component({
  selector: 'app-register',
  imports: [Header, RegisterCard],
  templateUrl: './register.html',
  styleUrl: './register.scss'
})
export class Register {

}
