import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AdminserviceService } from '../adminservice.service';

@Component({
  selector: 'app-updatetask',
  templateUrl: './updatetask.component.html',
  styleUrls: ['./updatetask.component.css']
})
export class UpdatetaskComponent {

  taskId:any;
  formData={
    projectId:'',
    taskId:'',
    taskName:'',
    userId:'',
    status:'',
    taskDescription:''
  }

  constructor(private http:HttpClient,private router:Router,private adminservice:AdminserviceService){}

  onUpdate(taskId:any,formData:any){
    this.adminservice.updateTaskById(taskId,formData)
    .subscribe(
      (response:any) => {
        alert("updated successfully");
        // Perform any necessary actions after successful update
        this.formData = {
          projectId:'',
    taskId:'',
    taskName:'',
    userId:'',
    status:'',
    taskDescription:''
        };
        
      
    },
      error => {
        console.error('Error updating project:', error);
      }
    );
}

  }

