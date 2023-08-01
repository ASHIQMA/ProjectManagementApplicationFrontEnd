import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { isEmpty } from 'rxjs';
import { AdminserviceService } from '../adminservice.service';

@Component({
  selector: 'app-deletetask',
  templateUrl: './deletetask.component.html',
  styleUrls: ['./deletetask.component.css']
})
export class DeletetaskComponent {

  taskId:any;

  constructor(private http:HttpClient,private adminservice:AdminserviceService){}

  onSubmit(taskId:any){
    this.adminservice.deleteTaskId(taskId)
    .subscribe(
      (response:any) => {
        
        alert("Task deleted successfully");

        this.taskId='';
      
    },
      ( error: any) => {
        console.error('Error deleting task:', error);
      }
    );

}

  }




