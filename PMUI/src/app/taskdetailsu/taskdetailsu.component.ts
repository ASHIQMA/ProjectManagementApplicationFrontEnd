import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserserviceService } from '../userservice.service';

@Component({
  selector: 'app-taskdetailsu',
  templateUrl: './taskdetailsu.component.html',
  styleUrls: ['./taskdetailsu.component.css']
})
export class TaskdetailsuComponent {
  taskId=history.state.taskId;

  data:any;

  constructor(private router:Router,private userservice:UserserviceService,private http:HttpClient){
    
    this.fetchData();
  }

  fetchData(){
    this.http.get<any>(`http://localhost:8084/user/gettask/${this.taskId}`).subscribe(
      (response) => {
        this.data = response;
      },
      (error) => {
        console.error('Error fetching task data:', error);
      }
    );
  }

}
