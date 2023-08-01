import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AdminserviceService } from '../adminservice.service';
import { jsPDF } from 'jspdf';
import autoTable from 'jspdf-autotable';'jspdf-autotable';


@Component({
  selector: 'app-admin-project-veiew',
  templateUrl: './admin-project-veiew.component.html',
  styleUrls: ['./admin-project-veiew.component.css']
})
export class AdminProjectVeiewComponent {
  data:any[]=[];


  constructor(private adminservice: AdminserviceService,private router:Router) {   
    this.adminservice.getData().subscribe(data => {
   this.data = data;
 }); }

 generatePDF() {
  const doc = new jsPDF();
  const tableHeaders = [['Project Id', 'Project Name', 'Project Description']];
  const tableData = this.data.map((item) => [item.projectId, item.projectName, item.projectDescription]);

  doc.text('Project Details', 10, 10);
  autoTable(doc, {
    head: tableHeaders,
    body: tableData,
    startY: 20,
    margin: { top: 15 },
  });


  doc.save('project.pdf');
}


  

}
