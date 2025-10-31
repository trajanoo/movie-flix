import { Component } from '@angular/core';
import { Header } from "../../../components/not-logged/header/header";
import { LoginCard } from "../../../components/not-logged/login-card/login-card";
import { ForgotPasswordCard } from "../../../components/not-logged/forgot-password-card/forgot-password-card";

@Component({
  selector: 'app-forgot-password',
  imports: [Header, ForgotPasswordCard],
  templateUrl: './forgot-password.html',
  styleUrl: './forgot-password.scss'
})
export class ForgotPassword {

}
