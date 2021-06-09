import { Component, Input, OnInit } from '@angular/core';
import { AlertDialogClass } from '../common/alert-dialog-class';
import { financialsService } from '../service/financialsService';

@Component({
  selector: 'app-sip-entry-tracker',
  templateUrl: './sip-entry-tracker.component.html',
})
export class SipEntryTrackerComponent implements OnInit {
  IsWait: boolean;
  actions: any;
  selectedAction: string;
  profile: [];

  ngOnInit(): void {
    this.actions = ["Add SIP Details", "Save mutual fund Return", "Save provident fund", "Save Equity", "Add Debt"];

    this.populateProfiles();
  }
  constructor(private financialService: financialsService, private alertservice: AlertDialogClass) {

  }
  populateProfiles()
  {
    this.financialService.getProfileName().subscribe(
      (data: any) => {
        this.profile=data;
      },
      (error) => {
        console.log(error);

      }
    );
  }
  getInvestmentAccountName() {
    this.IsWait = true;
    this.financialService.getInvestmentAccountName().subscribe(
      (data: any) => {
        this.actions = data as string[];
      },
      (error) => {
        this.alertservice.openAlertDialog(error);
      }
    );
  }
}
