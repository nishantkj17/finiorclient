import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { AlertDialogComponent } from '../alert-dialog/alert-dialog.component';
import { ConfirmationDialog } from '../confirmation-dialog/confirmation-dialog.component';
import { InvestmentDetails } from '../service/financialsService';
import { financialsService } from '../service/financialsService';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { SipEditViewComponent } from '../sip-edit-view/sip-edit-view.component';

@Component({
  selector: 'app-sip-details',
  templateUrl: './sip-details.component.html',
  styleUrls: ['./sip-details.component.css']
})
export class SipDetailsComponent implements OnInit {
  investmentDetailsSearchRequest: InvestmentDetails;
  investmentDetails: InvestmentDetails[];
  IsWait: boolean;
  profile: string[];
  dates: string[];
  paginationNumber: number[]=[5, 10, 20];
  displayedColumns: string[] = ['fundName', 'date', 'denomination', 'profile', 'editdelete'];
  dataSource = new MatTableDataSource<InvestmentDetails>();
  private paginator: MatPaginator;
  private sort: MatSort;
  dsp:string='assets/images/dsp.png';
  cumulativeSIP: number;
  
  constructor(private financialService: financialsService, private router: Router, private dialog: MatDialog,
    private snackBar: MatSnackBar) {
    this.investmentDetailsSearchRequest = new InvestmentDetails();
  }

  ngOnInit(): void {
    this.profile = ["Nishant Jha", "Ranjana Jha"];
    this.dates = ["1", "2", "3", "4", "5", "6",
      "7", "8", "9", "10", "11", "12", "13", "14", "15", "16",
      "17", "18", "19", "20", "21", "22", "23", "24", "25", "26",
      "27", "28"
    ];

  }
  ngAfterViewInit() {

  }

  public doFilter = (value: string) => {
    this.dataSource.filter = value.trim().toLocaleLowerCase();
  }
  @ViewChild(MatSort) set matSort(ms: MatSort) {
    this.sort = ms;
    this.setDataSourceAttributes();
  }

  @ViewChild(MatPaginator) set matPaginator(mp: MatPaginator) {
    this.paginator = mp;
    this.setDataSourceAttributes();
  }

  setDataSourceAttributes() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;

    if (this.paginator && this.sort) {
      //this.applyFilter('');
    }
  }
  populateFundDetails() {
    this.IsWait = true;
    this.financialService.getFilteredInvestmentDetails(this.investmentDetailsSearchRequest.date, this.investmentDetailsSearchRequest.profile).subscribe(
      (data: any) => {
        if (data.length > 0) {
          this.investmentDetails = data as InvestmentDetails[];
          this.dataSource = new MatTableDataSource<InvestmentDetails>(this.investmentDetails);
          this.dataSource.paginator = this.paginator;
          this.dataSource.sort = this.sort;
          this.paginationNumber.push(this.investmentDetails.length);
          this.IsWait = false;
          this.cumulativeSIP=0;
          this.investmentDetails.forEach(element => {
            console.log(element.denomination);
            this.cumulativeSIP += Number(element.denomination);
          });
        }
      },
      (error) => {
        console.log(error);
        this.IsWait = false;
      }
    );
  }

  redirect(item: InvestmentDetails) {
    this.router.navigate(['sipeditview'], {
      state: item,
    });
  }
  openDialogToEdit(item: InvestmentDetails): void {
    const dialogRef = this.dialog.open(SipEditViewComponent, {
      width: '700px',
      data: {name: item}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      //this.animal = result;
    });
  }
  deleteInvestment(item: InvestmentDetails) {
    this.openDialog(item);
  }

  openDialog(item: InvestmentDetails) {
    const dialogRef = this.dialog.open(ConfirmationDialog, {
      data: {
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
  openAlertDialog(alertMmessage: string) {
    const dialogRef = this.dialog.open(AlertDialogComponent, {
      data: {
        message: alertMmessage,
        buttonText: {
          cancel: 'Ok'
        }
      },
    });
  }
}
