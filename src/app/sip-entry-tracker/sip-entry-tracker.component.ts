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
  IsWait: boolean;
  actions: any;
  selectedAction: string;
  ngOnInit(): void {
      this.actions = ["Add SIP Details", "Save mutual fund Return", "Save provident fund", "Save Equity", "Add Debt"];

  }
  constructor( private financialService: financialsService, private router: Router, private dialog: MatDialog,
    private snackBar: MatSnackBar) {

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
