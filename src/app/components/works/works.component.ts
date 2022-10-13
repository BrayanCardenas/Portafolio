import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-works',
  templateUrl: './works.component.html',
  styleUrls: ['./works.component.scss']
})
export class WorksComponent implements OnInit {

  works = [
    {
      name: 'Mundano',
      img: '../../../assets/img/works/mundano.jpg',
      description: 'Aqui va una descripción del proyecto esto es para rellenar el campo vacio que hay para que se veamas organico y compleo al finalizar el mockup',
      tecnologia: [ 'HTML', 'CSS', 'JavaScript'],
      url: 'https://brayancardenas.github.io/mundano/',
      github: 'https://github.com/BrayanCardenas/mundano'
    },
    {
      name: 'Cafe',
      img: '../../../assets/img/works/cafe.jpg',
      description: 'Aqui va una descripción del proyecto esto es para rellenar el campo vacio que hay para que se veamas organico y compleo al finalizar el mockup',
      tecnologia: [ 'HTML', 'Sass', 'JavaScript'],
      url: 'https://brayancardenas.github.io/Cafe/',
      github: 'https://github.com/BrayanCardenas/Cafe'
    },
    {
      name: 'Weiddgan',
      img: '../../../assets/img/works/weiddgan.png',
      description: 'Aqui va una descripción del proyecto esto es para rellenar el campo vacio que hay para que se veamas organico y compleo al finalizar el mockup',
      tecnologia: [ 'HTML', 'CSS', 'Bootstrap','JavaScript'],
      url: 'https://brayancardenas.github.io/Weiddgan',
      github: 'https://github.com/BrayanCardenas/Weiddgan'
    }/*,
     {
      name: 'Agenda',
      img: '../../../assets/img/works/agenda.jpg',
      description: 'Aqui va una descripción del proyecto esto es para rellenar el campo vacio que hay para que se veamas organico y compleo al finalizar el mockup',
      tecnologia: [ 'HTML', 'CSS', 'JavaScript'],
      url: 'https://brayancardenas.github.io/Agenda/',
      github: 'https://github.com/BrayanCardenas/Agenda'
    } */,
    {
      name: 'Carrito',
      img: '../../../assets/img/works/carrito-compras.jpg',
      description: 'Aqui va una descripción del proyecto esto es para rellenar el campo vacio que hay para que se veamas organico y compleo al finalizar el mockup',
      tecnologia: [ 'HTML', 'CSS', 'JavaScript'],
      url: 'https://brayancardenas.github.io/Carrito_Compras/',
      github: 'https://github.com/BrayanCardenas/Carrito_Compras'
    },
    {
      name: 'Api BreakingBad',
      img: '../../../assets/img/works/api-brakingBad.jpg',
      description: 'Aqui va una descripción del proyecto esto es para rellenar el campo vacio que hay para que se veamas organico y compleo al finalizar el mockup',
      tecnologia: [ 'HTML', 'Bootstrap', 'TypeScript'],
      url: 'https://apibrakinbad.vercel.app/',
      github: 'https://github.com/BrayanCardenas/Api-BrakinBad'
    }
  ]


  constructor() { }

  ngOnInit(): void {
  }

}
