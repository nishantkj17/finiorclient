import { HttpClient } from '@angular/common/http';
import { Component, Inject, OnInit } from '@angular/core';
import { error } from 'protractor';
import { financialsService } from '../service/financialsService';
import { InvestmentDetails, InvestmentReturnDetails } from '../model/financialdiarymodel';
import { Router } from '@angular/router';
import {ConfirmationDialog} from '../confirmation-dialog/confirmation-dialog.component';
import {AlertDialogComponent} from '../alert-dialog/alert-dialog.component';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-sip-entry-tracker',
  templateUrl: './sip-entry-tracker.component.html',
})
export class SipEntryTrackerComponent implements OnInit {
  public dates: any[];
  investmentDetailsRequest: InvestmentDetails;
  investmentReturnRequest: InvestmentReturnDetails;
  investmentDetails: InvestmentDetails[];
  IsWait: boolean;
    profile: any;
  ngOnInit(): void {
     this.dates = ["1", "2", "3", "4", "5", "6",
      "7", "8", "9", "10", "11", "12", "13", "14", "15", "16",
      "17", "18", "19", "20", "21", "22", "23", "24", "25", "26",
      "27", "28"
    ];
      this.profile = ["Nishant Jha", "Ranjana Jha"];
      this.IsWait = false;
    //this.populateFundDetailsV1();
  }
  constructor( private financialService: financialsService, private router: Router, private dialog: MatDialog,
    private snackBar: MatSnackBar) {
    this.investmentDetailsRequest = new InvestmentDetails();
    this.investmentReturnRequest = new InvestmentReturnDetails();
  }
 
 
  populateFundDetailsV1() {
    this.IsWait = true;
    this.financialService.getInvestmentDetails().subscribe(
      (data: any) => {
        if (data.length > 0) {
          this.investmentDetails = data;
          this.IsWait = false;          
        }
      },
      (error) => {
        console.log(error);
        this.IsWait = false;
      }
    );
  }

  addInvestment() {
    this.IsWait = true;
    this.financialService.addInvestment(this.investmentDetailsRequest.fundName, this.investmentDetailsRequest.date, this.investmentDetailsRequest.denomination, this.investmentDetailsRequest.profile).subscribe(
      (data: any) => {
        this.openAlertDialog('Investment created successfully.');
        this.IsWait = false;
      },
      (error)=>
      {
        console.log(error);
        this.openAlertDialog('Errored while adding investment!');
        this.IsWait = false;
      }
    );
  }
  saveReturns() {
    this.IsWait = true;
    this.financialService.saveReturns(this.investmentReturnRequest.profile, this.investmentReturnRequest.investedamount, this.investmentReturnRequest.currentvalue).subscribe(
      (data: any) => {
        this.openAlertDialog('Investment returns saved successfully.');
        this.IsWait = false;
      },
      (error) => {
        console.log(error);
        this.openAlertDialog('Errored while saving investment returns!');
        this.IsWait = false;
      }
    );
  }
  saveEquityInvestment()
  {
    this.IsWait = true;
    this.financialService.saveEquityInvestment( this.investmentReturnRequest.investedamount, this.investmentReturnRequest.currentvalue).subscribe(
      (data: any) => {
        this.openAlertDialog('Equity details saved successfully.');
        this.IsWait = false;
      },
      (error) => {
        console.log(error);
        this.openAlertDialog('Errored while saving equity details!');
        this.IsWait = false;
      } 
    );
  }

  saveProvidentFund()
  {
    this.IsWait = true;
    this.financialService.saveProvidentFundDetails( this.investmentReturnRequest.investedamount, this.investmentReturnRequest.currentvalue, this.investmentReturnRequest.type, this.investmentReturnRequest.profile).subscribe(
      (data: any) => {
        this.openAlertDialog('Provident fund details saved successfully.');
        this.IsWait = false;
      },
      (error) => {
        console.log(error);
        this.openAlertDialog('Errored while saving Provident fund details!');
        this.IsWait = false;
      } 
    );
  }
  openDialog(item: InvestmentDetails) {
    const dialogRef = this.dialog.open(ConfirmationDialog,{
      data:{
        message: 'Are you sure want to delete?',
        buttonText: {
          ok: 'Yes',
          cancel: 'No'
        }
      }
    });

    dialogRef.afterClosed().subscribe((confirmed: boolean) => {
      if (confirmed) {
        this.IsWait = true;
        this.financialService.deleteSipDetails(item.id).subscribe(
          (data: any) => {
            this.openAlertDialog('SIP details deleted successfully.');
            this.IsWait = false;
          },
          (error) => {
            console.log(error);
            this.openAlertDialog('Errored while deleting SIP details!');
            this.IsWait = false;
          }
        );
      }
    });
  }
  openAlertDialog(alertMmessage:string) {
    const dialogRef = this.dialog.open(AlertDialogComponent,{
      data:{
        message: alertMmessage,
        buttonText: {
          cancel: 'Ok'
        }
      },
    });
  }
}
