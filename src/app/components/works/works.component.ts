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
      url: 'https://brayancardenas.github.io/mundano/'
    },
    {
      name: 'Cafe',
      img: '../../../assets/img/works/cafe.jpg',
      description: 'Aqui va una descripción del proyecto esto es para rellenar el campo vacio que hay para que se veamas organico y compleo al finalizar el mockup',
      tecnologia: [ 'HTML', 'Sass', 'JavaScript'],
      url: 'https://brayancardenas.github.io/Cafe/'
    },
    {
      name: 'Restaurante',
      img: '../../../assets/img/works/weiddgan.png',
      description: 'Aqui va una descripción del proyecto esto es para rellenar el campo vacio que hay para que se veamas organico y compleo al finalizar el mockup',
      tecnologia: [ 'HTML', 'CSS', 'Bootstrap','JavaScript'],
      url: 'https://brayancardenas.github.io/Weiddgan'
    },
    {
      name: 'Agenda',
      img: '../../../assets/img/works/agenda.jpg',
      description: 'Aqui va una descripción del proyecto esto es para rellenar el campo vacio que hay para que se veamas organico y compleo al finalizar el mockup',
      tecnologia: [ 'HTML', 'CSS', 'JavaScript'],
      url: 'https://brayancardenas.github.io/Agenda/'
    },
    {
      name: 'Carrito',
      img: '../../../assets/img/works/carrito-compras.jpg',
      description: 'Aqui va una descripción del proyecto esto es para rellenar el campo vacio que hay para que se veamas organico y compleo al finalizar el mockup',
      tecnologia: [ 'HTML', 'CSS', 'JavaScript'],
      url: 'https://brayancardenas.github.io/Carrito_Compras/'
    },
  ]


  constructor() { }

  ngOnInit(): void {
  }

}
