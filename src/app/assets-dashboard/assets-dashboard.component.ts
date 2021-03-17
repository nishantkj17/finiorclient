import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DashboardDataForChart } from '../model/financialdiarymodel';
import { financialsService } from '../service/financialsService';

@Component({
  selector: 'app-assets-dashboard',
  templateUrl: './assets-dashboard.component.html',
  styleUrls: ['./assets-dashboard.component.css']
})
export class AssetsDashboardComponent implements OnInit {
  dasbhboardData: DashboardDataForChart;
  constructor(private financialService: financialsService, private router: Router) {  

  }

  ngOnInit(): void {
    this.getDashboardData();
  }
  getDashboardData()
  {
    this.financialService.getAssetsDashboardData().subscribe(
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
