import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserserviceService } from '../userservice.service';

@Component({
  selector: 'app-viewtu',
  templateUrl: './viewtu.component.html',
  styleUrls: ['./viewtu.component.css']
})
export class ViewtuComponent {
  taskId:any;
  constructor(private userservice: UserserviceService,private router:Router) {
    
  }
  onViewTask(){
    this.router.navigate(['/taskdu'],{ state: { taskId:this.taskId}});
    
  }

  addComment(){
   this.router.navigate(['/addcommentu'],{ state: { taskId:this.taskId}});
  }

 

}
