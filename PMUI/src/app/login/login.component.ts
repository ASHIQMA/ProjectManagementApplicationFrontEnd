import { Component, OnInit } from '@angular/core';
// import { Router } from '@angular/router';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent  {
 
  username : string = '';
  password : string = '';
  role : string = '';
  roles : string[];
  

  constructor(private router:Router){
    this.roles=[
      'admin',
      'user'
    ]
  }

  
  

  login(){
    console.log(this.username+" "+this.password+" "+this.role)
   
   if(this.role==='admin' && this.password==='admin' && this.username==='admin'){
    this.router.navigate(['/home']);
   }
   
   else if(this.role=='user' && this.password==='user' && this.username==='user'){
    this.router.navigate(['/userHome']);
   }
   
 }


}

  
    
