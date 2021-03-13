import { Component, OnInit } from '@angular/core';
import { DashboardDataForChart } from '../model/financialdiarymodel';
import { financialsService } from '../service/financialsService';

@Component({
  selector: 'app-landing-dashboard',
  templateUrl: './landing-dashboard.component.html',
  styleUrls: ['./landing-dashboard.component.css']
})
export class LandingDashboardComponent implements OnInit {
  dasbhboardData: DashboardDataForChart;

  constructor(private financialService: financialsService) {  
  }

  ngOnInit(): void {
  }

}
