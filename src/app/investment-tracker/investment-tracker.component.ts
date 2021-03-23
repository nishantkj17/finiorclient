import { Component } from '@angular/core';
import * as jspdf from 'jspdf';  
import html2canvas from 'html2canvas';  

@Component({
  selector: 'app-investment-tracker',
  templateUrl: './investment-tracker.component.html'
})
export class InvestmentTrackerComponent {
  IsWait: boolean;
  constructor() {
  }
  ngOnInit(): void {

  }
  public printSIPByDate()  
  { 
    var data = document.getElementById('SIPByDate');  
    this.captureScreen(data, 'SIPByDate.pdf');
  }
  public printSIPByFund()  
  { 
    var data = document.getElementById('SIPByFund');  
    this.captureScreen(data, 'SIPByFund.pdf');
  }
  public printReports()  
  { 
    var data = document.getElementById('FinancialReport');  
    this.captureScreen(data, 'FinancialReport.pdf');
  }
  public printIndividualReturn()  
  { 
    var data = document.getElementById('IndividualReturn');  
    this.captureScreen(data, 'IndividualReturn.pdf');
  }
  public printCombinedReturn()  
  { 
    var data = document.getElementById('CombinedReturn');  
    this.captureScreen(data, 'CombinedReturn.pdf');
  }
  public printSIPDetails()  
  { 
    var data = document.getElementById('SIPDetails');  
    this.captureScreen(data, 'SIPDetails.pdf');
  }
  public captureScreen(data: HTMLElement, filename:string)  
  {  
    //var data = document.getElementById('canvastoprint');  
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
      pdf.save(filename); // Generated PDF   
    });  
  }
}


