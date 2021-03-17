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
  selector: 'app-provident-fund-create-form',
  templateUrl: './provident-fund-create-form.component.html',
  styleUrls: ['./provident-fund-create-form.component.css']
})
export class ProvidentFundCreateFormComponent implements OnInit {
  investmentReturnRequest: InvestmentReturnDetails;
  IsWait: boolean;
  profile: any;
  constructor( private financialService: financialsService, private router: Router, private dialog: MatDialog,
    private snackBar: MatSnackBar) {
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