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
  constructor(private financialService: financialsService, private router: Router, private printService:PrintPDF) {

  }

  ngOnInit(): void {

  }
  public printDashBoard()  
  { 
    var data = document.getElementById('FinancialDashboard');  
    this.printService.captureScreen(data, 'FinancialDashboard.pdf');
  }
}
