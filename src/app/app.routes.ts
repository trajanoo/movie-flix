import { Routes } from '@angular/router';
import { Login } from './pages/not-logged/login/login';
import { Register } from './pages/not-logged/register/register';
import { Home } from './pages/logged/home/home';
import { ForgotPassword } from './pages/not-logged/forgot-password/forgot-password';

export const routes: Routes = [{
    path: 'login',
    component: Login
}, {
    path: 'register',
    component: Register
}, {
    path: '',
    component: Home
}, {
    path: 'forgot-password',
    component: ForgotPassword
}];
