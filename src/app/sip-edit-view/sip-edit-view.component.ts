import { Component, Inject } from '@angular/core';
import { AlertDialogClass } from '../common/alert-dialog-class';
import { InvestmentDetails } from '../service/financialsService';
import { financialsService } from '../service/financialsService';
import {Location} from '@angular/common';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

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

  constructor(public dialogRef: MatDialogRef<SipEditViewComponent>,@Inject(MAT_DIALOG_DATA) public data: DialogData,private financialService: financialsService, private alertservice: AlertDialogClass, private _location: Location) {
    this.investmentDetailsRequest = new InvestmentDetails();
    this.investmentDetails=data.name as InvestmentDetails;
  }

  ngOnInit(): void {
    this.dates = ["1", "2", "3", "4", "5", "6",
      "7", "8", "9", "10", "11", "12", "13", "14", "15", "16",
      "17", "18", "19", "20", "21", "22", "23", "24", "25", "26",
      "27", "28"
    ];
    this.profile = ["Nishant Jha", "Ranjana Jha"];
  }

  updateInvestment() {
    this.IsWait = true;
    this.financialService.updateSipDetails(this.investmentDetails).subscribe(
      (data: any) => {
        this.alertservice.openAlertDialog('SIP details updated successfully');
        this.IsWait = false;
      },
      (error) => {
        this.alertservice.openAlertDialog(error);
      }
    );
  }

  populateFundDetails() {
    this.financialService.getFilteredInvestmentDetails(this.investmentDetailsRequest.date, this.investmentDetailsRequest.profile).subscribe(
      (data: any) => {
        if (data.length > 0) {
          this.investmentDetails = data;
        }
      },
      (error) => {
        this.alertservice.openAlertDialog(error);
      }
    );
  }

  backClicked() {
    this._location.back();
  }
  
  onNoClick(): void {
    this.dialogRef.close();
  }
}
export interface DialogData {
  name: InvestmentDetails;
}
