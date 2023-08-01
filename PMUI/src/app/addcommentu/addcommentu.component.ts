import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-addcommentu',
  templateUrl: './addcommentu.component.html',
  styleUrls: ['./addcommentu.component.css']
})
export class AddcommentuComponent {
  formData={
    taskId:history.state.taskId,
    userId:'',
    commentDescription:''

  }
  constructor(private http:HttpClient){}
  addComment(){
    this.http.post('http://localhost:8086/user/addComment', this.formData)
    .subscribe((response: any) => {
      alert("Comment added successfully")
      // Reset the form after successful submission
      this.formData = {
        taskId:'',
        userId:'',
        commentDescription:''
        
      };
    }, (error: any) => {
      console.error('Error adding comment:', error);
    });
   

  }
  }
 
        
      
   

  

