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
  selector: 'app-equity-return-create-form',
  templateUrl: './equity-return-create-form.component.html',
  styleUrls: ['./equity-return-create-form.component.css']
})
export class EquityReturnCreateFormComponent implements OnInit {
  public dates: any[];
  investmentReturnRequest: InvestmentReturnDetails;
  IsWait: boolean;
    profile: any;
    constructor( private financialService: financialsService, private router: Router, private dialog: MatDialog,
      private snackBar: MatSnackBar) {
      this.investmentReturnRequest = new InvestmentReturnDetails();
    }

  ngOnInit(): void {
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
