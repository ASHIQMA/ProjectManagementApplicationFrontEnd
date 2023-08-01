import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AdminserviceService } from '../adminservice.service';

@Component({
  selector: 'app-update-project-form',
  templateUrl: './update-project-form.component.html',
  styleUrls: ['./update-project-form.component.css']
})
export class UpdateProjectFormComponent {
  projectId:any;
  formData={
  projectName: '',
  projectDescription: ''
  }

  constructor(private router:Router,private http:HttpClient,private adminservice:AdminserviceService){}

  onUpdate(projectId: any,formData:any) {
    this.adminservice.updateById(projectId,formData)
      .subscribe(
        (response:any) => {
          alert("updated successfully");
          // Perform any necessary actions after successful update
          this.formData = {
            projectName: '',
            projectDescription:''
          };
          
        
      },
        error => {
          console.error('Error updating project:', error);
        }
      );
  }
}
