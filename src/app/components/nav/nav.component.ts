import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {

  public active : boolean = false

  constructor() { }

  ngOnInit(): void {
  }

  setActive(): void{

    const li = document.querySelectorAll('.menu__navegation');

    li.forEach(( cadaLi, i) => {
      
      li[i].addEventListener('click', () =>{

        li.forEach(( cadaLi, i ) => {
          li[i].classList.remove('activo')
        })
        li[i].classList.add('activo')
      })
    })

    this.active = !this.active 
  }
}
