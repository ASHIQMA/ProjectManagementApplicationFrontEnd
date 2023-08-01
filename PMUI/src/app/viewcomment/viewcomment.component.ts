import { Component } from '@angular/core';
import { AdminserviceService } from '../adminservice.service';

@Component({
  selector: 'app-viewcomment',
  templateUrl: './viewcomment.component.html',
  styleUrls: ['./viewcomment.component.css']
})
export class ViewcommentComponent {

  data:any[]=[];

  constructor(private adminservice:AdminserviceService){
    this.adminservice.getComments().subscribe(data => {
      this.data = data;
    }); }
   

  }

  


