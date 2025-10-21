import { Component } from '@angular/core';
import { Header } from "../../../components/logged/header/header";
import { MovieCard } from "../../../components/logged/movie-card/movie-card";

@Component({
  selector: 'app-home',
  imports: [Header, MovieCard],
  templateUrl: './home.html',
  styleUrl: './home.scss'
})
export class Home {

}
