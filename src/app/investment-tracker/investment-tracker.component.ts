import { Component, Inject, ViewChild } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { financialsService } from '../service/financialsService';
import { InvestmentDetails, InvestmentReturnDetails } from '../model/financialdiarymodel';
import { ActivationStart, Router, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-investment-tracker',
  templateUrl: './investment-tracker.component.html'
})
export class InvestmentTrackerComponent {
  sipDetailsByDate: InvestmentDetails[];
  sipDetailsByFund: InvestmentDetails[];
  totalInvestment: InvestmentReturnDetails[];
  combinedInvestment: InvestmentReturnDetails[];
  IsWait: boolean;
  @ViewChild(RouterOutlet) outlet: RouterOutlet;
  constructor(private financialService: financialsService, private router: Router) {
   
  }
  ngOnInit(): void {
    this.router.events.subscribe(e => {
      if (e instanceof ActivationStart && e.snapshot.outlet === "investmenttracker")
        this.outlet.deactivate();
    });
    this.IsWait = true;
    this.populateSipDetailsByDate();
    this.populateSipDetailsByFund();
    this.populateInvestmentReturnDetails();
    this.populateCombinedInvestmentReturnDetails();
    this.IsWait = false;
  }
  populateSipDetailsByFund() {
    this.financialService.getSipDetailsByFund().subscribe(
      (data: any) => {
        if (data.length > 0) {
         this.sipDetailsByFund = data;
        //console.log(this.sipDetailsByFund);
        }
      },
      (error) => {
        console.log(error);
      }
    );
  }

  populateSipDetailsByDate() {
    this.financialService.getSipDetailsByDate().subscribe(
      (data: any) => {
        if (data.length > 0) {
          this.sipDetailsByDate = data;
          //console.log(this.sipDetailsByDate);
        }
      },
      (error) => {
        console.log(error);
      }
    );
  }

  populateInvestmentReturnDetails() {
    this.financialService.getInvestmentReturnDetails().subscribe(
      (data: any) => {
        if (data.length > 0) {
          this.totalInvestment = data as InvestmentReturnDetails[];
          this.totalInvestment=this.totalInvestment.reverse();
          //console.log(this.sipDetailsByDate);
        }
      },
      (error) => {
        console.log(error);
      }
    );
  }

  populateCombinedInvestmentReturnDetails() {
    this.financialService.getCombinedInvestmentReturnDetails().subscribe(
      (data: any) => {
        if (data.length > 0) {
          this.combinedInvestment = data as InvestmentReturnDetails[];
          this.combinedInvestment=this.combinedInvestment.reverse();
          //console.log(this.sipDetailsByDate);
        }
      },
      (error) => {
        console.log(error);
      }
    );
  }
}


