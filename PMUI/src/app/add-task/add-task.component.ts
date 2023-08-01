import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css']
})
export class AddTaskComponent {
  

  formData={
    projectId:history.state.projectId,
    taskId:'',
    taskName:'',
    userId:'',
    status:'',
    taskDescription:''

  }

  constructor(private router:Router,private http:HttpClient){}

  onAdd(formData:any){
    this.http.post('http://localhost:8084/admin/addtask', this.formData)
    .subscribe((response: any) => {
      alert("Task added successfully")
      // Reset the form after successful submission
      this.formData = {
      projectId:'',
    taskId:'',
    taskName:'',
    userId:'',
    status:'',
    taskDescription:''
        
      };
    }, (error: any) => {
      console.error('Error adding data:', error);
    });
   

  }

}
