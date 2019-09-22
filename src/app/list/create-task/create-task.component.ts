import { Component, Input, Output, EventEmitter } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { TaskData } from '../../core/interfaces/task-data';
import { trigger, state, style, transition, animate, group } from '@angular/animations';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-create-task',
  templateUrl: './create-task.component.html',
  styleUrls: ['./create-task.component.scss'],
   animations: [trigger('showTaskCreateAnimation', [
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
        animate('600ms ease-in-out', style({
            'max-height': '0px'
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
        animate('800ms ease-in-out', style({
            opacity: '1'
        }))
    ]
    )])
])],
})
export class CreateTaskComponent {
  taskCreateForm;
  @Input() showTaskCreateForm: boolean;
  @Output() newTask: EventEmitter<TaskData> = new EventEmitter<TaskData>();
  isDarkTheme: Observable<boolean>;

  constructor(private formBuilder: FormBuilder) {
    this.taskCreateForm = this.formBuilder.group({
      projectName: '',
      taskDescription: '',
    });
  }

  onSubmit(taskData) {
    console.log('FORM SUBMITTED', taskData);
    const task: TaskData = {
      project: taskData.projectName,
      text: taskData.taskDescription
    };
    this.newTask.emit(task);
    this.taskCreateForm.reset();
    this.showTaskCreateForm = false;
    }

}
