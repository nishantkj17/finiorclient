import { Component } from '@angular/core';
import { InvestmentDetails } from '../model/financialdiarymodel';
import { financialsService } from '../service/financialsService';

@Component({
  selector: 'app-sip-edit-view-component',
  templateUrl: './sip-edit-view.component.html'
})
export class SipEditViewComponent {
  public currentCount = 0;
   public profile: string[];
   public dates: string[];
   IsWait: boolean;
  investmentDetailsRequest: InvestmentDetails;
  investmentDetails: InvestmentDetails;
  public incrementCounter() {
    this.currentCount++;
  }

  constructor(private financialService: financialsService) {
    this.investmentDetailsRequest = new InvestmentDetails();
  }
  ngOnInit(): void {
    this.dates = ["1", "2", "3", "4", "5", "6",
      "7", "8", "9", "10", "11", "12", "13", "14", "15", "16",
      "17", "18", "19", "20", "21", "22", "23", "24", "25", "26",
      "27", "28"
    ];
    this.profile = ["Nishant Jha", "Ranjana Jha"];
    this.investmentDetails = history.state as InvestmentDetails;
    //console.log(this.investmentDetails);
  }
  updateInvestment() {
    this.IsWait = true;
    this.financialService.updateSipDetails(this.investmentDetails).subscribe(
      (data: any) => {
          alert('SIP details updated successfully');
          this.IsWait = false;
      },
      (error) => {
        console.log(error);
      }
    );
  }
  populateFundDetails() {
    this.financialService.getFilteredInvestmentDetails(this.investmentDetailsRequest.date, this.investmentDetailsRequest.profile).subscribe(
      (data: any) => {
        if (data.length > 0) {
          this.investmentDetails = data;
          //console.log(this.investmentDetails);

        }
      },
      (error) => {
        console.log(error);
      }
    );
  }
}
