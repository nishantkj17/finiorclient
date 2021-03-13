import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DashboardDataForChart } from '../model/financialdiarymodel';
import { financialsService } from '../service/financialsService';

@Component({
  selector: 'app-investment-savings-details',
  templateUrl: './investment-savings-details.component.html',
  styleUrls: ['./investment-savings-details.component.css']
})
export class InvestmentSavingsDetailsComponent implements OnInit {
  dasbhboardData: DashboardDataForChart;
   _router: string;
  constructor(private financialService: financialsService, private router: Router) {  

  }
  

  ngOnInit(): void {
    this.getDashboardData();
  }
  getDashboardData()
  {
    this.financialService.getDashboardDataForChart().subscribe(
      (data: any) => {
        this.dasbhboardData = data as DashboardDataForChart; 
        //console.log(this.dasbhboardData);
      },
      (error) => {
        console.log(error);
      }
    );
  }
}
