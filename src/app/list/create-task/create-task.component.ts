import { Component, Input, Output, EventEmitter } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { TaskData } from '../../core/interfaces/task-data';
import { SlideInAndOut } from 'src/app/animations/slide-in-and-out.animation';
import { Guid } from 'guid-typescript';


@Component({
  selector: 'app-create-task',
  templateUrl: './create-task.component.html',
  styleUrls: ['./create-task.component.scss'],
   animations: [SlideInAndOut],
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
    const task: TaskData = {
      project: taskData.projectName,
      text: taskData.taskDescription,
      id: Guid.create(), canEdit: false,
      createdTime: new Date()
    };
    this.newTask.emit(task);
    this.taskCreateForm.reset();
  }

}
