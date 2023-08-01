import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AdminserviceService } from '../adminservice.service';
import { UserserviceService } from '../userservice.service';

@Component({
  selector: 'app-view-assigned-tasks',
  templateUrl: './view-assigned-tasks.component.html',
  styleUrls: ['./view-assigned-tasks.component.css']
})
export class ViewAssignedTasksComponent {
  
  taskId:'';

  constructor(private userservice: UserserviceService,private router:Router) {
    
   }

   onViewTask(){
    this.router.navigate(['/taskDetails'],{ state: { taskId:this.taskId}});
    
  }

  addComment(){
   this.router.navigate(['/add-comment'],{ state: { taskId:this.taskId}});
  }

 

}
