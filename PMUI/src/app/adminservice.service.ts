import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class AdminserviceService {

  getByAllUrl!:string;

  getByIdUrl!:string;

  deleteUrl!:string

  addUrl!:string;

  updateUrl!:string;

  getTaskById!:any;
  getAllTask!:any;
  deleteTaskById!:any;
  updateTask!:any;
  deleteTaskByProject!:any;
  updateStatus!:any;
  assignTaskByUser!:any;
  getComm!:any;

  constructor(private http: HttpClient) {

    this.getByAllUrl="http://localhost:8085/admin/projects";
    this.getByIdUrl="http://localhost:8085/admin/getprojects";
    this.deleteUrl="http://localhost:8085/admin/deleteprojects";
    this.updateUrl="http://localhost:8085/admin/updateprojects";
    this.getTaskById="http://localhost:8084/admin/gettask";
    this.getAllTask="http://localhost:8084/admin/gettasks";
    this.deleteTaskById="http://localhost:8084/admin/delete";
    this.updateTask="http://localhost:8084/admin/updatetasks";
    this.deleteTaskByProject="http://localhost:8084/admin/deleteByProject";
    this.updateStatus="http://localhost:8084/admin/updatestatus";
    this.assignTaskByUser="http://localhost:8084/admin/assignTask";
    this.getComm="http://localhost:8086/admin/getComments";

}
getData() {
  return this.http.get<any[]>(this.getByAllUrl);
}

getById(projectId: any): Observable<any> {
  const url = `${this.getByIdUrl}/${projectId}`;
  return this.http.get<any>(url);
}

deleteById(projectId:any):Observable<any>{
  const url = `${this.deleteUrl}/${projectId}`;
  return this.http.delete<any>(url);
}

updateById(projectId:any,formData:any):Observable<any>{
  const url = `${this.updateUrl}/${projectId}`;
  return this.http.put<any>(url,formData);
}

getAllTasks(){
  return this.http.get<any[]>(this.getAllTask);
}

getTaskUsingId(taskId:any):Observable<any>{
  const url = `${this.getTaskById}/${taskId}`;
  return this.http.get<any>(url);

}

deleteTaskId(taskId:any):Observable<any>{
  const url = `${this.deleteTaskById}/${taskId}`;
  return this.http.delete<any>(url);
}

updateTaskById(taskId:any,formData:any):Observable<any>{
  const url = `${this.updateTask}/${taskId}`;
  return this.http.put<any>(url,formData);
}

deletetaskByProId(projectId:any):Observable<any>{
  const url = `${this.deleteTaskByProject}/${projectId}`;
  return this.http.delete<any>(url);
}

updateStatusByTask(taskId:any):Observable<any>{
  const url = `${this.updateStatus}/${taskId}`;
  return this.http.put<any>(url,FormData);
}

assignTaskById(taskId:any,formData:any):Observable<any>{
  const url = `${this.assignTaskByUser}/${taskId}`;
  return this.http.put<any>(url,formData);
}

getComments() {
  return this.http.get<any[]>(this.getComm);
}


}
