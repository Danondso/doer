import { Component, Input, Output, EventEmitter } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { TaskData } from '../task-data';
import { transition, trigger, style, state, animate } from '@angular/animations';


@Component({
  selector: 'app-create-task',
  templateUrl: './create-task.component.html',
  styleUrls: ['./create-task.component.sass'],
   animations: [
        trigger('showTaskCreateAnimation', [
      // ...
      state('true', style({
        transition: 'height 1s',
        height: 'auto',
        margin: 'auto',
        width: '43%',
        padding: '10px'
      })),
      state('false', style({
        transition: 'height 1s',
        height: '0px',
        margin: 'auto',
        width: '43%',
        padding: '0px'
      })),
      transition('true <=> false', [
        animate(500)
      ])
    ]),
  ],
})
export class CreateTaskComponent {

  taskCreateForm;

  @Input() showTaskCreateForm: boolean;
  @Output() newTask: EventEmitter<TaskData> = new EventEmitter<TaskData>();

  constructor(private formBuilder: FormBuilder) {
    this.taskCreateForm = this.formBuilder.group({
      projectName: '',
      taskDescription: '',
    });
  }

  onSubmit(taskData) {
    console.log('FORM SUBMITTED', taskData);
    const task: TaskData = { project: taskData.projectName, text: taskData.taskDescription };
    this.newTask.emit(task);
  }

}
