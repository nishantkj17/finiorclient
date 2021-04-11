import { Component, OnInit, ElementRef ,ViewChild } from '@angular/core';
import { ChartOptions, ChartType } from 'chart.js';
import { Color } from 'ng2-charts';
import { Returns } from '../service/financialsService';
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
    this.financialService.getPFReturnForChart(localStorage.getItem('user')).subscribe(
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
}
