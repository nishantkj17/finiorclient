import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { AlertDialogClass } from '../common/alert-dialog-class';
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

  constructor(private financialService: financialsService, private alertservice: AlertDialogClass) {
    this.debtRequest = new Debt();
  }

  ngOnInit(): void {
    this.IsWait = false;
    this.getDebtAccountName();
  }
  saveDebtEntry() {
    this.IsWait = true;
    this.financialService.saveDebtEntry(this.debtRequest.accountname, this.debtRequest.currentbalance).subscribe(
      (data: any) => {
        this.alertservice.openAlertDialog('Investment created successfully.');
        this.IsWait = false;
      },
      (error) => {
        console.log(error);
        this.alertservice.openAlertDialog('Errored while adding investment!');
        this.IsWait = false;
      }
    );
  }

  getDebtAccountName() {
    this.IsWait = true;
    this.financialService.getDebtAccountName().subscribe(
      (data: any) => {
        this.account = data as string[];
      },
      (error) => {
        this.alertservice.openAlertDialog(error);
      }
    );
  }

  refreshDebtSavingChart() {
    this.IsWait = true;
    this.financialService.refreshDebtInvestmentForChart().subscribe(
      (data: any) => {
        this.IsWait = false;
        if (data == 1) { this.alertservice.openAlertDialog("Chart data updated successfully!"); }
        else { this.alertservice.openAlertDialog("Chart data already updated for the day!"); }
      },
      (error) => {
        this.alertservice.openAlertDialog(error);
      }
    );
  }
}
