import { Component } from '@angular/core';
import { PrintPDF } from '../common/print-pdf';

@Component({
  selector: 'app-investment-tracker',
  templateUrl: './investment-tracker.component.html'
})
export class InvestmentTrackerComponent {
  IsWait: boolean;
  constructor(private printService:PrintPDF) {
  }
  ngOnInit(): void {

  }
  public printSIPByDate()  
  { 
    var data = document.getElementById('SIPByDate');  
    this.printService.captureScreen(data, 'SIPByDate.pdf');
  }
  public printSIPByFund()  
  { 
    var data = document.getElementById('SIPByFund');  
    this.printService.captureScreen(data, 'SIPByFund.pdf');
  }
  public printReports()  
  { 
    var data = document.getElementById('FinancialReport');  
    this.printService.captureScreen(data, 'FinancialReport.pdf');
  }
  public printIndividualReturn()  
  { 
    var data = document.getElementById('IndividualReturn');  
    this.printService.captureScreen(data, 'IndividualReturn.pdf');
  }
  public printCombinedReturn()  
  { 
    var data = document.getElementById('CombinedReturn');  
    this.printService.captureScreen(data, 'CombinedReturn.pdf');
  }
  public printSIPDetails()  
  { 
    var data = document.getElementById('SIPDetails');  
    this.printService.captureScreen(data, 'SIPDetails.pdf');
  }
  
}


