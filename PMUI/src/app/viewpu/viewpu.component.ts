import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AdminserviceService } from '../adminservice.service';

@Component({
  selector: 'app-viewpu',
  templateUrl: './viewpu.component.html',
  styleUrls: ['./viewpu.component.css']
})
export class ViewpuComponent {
  data:any[]=[];

  constructor(private adminservice: AdminserviceService,private router:Router) {   
    this.adminservice.getData().subscribe((data: any[]) => {
   this.data = data;
 }); }


}
