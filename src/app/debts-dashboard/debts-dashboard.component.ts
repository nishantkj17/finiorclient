import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Debt } from '../model/financialdiarymodel';
import { financialsService } from '../service/financialsService';

@Component({
  selector: 'app-debts-dashboard',
  templateUrl: './debts-dashboard.component.html',
  styleUrls: ['./debts-dashboard.component.css']
})
export class DebtsDashboardComponent implements OnInit {
  debtDasbhboardData: Debt[];
  constructor(private financialService: financialsService, private router: Router) {  

  }

  ngOnInit(): void {
   this.getDebtDashboardData(); 
  }
  getDebtDashboardData()
  {
    this.financialService.getDebtsDashboardData().subscribe(
      (data: any) => {
        this.debtDasbhboardData = data as Debt[]; 
        console.log(this.debtDasbhboardData);
      },
      (error) => {
        console.log(error);
      }
    );
  }
}
