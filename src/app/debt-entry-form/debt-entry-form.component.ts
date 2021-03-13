import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { AlertDialogComponent } from '../alert-dialog/alert-dialog.component';
import { Debt } from '../model/financialdiarymodel';
import { financialsService } from '../service/financialsService';

@Component({
  selector: 'app-debt-entry-form',
  templateUrl: './debt-entry-form.component.html',
  styleUrls: ['./debt-entry-form.component.css']
})
export class DebtEntryFormComponent implements OnInit {
  account: string[];
  IsWait: boolean;
  debtRequest: Debt;

  constructor( private financialService: financialsService, private router: Router, private dialog: MatDialog,
    private snackBar: MatSnackBar) {
    this.debtRequest = new Debt();
 
  }

  ngOnInit(): void {
    this.account = ["SBI Home Loan", "HDFC PL", "Bajaj PL", "LIC Loan", "Credit Card","Umesh", "Sushil"];
    this.IsWait = false;
  }
  saveDebtEntry(){
    this.IsWait = true;
    this.financialService.saveDebtEntry(this.debtRequest.accountname, this.debtRequest.currentbalance).subscribe(
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
  refreshDebtSavingChart()
  {}
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
