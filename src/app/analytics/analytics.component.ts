import { ThrowStmt } from '@angular/compiler';
import { Component, OnInit, ViewChild } from '@angular/core';
import { ChartDataSets, ChartOptions, ChartType } from 'chart.js';
import { Color, Label } from 'ng2-charts';
import { InvestmentDetails, InvestmentReturnDetails, Returns, InvestmentReturnDataForChart } from '../model/financialdiarymodel';
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
  public barChartType: ChartType = 'bar';
  public barChartLegend = true;
  public barChartPlugins = [];
  constructor(private financialService: financialsService) {
  }

  ngOnInit() {
    this.getCombinedInvestmentDetailsForChart();
    this.getIndividualInvestmentDetailsForChart();
    this.getEquityReturnForChart();
    this.getPFReturnForChart();
  }

  getCombinedInvestmentDetailsForChart() {
    this.financialService.getCombinedInvestmentReturnDataForChart().subscribe(
      (data: any) => {
        this.returnOnInvestment = data as Returns;
        console.log(this.returnOnInvestment);
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
        //console.log(this.pfSavings);
      },
      (error) => {
        console.log(error);
      }
    );
  }
}
