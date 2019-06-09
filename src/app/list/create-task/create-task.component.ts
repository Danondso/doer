import { Component, Input, Output, EventEmitter } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { TaskData } from '../task-data';
import { transition, trigger, style, state, animate } from '@angular/animations';
import { SlideInAndOut } from 'src/app/animations/slide-in-and-out.animation';


@Component({
  selector: 'app-create-task',
  templateUrl: './create-task.component.html',
  styleUrls: ['./create-task.component.sass'],
   animations: [SlideInAndOut],
})
export class CreateTaskComponent {

  taskCreateForm;
  projectName: string;
  taskDescription: string;

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
    this.taskCreateForm.reset();
  }

}
