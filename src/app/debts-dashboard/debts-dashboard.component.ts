import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DashboardDataForChart } from '../model/financialdiarymodel';
import { financialsService } from '../service/financialsService';

@Component({
  selector: 'app-debts-dashboard',
  templateUrl: './debts-dashboard.component.html',
  styleUrls: ['./debts-dashboard.component.css']
})
export class DebtsDashboardComponent implements OnInit {
  dasbhboardData: DashboardDataForChart;
  constructor(private financialService: financialsService, private router: Router) {  

  }

  ngOnInit(): void {
    
  }
 
}
