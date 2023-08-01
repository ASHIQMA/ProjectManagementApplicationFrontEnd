import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AdminserviceService } from '../adminservice.service';

@Component({
  selector: 'app-delete-project-form',
  templateUrl: './delete-project-form.component.html',
  styleUrls: ['./delete-project-form.component.css']
})
export class DeleteProjectFormComponent {

  projectId:'';

  constructor(private router:Router,private adminservice:AdminserviceService){}

  onDelete(projectId: any) {
    this.adminservice.deleteById(projectId)
      .subscribe(
        (response:any) => {
          alert('Deleted successfully');
        
      },
        error => {
          console.error('Error deleting project:', error);
        }
      );
  
  }
}

  

  



