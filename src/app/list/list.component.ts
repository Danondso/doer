import { Component, OnInit, HostBinding } from '@angular/core';
import { TaskData } from '../interfaces/task-data';
import { Guid } from 'guid-typescript';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.sass'],
})
export class ListComponent implements OnInit {
  showTaskCreate: boolean;
  tasksTitle = 'Do good.'; // TODO have this cycle through different go-getem phrases?
  tasks: TaskData[] = [
    { id: Guid.create(), project: 'Cat', text: 'Eat the cat.', },
    { id: Guid.create(), project: 'Cat', text: 'Feline feline feline.', },
    { id: Guid.create(), project: 'Truck', text: 'You know what I mean..', },
    { id: Guid.create(), project: 'Tour', text: 'Waiting to take you away!!', }
  ];
  constructor() { }

  addTask(event: TaskData) {
    console.log('SUBMITTED EVENT', event);
    this.tasks.push(event);
  }
  ngOnInit() {
  }

  deleteTask(id: Guid) {
    for (const index of this.tasks) {
      if (index.id.equals(id)) {
        console.log('DELETING TASK WITH ID ', id);
        this.tasks.splice(this.tasks.indexOf(index));
      }
    }
  }

  editTask() {

  }

  completeTask(id: Guid) {
    this.deleteTask(id);
  }

}
