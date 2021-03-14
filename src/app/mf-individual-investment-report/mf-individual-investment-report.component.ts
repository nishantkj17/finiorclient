import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Router, RouterOutlet } from '@angular/router';
import { InvestmentReturnDetails } from '../model/financialdiarymodel';
import { financialsService } from '../service/financialsService';

@Component({
  selector: 'app-mf-individual-investment-report',
  templateUrl: './mf-individual-investment-report.component.html',
  styleUrls: ['./mf-individual-investment-report.component.css']
})
export class MfIndividualInvestmentReportComponent implements OnInit {
  totalInvestment: InvestmentReturnDetails[];
  @ViewChild(RouterOutlet) outlet: RouterOutlet;
  displayedColumns: string[] = ['createddate', 'profile', 'investedamount', 'currentvalue', 'returns'];
  dataSource = new MatTableDataSource<InvestmentReturnDetails>();  
  private paginator: MatPaginator;
  private sort: MatSort;
  IsWait: boolean;
  constructor(private financialService: financialsService, private router: Router) {
   
  }

  ngOnInit(): void {
    this.populateInvestmentReturnDetails();
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

    }
  }
  populateInvestmentReturnDetails() {
    this.financialService.getInvestmentReturnDetails().subscribe(
      (data: any) => {
        if (data.length > 0) {
          this.totalInvestment = data as InvestmentReturnDetails[];
          this.totalInvestment=this.totalInvestment.reverse();
          this.dataSource = new MatTableDataSource<InvestmentReturnDetails>(this.totalInvestment);
          this.dataSource.paginator = this.paginator;
          this.dataSource.sort = this.sort;
          //console.log(this.sipDetailsByDate);
        }
      },
      (error) => {
        console.log(error);
      }
    );
  }
}
