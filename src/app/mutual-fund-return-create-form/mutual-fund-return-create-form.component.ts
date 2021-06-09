import { Component, OnInit, Input } from '@angular/core';
import { financialsService } from '../service/financialsService';
import { InvestmentReturnDetails } from '../service/financialsService';
import { AlertDialogClass } from '../common/alert-dialog-class';

@Component({
  selector: 'app-mutual-fund-return-create-form',
  templateUrl: './mutual-fund-return-create-form.component.html',
  styleUrls: ['./mutual-fund-return-create-form.component.css']
})
export class MutualFundReturnCreateFormComponent implements OnInit {
  investmentReturnRequest: InvestmentReturnDetails;
  IsWait: boolean;
  @Input() profile: [];
  ngOnInit(): void {

    this.IsWait = false;
  }
  constructor(private financialService: financialsService, private alertservice: AlertDialogClass) {
    this.investmentReturnRequest = new InvestmentReturnDetails();
  }
  saveReturns() {
    this.IsWait = true;
    this.financialService.saveReturns(this.investmentReturnRequest.profile, this.investmentReturnRequest.investedamount, this.investmentReturnRequest.currentvalue).subscribe(
      (data: any) => {
        this.alertservice.openAlertDialog('Investment returns saved successfully.');
        this.IsWait = false;
      },
      (error) => {
        console.log(error);
        this.alertservice.openAlertDialog('Errored while saving investment returns!');
        this.IsWait = false;
      }
    );
  }
}
