import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserserviceService } from '../userservice.service';

@Component({
  selector: 'app-updatestatusu',
  templateUrl: './updatestatusu.component.html',
  styleUrls: ['./updatestatusu.component.css']
})
export class UpdatestatusuComponent {
  taskId:any;
  formData={
    status:''

  }
  constructor(private router:Router,private userservice:UserserviceService){}
  addStatus(taskId:any,formData:any){
    this.userservice.updateStatus(taskId,formData)
    .subscribe( (response:any) => {
      alert("added status successfully");
      // Perform any necessary actions after successful update
      this.formData = {
        status:''
      };
      
    
  },
    error => {
      console.error('Error updating status:', error);
    }
  );
}

  }
 


