import { Component, OnInit } from '@angular/core';
import { financialsService } from '../service/financialsService';
import { InvestmentReturnDetails } from '../model/financialdiarymodel';
import { AlertDialogClass } from '../common/alert-dialog-class';


@Component({
  selector: 'app-provident-fund-create-form',
  templateUrl: './provident-fund-create-form.component.html',
  styleUrls: ['./provident-fund-create-form.component.css']
})
export class ProvidentFundCreateFormComponent implements OnInit {
  investmentReturnRequest: InvestmentReturnDetails;
  IsWait: boolean;
  profile: any;
  constructor( private financialService: financialsService, private alertservice: AlertDialogClass) {
    this.investmentReturnRequest = new InvestmentReturnDetails();
  }

  ngOnInit(): void {
    this.profile = ["Nishant Jha", "Ranjana Jha"];
  }
  saveProvidentFund()
  {
    this.IsWait = true;
    this.financialService.saveProvidentFundDetails( this.investmentReturnRequest.investedamount, this.investmentReturnRequest.currentvalue, this.investmentReturnRequest.type, this.investmentReturnRequest.profile).subscribe(
      (data: any) => {
        this.alertservice.openAlertDialog('Provident fund details saved successfully.');
        this.IsWait = false;
      },
      (error) => {
        console.log(error);
        this.alertservice.openAlertDialog('Errored while saving Provident fund details!');
        this.IsWait = false;
      } 
    );
  }
}