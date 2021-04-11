import { Component, OnInit } from '@angular/core';
import { financialsService } from '../service/financialsService';
import { InvestmentReturnDetails } from '../service/financialsService';
import { AlertDialogClass } from '../common/alert-dialog-class';

@Component({
  selector: 'app-equity-return-create-form',
  templateUrl: './equity-return-create-form.component.html',
  styleUrls: ['./equity-return-create-form.component.css']
})
export class EquityReturnCreateFormComponent implements OnInit {
  public dates: any[];
  investmentReturnRequest: InvestmentReturnDetails;
  IsWait: boolean;
  profile: any;
  constructor(private financialService: financialsService, private alertservice: AlertDialogClass) {
    this.investmentReturnRequest = new InvestmentReturnDetails();
  }

  ngOnInit(): void {
  }
  saveEquityInvestment() {
    this.IsWait = true;
    this.financialService.saveEquityInvestment(this.investmentReturnRequest.investedamount, this.investmentReturnRequest.currentvalue).subscribe(
      (data: any) => {
        this.alertservice.openAlertDialog('Equity details saved successfully.');
        this.IsWait = false;
      },
      (error) => {
        console.log(error);
        this.alertservice.openAlertDialog('Errored while saving equity details!');
        this.IsWait = false;
      }
    );
  }
}
