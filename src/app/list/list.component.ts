import { Component, OnInit } from '@angular/core';
import { TaskData } from './task-data';


@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.sass']
})
export class ListComponent implements OnInit {
  tasks: TaskData[] = [
    { id: 1, project: 'Cat', text: 'Eat the cat.', },
    { id: 2, project: 'Cat', text: 'Feline feline feline.', },
    { id: 3, project: 'Truck', text: 'You know what I mean..', },
    { id: 4, project: 'Tour', text: 'Waiting to take you away!!', }
  ];
  constructor() { }

  ngOnInit() {
  }

}
