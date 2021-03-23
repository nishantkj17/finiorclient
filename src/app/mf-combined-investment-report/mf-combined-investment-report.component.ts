import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Router, RouterOutlet } from '@angular/router';
import { InvestmentReturnDetails } from '../model/financialdiarymodel';
import { financialsService } from '../service/financialsService';
@Component({
  selector: 'app-mf-combined-investment-report',
  templateUrl: './mf-combined-investment-report.component.html',
  styleUrls: ['./mf-combined-investment-report.component.css']
})
export class MfCombinedInvestmentReportComponent implements OnInit {

  combinedInvestment: InvestmentReturnDetails[];
  @ViewChild(RouterOutlet) outlet: RouterOutlet;
  displayedColumns: string[] = ['createddate', 'investedamount', 'currentvalue', 'returns'];
  dataSource = new MatTableDataSource<InvestmentReturnDetails>();
  private paginator: MatPaginator;
  private sort: MatSort;
  IsWait: boolean;
  paginationNumber: number[]=[5, 10, 20];
  constructor(private financialService: financialsService, private router: Router) {

  }

  ngOnInit(): void {
    this.IsWait = true;
    this.populateCombinedInvestmentReturnDetails();
    this.IsWait = false;
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
  populateCombinedInvestmentReturnDetails() {
    this.financialService.getCombinedInvestmentReturnDetails().subscribe(
      (data: any) => {
        if (data.length > 0) {
          this.combinedInvestment = data as InvestmentReturnDetails[];
          this.combinedInvestment = this.combinedInvestment.reverse();
          this.dataSource = new MatTableDataSource<InvestmentReturnDetails>(this.combinedInvestment);
          this.dataSource.paginator = this.paginator;
          this.dataSource.sort = this.sort;
          this.paginationNumber.push(this.combinedInvestment.length);
        }
      },
      (error) => {
        console.log(error);
      }
    );
  }
}
