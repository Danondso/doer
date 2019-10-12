import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { TaskData } from '../../interfaces/task-data';
import { environment } from '../../../../environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  apiUrl: string = environment.apiBaseUrl;

  constructor(private http: HttpClient) { }

  getTasks(email: string) {
    return this.http.get<TaskData[]>(`${this.apiUrl}/tasks/${email}`);
  }

  createTask(task: TaskData) {
    return this.http.post(`${this.apiUrl}/tasks/`, task);
  }

  updateTask(id: string, task: TaskData) {
    return this.http.put(`${this.apiUrl}/tasks/${id}`, task);
  }

  deleteTask(id: string): Observable<{}> {
    return this.http.delete(`${this.apiUrl}/tasks/${id}`);
  }
}
