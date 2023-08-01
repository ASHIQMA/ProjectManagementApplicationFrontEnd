import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AdminserviceService } from '../adminservice.service';

@Component({
  selector: 'app-assign-task-form',
  templateUrl: './assign-task-form.component.html',
  styleUrls: ['./assign-task-form.component.css']
})
export class AssignTaskFormComponent {

  taskId:any;
  formData={
  userId:''
}


  constructor(private router:Router,private http:HttpClient,private adminservice:AdminserviceService){}
  onUpdate(taskId: any,formData:any) {
    this.adminservice.assignTaskById(taskId,formData)
      .subscribe(
        (response:any) => {

          
          alert('updated successfully');
          // Perform any necessary actions after successful update
          this.formData = {
            userId:''
          };
          
        
      },
        error => {
          console.error('Error updating project:', error);
        }
      );
  }
 
}

