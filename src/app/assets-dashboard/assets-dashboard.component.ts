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
  constructor(private financialService: financialsService, private router: Router) {  

  }

  ngOnInit(): void {
    this.getDashboardData();
  }
  getDashboardData()
  {
    this.financialService.getAssetsDashboardData().subscribe(
      (data: any) => {
        this.dasbhboardData = data as DashboardAssetDetails[]; 
        //console.log(this.dasbhboardData);
      },
      (error) => {
        console.log(error);
      }
    );
  }
}
