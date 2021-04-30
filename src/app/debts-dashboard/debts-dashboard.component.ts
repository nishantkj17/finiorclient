import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Debt } from '../service/financialsService';
import { financialsService } from '../service/financialsService';

@Component({
  selector: 'app-debts-dashboard',
  templateUrl: './debts-dashboard.component.html',
  styleUrls: ['./debts-dashboard.component.css']
})
export class DebtsDashboardComponent implements OnInit {
  debtDasbhboardData: Debt[];
  totalDebts:number=0;
  @Input() change: string;
  @Input() increased: boolean;
  @Input() percent: string;
  constructor(private financialService: financialsService, private router: Router) {

  }

  ngOnInit(): void {
    this.getDebtDashboardData();
  }
  getDebtDashboardData() {
    this.financialService.getDebtsDashboardData().subscribe(
      (data: any) => {
        this.debtDasbhboardData = data as Debt[];
        this.debtDasbhboardData.forEach(element => {
          this.totalDebts+=element.currentbalance;

        });
      },
      (error) => {
        console.log(error);
      }
    );
  }
}
