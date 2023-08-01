import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserserviceService } from '../userservice.service';

@Component({
  selector: 'app-update-task-status-form',
  templateUrl: './update-task-status-form.component.html',
  styleUrls: ['./update-task-status-form.component.css']
})
export class UpdateTaskStatusFormComponent {

  taskId:'';
  formData={
    status:''
  }

  constructor(private router:Router,private userservice:UserserviceService){}



  updateStatus(taskId:any,formData:any){
    this.userservice.updateStatus(taskId,formData).subscribe(
      (response:any) => {
        alert("updated successfully");
        // Perform any necessary actions after successful update
        this.formData = {
          status:''
        };
        
      
    },
      error => {
        console.error('Error updating project:', error);
      }
    );
}

  }


