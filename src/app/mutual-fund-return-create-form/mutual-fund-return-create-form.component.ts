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
  selector: 'app-mutual-fund-return-create-form',
  templateUrl: './mutual-fund-return-create-form.component.html',
  styleUrls: ['./mutual-fund-return-create-form.component.css']
})
export class MutualFundReturnCreateFormComponent implements OnInit {
  investmentReturnRequest: InvestmentReturnDetails;
  IsWait: boolean;
    profile: any;
    ngOnInit(): void {
       this.profile = ["Nishant Jha", "Ranjana Jha"];
       this.IsWait = false;
   }
   constructor( private financialService: financialsService, private router: Router, private dialog: MatDialog,
     private snackBar: MatSnackBar) {
     this.investmentReturnRequest = new InvestmentReturnDetails();
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
