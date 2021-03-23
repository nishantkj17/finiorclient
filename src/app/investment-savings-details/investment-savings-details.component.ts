import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { financialsService } from '../service/financialsService';
import { PrintPDF } from '../common/print-pdf';

@Component({
  selector: 'app-investment-savings-details',
  templateUrl: './investment-savings-details.component.html',
  styleUrls: ['./investment-savings-details.component.css']
})
export class InvestmentSavingsDetailsComponent implements OnInit {
  _router: string;
  showReports:boolean=false;
  
  constructor(private financialService: financialsService, private router: Router, private printService:PrintPDF) {

  }

  ngOnInit(): void {

  }
  public wait(ms){
    var start = new Date().getTime();
    var end = start;
    while(end < start + ms) {
      end = new Date().getTime();
   }
 }
  public printDashBoard()  
  { 
    //this.showReports=true;
    var data = document.getElementById('FinancialDashboard');  
    this.printService.captureScreen(data, 'FinancialDashboard.pdf');
    //this.showReports=false;
  }
}
