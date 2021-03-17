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
    //this.account = ["SBI Home Loan", "Loan 1", "Loan 2", "Loan 3", "Loan 4","Loan 5", "Loan n"];
    this.IsWait = false;
    this.getDebtAccountName();
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

  getDebtAccountName(){
    this.IsWait = true;
    this.financialService.getDebtAccountName().subscribe(
      (data: any) => {
        this.account=data as string[];
      },
      (error)=>
      {
        this.openAlertDialog(error);
      }
    );
  }

  refreshDebtSavingChart()
  {
    this.IsWait = true;
    this.financialService.refreshDebtInvestmentForChart().subscribe(
      (data: any) => {
        this.IsWait = false;
        if(data==1)
        {this.openAlertDialog("Chart data updated successfully!");}
        else
        {this.openAlertDialog("Chart data already refrehsed for the day!");}
      },
      (error)=>
      {
        this.openAlertDialog(error);
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
