import { Component, OnInit, Input } from '@angular/core';
import { TaskData } from '../core/interfaces/task-data';
import { Guid } from 'guid-typescript';
import { Observable } from 'rxjs';
import { trigger, state, style, transition, animate, group } from '@angular/animations';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
  animations: [trigger('fadeInAnimation', [
    state('true', style({
        opacity: '1', visibility: 'visible'
    })),
    state('false', style({
        opacity: '0', visibility: 'hidden'
    })),
    transition('true => false', [group([
        animate('400ms ease-in-out', style({
            opacity: '0'
        })),
        animate('700ms ease-in-out', style({
            visibility: 'hidden'
        }))
    ]
    )]),
    transition('false => true', [group([
        animate('1ms ease-in-out', style({
            visibility: 'visible'
        })),
        animate('1ms ease-in-out', style({
            opacity: '1'
        }))
    ]
    )])
])],
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

  completeTask(id: Guid) {
    this.deleteTask(id);
  }

}
