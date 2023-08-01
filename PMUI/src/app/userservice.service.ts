import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class UserserviceService {

  id:any;

  getTaskById!:any;
  getAllTask!:any;
  deleteTaskById!:any;
  updateTask!:any;
  deleteTaskByProject!:any;
  updateStat!:any;
  assignTask!:any;

  constructor(private http:HttpClient) { 

  this.updateStat="http://localhost:8084/user/status"
  }

  updateStatus(taskId:any,formData:any):Observable<any>{
    const url = `${this.updateStat}/${taskId}`;
    return this.http.put<any>(url,formData);
   }
}
