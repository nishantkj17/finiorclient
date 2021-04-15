import { Component, OnInit } from '@angular/core';
import { PrintPDF } from '../common/print-pdf';


@Component({
  selector: 'app-investment-savings-details',
  templateUrl: './investment-savings-details.component.html',
  styleUrls: ['./investment-savings-details.component.css']
})
export class InvestmentSavingsDetailsComponent implements OnInit {
  _router: string;
  showReports: boolean = false;

  constructor(private printService: PrintPDF) {

  }

  ngOnInit(): void {
   
  }
  public showChart() {
    this.showReports = true;
  }
  public hideChart() {
    this.showReports = false;
  }
  public printDashBoard() {
    var data = document.getElementById('FinancialDashboard');
    this.printService.captureScreen(data, 'FinancialDashboard.pdf');
  }

  public logOut = () => {
    localStorage.removeItem("jwt");
  }
}
