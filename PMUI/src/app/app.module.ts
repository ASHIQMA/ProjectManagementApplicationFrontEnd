import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CreateProjectFormComponent } from './create-project-form/create-project-form.component';
import { UpdateProjectFormComponent } from './update-project-form/update-project-form.component';
import { AssignTaskFormComponent } from './assign-task-form/assign-task-form.component';
import { ViewAssignedTasksComponent } from './view-assigned-tasks/view-assigned-tasks.component';
import { UpdateTaskStatusFormComponent } from './update-task-status-form/update-task-status-form.component';
import { AddCommentFormComponent } from './add-comment-form/add-comment-form.component';
import { SearchTaskFormComponent } from './search-task-form/search-task-form.component';
import { DeleteProjectFormComponent } from './delete-project-form/delete-project-form.component';
import { FormsModule } from '@angular/forms';
import { HomeComponent } from './Adminhome/home.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { LoginComponent } from './login/login.component';
import { ProfileComponent } from './profile/profile.component';
import { LogoutComponent } from './logout/logout.component';
import { AddTaskComponent } from './add-task/add-task.component';
import { AdminProjectVeiewComponent } from './admin-project-veiew/admin-project-veiew.component';
import { CommonHomeComponent } from './common-home/common-home.component';
import { UserHomeComponent } from './user-home/user-home.component';
import { ViewTaskOfUserComponent } from './view-task-of-user/view-task-of-user.component';
import { TaskDetailsComponent } from './task-details/task-details.component';
import { ViewtaskComponent } from './viewtask/viewtask.component';
import { DeletetaskComponent } from './deletetask/deletetask.component';
import { UpdatetaskComponent } from './updatetask/updatetask.component';
import { AddcommentComponent } from './addcomment/addcomment.component';
import { ViewcommentComponent } from './viewcomment/viewcomment.component';
import { UserserviceService } from './userservice.service';
import { AdminserviceService } from './adminservice.service';
import { AuthGuard } from './auth.guard';
import { NavbaruserComponent } from './navbaruser/navbaruser.component';
import { ViewpuComponent } from './viewpu/viewpu.component';
import { ViewtuComponent } from './viewtu/viewtu.component';
import { TaskdetailsuComponent } from './taskdetailsu/taskdetailsu.component';
import { AddcommentuComponent } from './addcommentu/addcommentu.component';
import { UpdatestatusuComponent } from './updatestatusu/updatestatusu.component';


@NgModule({
  declarations: [
    AppComponent,
    CreateProjectFormComponent,
    UpdateProjectFormComponent,
    AssignTaskFormComponent,
    ViewAssignedTasksComponent,
    UpdateTaskStatusFormComponent,
    AddCommentFormComponent,
    SearchTaskFormComponent,
    DeleteProjectFormComponent,
    HomeComponent,
    NavbarComponent,
    FooterComponent,
    LoginComponent,
    ProfileComponent,
    LogoutComponent,
    AddTaskComponent,
    AdminProjectVeiewComponent,
    CommonHomeComponent,
    UserHomeComponent,
    ViewTaskOfUserComponent,
    TaskDetailsComponent,
    ViewtaskComponent,
    DeletetaskComponent,
    UpdatetaskComponent,
    AddcommentComponent,
    ViewcommentComponent,
    NavbaruserComponent,
    ViewpuComponent,
    ViewtuComponent,
    TaskdetailsuComponent,
    AddcommentuComponent,
    UpdatestatusuComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [UserserviceService,AdminserviceService,AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
