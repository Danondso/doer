import { Component, OnInit, Input } from '@angular/core';
import { TaskData } from '../interfaces/task-data';
import { Guid } from 'guid-typescript';
import { FadeIn } from 'src/app/animations/fade-in.animation';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
  animations: [FadeIn],
})
export class ListComponent implements OnInit {
  showTaskCreate: boolean;
  canEdit: boolean;
  isDarkTheme: Observable<boolean>;

  tasksTitle = 'Do good.'; // TODO have this cycle through different go-getem phrases?
  tasks: TaskData[] = [
    { id: Guid.create(), project: 'Cat', text: 'Feed the cat.', canEdit: false, createdTime: new Date() },
    { id: Guid.create(), project: 'Dog', text: 'Walk the dog.', canEdit: false, createdTime: new Date() },
    { id: Guid.create(), project: 'Work', text: 'Prepare sandwiches for the party', canEdit: false, createdTime: new Date() }
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
        this.tasks.splice(this.tasks.indexOf(index), 1);
        break;
      }
    }
  }

  editTask() {

  }

  completeTask(id: Guid) {
    this.deleteTask(id);
  }

}
