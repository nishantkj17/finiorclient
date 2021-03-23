import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { financialsService } from '../service/financialsService';
import * as jspdf from 'jspdf';  
import html2canvas from 'html2canvas';  

@Component({
  selector: 'app-investment-savings-details',
  templateUrl: './investment-savings-details.component.html',
  styleUrls: ['./investment-savings-details.component.css']
})
export class InvestmentSavingsDetailsComponent implements OnInit {
  _router: string;
  constructor(private financialService: financialsService, private router: Router) {

  }

  ngOnInit(): void {

  }
  public captureScreen()  
  {  
    var data = document.getElementById('canvastoprint');  
    html2canvas(data).then(canvas => {  
      // Few necessary setting options  
      var imgWidth = 208;   
      var pageHeight = 295;    
      var imgHeight = canvas.height * imgWidth / canvas.width;  
      var heightLeft = imgHeight;  
  
      const contentDataURL = canvas.toDataURL('image/png')  
      let pdf = new jspdf.jsPDF('p', 'mm', 'a4'); // A4 size page of PDF  
      var position = 0;  
      pdf.addImage(contentDataURL, 'PNG', 0, position, imgWidth, imgHeight)  
      pdf.save('FinancialDashboard.pdf'); // Generated PDF   
    });  
  }
}
