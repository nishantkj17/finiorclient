import { Component, OnInit } from '@angular/core';
import { PrintPDF } from '../common/print-pdf';
import { DashBoardChangeData, financialsService, Returns } from '../service/financialsService';


@Component({
  selector: 'app-investment-savings-details',
  templateUrl: './investment-savings-details.component.html',
  styleUrls: ['./investment-savings-details.component.css']
})
export class InvestmentSavingsDetailsComponent implements OnInit {
  _router: string;
  showReports: boolean = false;
  public dashboardChangeData: DashBoardChangeData;
  constructor(private printService: PrintPDF, private financialService: financialsService) {

  }

  ngOnInit(): void {
   this.getDashboardChangeData();
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
    localStorage.clear();
  }

  getDashboardChangeData() {
    this.financialService.getDashboardChangeData().subscribe(
      (data: any) => {
        this.dashboardChangeData = data as DashBoardChangeData;
        console.log(this.dashboardChangeData);
      },
      (error) => {
        console.log(error);
      }
    );
  }
}
