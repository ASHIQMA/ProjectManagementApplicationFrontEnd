import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-project-form',
  templateUrl: './create-project-form.component.html',
  styleUrls: ['./create-project-form.component.css']
})
export class CreateProjectFormComponent {
  formData={
  projectId:'',
  projectName:'',
  projectDescription:''
  }

  constructor(private http:HttpClient,private router:Router){}

  submitForm() {
    this.http.post('http://localhost:8085/admin/addprojects', this.formData)
    .subscribe((response: any) => {
      alert("project added successfully");
      // Reset the form after successful submission
      this.router.navigate(['/addTask'],{ state: { projectId:this.formData.projectId}});
      
      this.formData = {
        projectId: '',
        projectName: '',
        projectDescription:''
      };
    }, (error: any) => {
      console.error('Error adding data:', error);
    });
   

    
  }

  

}
