import { Component, OnInit, HostBinding } from '@angular/core';
import { TaskData } from './task-data';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.sass'],
})
export class ListComponent implements OnInit {
  showTaskCreate: boolean;
  tasksTitle = 'Do good.'; // TODO have this cycle through different go-getem phrases?
  tasks: TaskData[] = [
    { id: 1, project: 'Cat', text: 'Eat the cat.', },
    { id: 2, project: 'Cat', text: 'Feline feline feline.', },
    { id: 3, project: 'Truck', text: 'You know what I mean..', },
    { id: 4, project: 'Tour', text: 'Waiting to take you away!!', }
  ];
  constructor() { }

  addTask(event: TaskData) {
    console.log('SUBMITTED EVENT', event);
    this.tasks.push(event);
  }
  ngOnInit() {
  }

  deleteTask(id: number) {
    for (let index of this.tasks) {
      if (index.id === id) {
          console.log("DELETING TASK WITH ID ", id);
          this.tasks.splice(id);
          break;
      }
    }
  }

  editTask() {

  }

  completeTask(id: number) {
      this.deleteTask(id);
  }

}
