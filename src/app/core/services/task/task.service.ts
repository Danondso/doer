import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { TaskData } from '../../interfaces/task-data';
import { environment } from '../../../../environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  apiUrl: string = environment.apiBaseUrl;

  headers = new HttpHeaders()
  .append('Access-Control-Allow-Origin', 'localhost')
  .append('Access-Control-Allow-Methods', 'POST, PUT, DELETE');

  constructor(private http: HttpClient) { }

  getTasks(email: string) {
    return this.http.get<TaskData[]>(this.apiUrl + '/' + email + '/tasks');
  }

  createTask(task: TaskData) {
    console.log(task);
    return this.http.post(this.apiUrl + '/task', task, {headers: this.headers});
  }

  updateTask(id: string, task: TaskData) {
    return this.http.put(this.apiUrl + '/' + id, task, {headers: this.headers});
  }

  deleteTask(id: string): Observable<{}> {
    return this.http.delete(`${this.apiUrl}/task/${id}`);
  }
}
