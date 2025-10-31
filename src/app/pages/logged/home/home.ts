import { Component } from '@angular/core';
import { Header } from "../../../components/logged/header/header";
import { MovieCard } from "../../../components/logged/movie-card/movie-card";
import Movie from '../../../interfaces/movies';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-home',
  imports: [Header, MovieCard, NgFor],
  templateUrl: './home.html',
  styleUrl: './home.scss'
})
export class Home {
  movies: Movie[] = [{
    id: 1,
    title: 'Casablanca',
    description:
      'Durante a Segunda Guerra Mundial, um exilado americano precisa escolher entre o amor da sua vida e ajudar um líder da resistência.',
    duration: '1h 30min',
    ageRating: 'Somente +18',
    approvalRating: 67,
    providerLogoUrl: 'assets/logos/netflix-logo.png',
    isTop10: true,
  },
  {
    id: 2,
    title: 'O Poderoso Chefão',
    description:
      'A saga da família Corleone, onde o poder, a lealdade e a corrupção moldam o império de uma das mais temidas famílias da máfia italiana.',
    duration: '2h 55min',
    ageRating: '+16',
    approvalRating: 94,
    providerLogoUrl: 'assets/logos/netflix-logo.png',
    isTop10: true,
  },
  {
    id: 3,
    title: 'Inception',
    description:
      'Um ladrão que invade sonhos é contratado para implantar uma ideia na mente de um herdeiro poderoso — mas nada sai como o planejado.',
    duration: '2h 28min',
    ageRating: '+14',
    approvalRating: 91,
    providerLogoUrl: 'assets/logos/netflix-logo.png',
    isTop10: false,
  },
  {
    id: 4,
    title: 'O Lobo de Wall Street',
    description:
      'Baseado em fatos reais, a história de um corretor de ações que constrói um império financeiro movido por ganância, luxo e excessos.',
    duration: '3h 0min',
    ageRating: '+18',
    approvalRating: 80,
    providerLogoUrl: 'assets/logos/netflix-logo.png',
    isTop10: false,
  },
  {
    id: 5,
    title: 'Clube da Luta',
    description:
      'Um homem insone e um vendedor de sabão formam um clube secreto onde homens se enfrentam em lutas brutais para se sentirem vivos.',
    duration: '2h 19min',
    ageRating: '+18',
    approvalRating: 88,
    providerLogoUrl: 'assets/logos/netflix-logo.png',
    isTop10: true,
  },
  {
    id: 6,
    title: 'Interstellar',
    description:
      'Em um futuro onde a Terra está morrendo, um grupo de astronautas viaja por um buraco de minhoca em busca de um novo lar para a humanidade.',
    duration: '2h 49min',
    ageRating: '+12',
    approvalRating: 95,
    providerLogoUrl: 'assets/logos/netflix-logo.png',
    isTop10: false,
  },
  {
    id: 7,
    title: 'Parasita',
    description:
      'Uma família pobre se infiltra na vida de uma família rica, mas o que começa como um golpe se transforma em algo muito mais sombrio.',
    duration: '2h 12min',
    ageRating: '+16',
    approvalRating: 98,
    providerLogoUrl: 'assets/logos/netflix-logo.png',
    isTop10: false,
  },
  {
    id: 8,
    title: 'Coringa',
    description:
      'Arthur Fleck, um comediante fracassado, é empurrado à loucura pela sociedade, dando origem ao temido vilão de Gotham.',
    duration: '2h 2min',
    ageRating: '+18',
    approvalRating: 84,
    providerLogoUrl: 'assets/logos/netflix-logo.png',
    isTop10: true,
  },
]
}
