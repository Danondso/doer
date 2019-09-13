import { Component, OnInit } from '@angular/core';
import { TaskData } from '../core/interfaces/task-data';
import { Observable } from 'rxjs';
import { trigger, state, style, transition, animate, group } from '@angular/animations';
import { TaskService } from '../core/services/task/task.service';
import { OAuthService } from 'angular-oauth2-oidc';

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
  tasks: TaskData[] = [];
  constructor(private taskService: TaskService, private oauthService: OAuthService) { }

  ngOnInit() {
    this.taskService.getTasks(this.oauthService.getIdentityClaims()['email'])
    .subscribe((payload: TaskData[]) => this.tasks = payload['data']);
  }

  addTask(event: TaskData) {
    console.log('SUBMITTED EVENT', event);
    event.email = this.oauthService.getIdentityClaims()['email'];
    this.taskService.createTask(event).subscribe((response: TaskData) => {
      this.tasks.push(response['data']);
    });
  }

  updateTask(event: TaskData) {
    //todo make this not needlessly iterate through the tasks.
    event.canEdit = !event.canEdit;
    for (const index of this.tasks) {
      if (index.id === event.id) {
          if (index.project !== event.project || index.text !== event.project) {
              console.log('UPDATING TASK');
              this.taskService.updateTask(event.id, event).subscribe(() => {
                this.tasks.splice(this.tasks.indexOf(index), 1);
              });
          }
      }
    }
  }

  deleteTask(id: string) {
    for (const index of this.tasks) {
      if (index.id === id) {
        console.log('DELETING TASK WITH ID ', id);
        this.taskService.deleteTask(id).subscribe(() => {
          this.tasks.splice(this.tasks.indexOf(index), 1);
        });
        break;
      }
    }
  }

  completeTask(id: string) {
    this.deleteTask(id);
  }

}
