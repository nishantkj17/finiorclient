import { Component, OnInit, ElementRef ,ViewChild } from '@angular/core';
import { ChartOptions, ChartType } from 'chart.js';
import { Color } from 'ng2-charts';
import { DebtsDashboardComponent } from '../debts-dashboard/debts-dashboard.component';
import { Returns, Debts } from '../service/financialsService';
import { financialsService } from '../service/financialsService';

@Component({
  selector: 'analytics',
  templateUrl: './analytics.component.html'
})
export class AnalyticsComponent {
  public returnOnInvestment: Returns;
  public returnOnInvestmentIndividualProfile: Returns;
  public equityReturn: Returns;
  public pfSavings: Returns;
  public debtAndInvestment: Returns;
  public debtsTracker: Debts;
  public lineChartOptions: (ChartOptions & { annotation?: any }) = {
    responsive: true,

  };
  public lineChartColors: Color[] = [
    {
      borderColor: 'black',
      backgroundColor: 'rgba(255,0,0,0.3)',
    },
  ];
  public barChartOptions: ChartOptions = {
    responsive: true,
  };
  public lineChartLegend = true;
  public lineChartType = 'line';
  public lineChartPlugins = [];

  constructor(private financialService: financialsService) {
  }

  ngOnInit() {
    this.getCombinedInvestmentDetailsForChart();
    this.getIndividualInvestmentDetailsForChart();
    this.getEquityReturnForChart();
    this.getPFReturnForChart();
    this.getDebtInvestmentForChart();
    this.getDebtDataForChart();
  }

  getCombinedInvestmentDetailsForChart() {
    this.financialService.getCombinedInvestmentReturnDataForChart().subscribe(
      (data: any) => {
        this.returnOnInvestment = data as Returns;
        
      },
      (error) => {
        console.log(error);
      }
    );
  }
  getIndividualInvestmentDetailsForChart() {
    this.financialService.getIndividualInvestmentReturnDataForChart().subscribe(
      (data: any) => {
        this.returnOnInvestmentIndividualProfile = data as Returns;
      },
      (error) => {
        console.log(error);
      }
    );
  }

  getEquityReturnForChart() {
    this.financialService.getEquityInvestmentReturnDataForChart().subscribe(
      (data: any) => {
        this.equityReturn = data as Returns;
      },
      (error) => {
        console.log(error);
      }
    );
  }
  getPFReturnForChart() {
    this.financialService.getPFReturnForChart().subscribe(
      (data: any) => {
        this.pfSavings = data as Returns;
      },
      (error) => {
        console.log(error);
      }
    );
  }
  getDebtInvestmentForChart() {
    this.financialService.getDebtInvestmentForChart().subscribe(
      (data: any) => {
        this.debtAndInvestment = data as Returns;
        console.log(this.debtAndInvestment);
      },
      (error) => {
        console.log(error);
      }
    );
  }

  getDebtDataForChart() {
    this.financialService.getDebtDataForChart().subscribe(
      (data: any) => {
        this.debtsTracker = data as Debts;
        console.log(this.debtsTracker);
      },
      (error) => {
        console.log(error);
      }
    );
  }
}
