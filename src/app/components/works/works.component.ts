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
      img: '../../../assets/img/works/proyecto-mundano.png',
      description: 'Aqui va una descripción del proyecto esto es para rellenar el campo vacio que hay para que se veamas organico y compleo al finalizar el mockup',
      tecnologia: [ 'HTML', 'CSS', 'JavaScript'],
      url: 'https://mundano.netlify.app/'

    },
    {
      name: 'Cafe',
      img: '../../../assets/img/works/proyecto-cafe.png',
      description: 'Aqui va una descripción del proyecto esto es para rellenar el campo vacio que hay para que se veamas organico y compleo al finalizar el mockup',
      tecnologia: [ 'HTML', 'Sass', 'JavaScript'],
      url: 'https://cafebc.netlify.app'
    },
    {
      name: 'Restaurante',
      img: '../../../assets/img/works/proyecto-restaurante.png',
      description: 'Aqui va una descripción del proyecto esto es para rellenar el campo vacio que hay para que se veamas organico y compleo al finalizar el mockup',
      tecnologia: [ 'HTML', 'CSS', 'Bootstrap','JavaScript'],
      url: 'https://restaurantebc.netlify.app'
    },
    {
      name: 'Brahama',
      img: '../../../assets/img/works/Proyecto2.png',
      description: 'Aqui va una descripción del proyecto esto es para rellenar el campo vacio que hay para que se veamas organico y compleo al finalizar el mockup',
      tecnologia: [ 'HTML', 'CSS', 'JavaScript']
    },
    {
      name: 'Mundano',
      img: '../../../assets/img/works/Proyecto3.png',
      description: 'Aqui va una descripción del proyecto esto es para rellenar el campo vacio que hay para que se veamas organico y compleo al finalizar el mockup',
      tecnologia: [ 'HTML', 'CSS', 'JavaScript']
    },
    {
      name: 'Brahama',
      img: '../../../assets/img/works/proyecto-mundano.png',
      description: 'Aqui va una descripción del proyecto esto es para rellenar el campo vacio que hay para que se veamas organico y compleo al finalizar el mockup',
      tecnologia: [ 'HTML', 'CSS', 'JavaScript']
    },
    {
      name: 'Brahama',
      img: '../../../assets/img/works/proyecto-cafe.png',
      description: 'Aqui va una descripción del proyecto esto es para rellenar el campo vacio que hay para que se veamas organico y compleo al finalizar el mockup',
      tecnologia: [ 'HTML', 'CSS', 'JavaScript']
    },
    {
      name: 'Mundano',
      img: '../../../assets/img/works/proyecto-restaurante.png',
      description: 'Aqui va una descripción del proyecto esto es para rellenar el campo vacio que hay para que se veamas organico y compleo al finalizar el mockup',
      tecnologia: [ 'HTML', 'CSS', 'JavaScript']
    },
    {
      name: 'Brahama',
      img: '../../../assets/img/works/Proyecto2.png',
      description: 'Aqui va una descripción del proyecto esto es para rellenar el campo vacio que hay para que se veamas organico y compleo al finalizar el mockup',
      tecnologia: [ 'HTML', 'CSS', 'JavaScript']
    },
  ]


  constructor() { }

  ngOnInit(): void {
  }

}
