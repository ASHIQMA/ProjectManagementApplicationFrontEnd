import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-comment-form',
  templateUrl: './add-comment-form.component.html',
  styleUrls: ['./add-comment-form.component.css']
})
export class AddCommentFormComponent {

  formData={
    taskId:history.state.taskId,
    userId:'',
    commentDescription:''

  }

  constructor(private router:Router,private http:HttpClient){
  }
  addComment(){

    
    this.http.post('http://localhost:8086/admin/addComment', this.formData)
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





