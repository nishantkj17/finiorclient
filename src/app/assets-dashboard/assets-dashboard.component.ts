import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DashboardAssetDetails } from '../model/financialdiarymodel';
import { financialsService } from '../service/financialsService';

@Component({
  selector: 'app-assets-dashboard',
  templateUrl: './assets-dashboard.component.html',
  styleUrls: ['./assets-dashboard.component.css']
})
export class AssetsDashboardComponent implements OnInit {
  dasbhboardData: DashboardAssetDetails[];
  totalSavings:number=0;
  constructor(private financialService: financialsService, private router: Router) {

  }

  ngOnInit(): void {
    this.getDashboardData();
  }
  getDashboardData() {
    this.financialService.getAssetsDashboardData().subscribe(
      (data: any) => {
        this.dasbhboardData = data as DashboardAssetDetails[];
        this.dasbhboardData.forEach(element => {
          this.totalSavings+=element.currentvalue;
          console.log(this.totalSavings);
        });
        //console.log(this.dasbhboardData);
      },
      (error) => {
        console.log(error);
      }
    );
  }
}
