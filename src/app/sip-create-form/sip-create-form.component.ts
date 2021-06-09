import { Component, OnInit, Input } from '@angular/core';
import { financialsService } from '../service/financialsService';
import { InvestmentDetails, InvestmentReturnDetails } from '../service/financialsService';
import { AlertDialogClass } from '../common/alert-dialog-class';

@Component({
  selector: 'app-sip-create-form',
  templateUrl: './sip-create-form.component.html',
  styleUrls: ['./sip-create-form.component.css']
})
export class SipCreateFormComponent implements OnInit {

  public dates: any[];
  investmentDetailsRequest: InvestmentDetails;
  investmentReturnRequest: InvestmentReturnDetails;
  investmentDetails: InvestmentDetails[];
  IsWait: boolean;
  @Input() profile: [];
  ngOnInit(): void {
    this.dates = ["1", "2", "3", "4", "5", "6",
      "7", "8", "9", "10", "11", "12", "13", "14", "15", "16",
      "17", "18", "19", "20", "21", "22", "23", "24", "25", "26",
      "27", "28"
    ];
    this.IsWait = false;

  }
  constructor(private financialService: financialsService, private alertservice: AlertDialogClass) {
    this.investmentDetailsRequest = new InvestmentDetails();
    this.investmentReturnRequest = new InvestmentReturnDetails();
    
  }

  addInvestment() {
    this.IsWait = true;
    this.financialService.addInvestment(this.investmentDetailsRequest.fundName, this.investmentDetailsRequest.date, this.investmentDetailsRequest.denomination, this.investmentDetailsRequest.profile).subscribe(
      (data: any) => {
        this.alertservice.openAlertDialog('SIP added successfully.');
        this.IsWait = false;
      },
      (error) => {
        console.log(error);
        this.alertservice.openAlertDialog('Errored while adding SIP!');
        this.IsWait = false;
      }
    );
  }
}
