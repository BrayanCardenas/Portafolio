import { Component, Input, OnInit } from '@angular/core';
import { WorksModel } from 'src/app/core/interface/work.interface';
import * as Works from "../../data/works.json";

@Component({
  selector: 'app-works',
  templateUrl: './works.component.html',
  styleUrls: ['./works.component.scss']
})
export class WorksComponent implements OnInit {

  works: Array<WorksModel> = []

  constructor() { }

  ngOnInit(): void {
    const { work }: any = (Works as any).default
    this.works = work
  }

}
