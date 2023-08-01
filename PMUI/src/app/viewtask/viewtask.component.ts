import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AdminserviceService } from '../adminservice.service';

@Component({
  selector: 'app-viewtask',
  templateUrl: './viewtask.component.html',
  styleUrls: ['./viewtask.component.css']
})
export class ViewtaskComponent {

  taskId:any;

  constructor(private router:Router,private http:HttpClient,private adminservice:AdminserviceService){}

  

  

}
