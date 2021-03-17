import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Router, RouterOutlet } from '@angular/router';
import { InvestmentDetails } from '../model/financialdiarymodel';
import { financialsService } from '../service/financialsService';

@Component({
  selector: 'app-sip-details-fund',
  templateUrl: './sip-details-fund.component.html',
  styleUrls: ['./sip-details-fund.component.css']
})
export class SipDetailsFundComponent implements OnInit {
  sipDetailsByFund: InvestmentDetails[];
  @ViewChild(RouterOutlet) outlet: RouterOutlet;
  displayedColumns: string[] = ['fundName', 'denomination'];
  dataSource = new MatTableDataSource<InvestmentDetails>();
  private paginator: MatPaginator;
  private sort: MatSort;
  IsWait: boolean;
  constructor(private financialService: financialsService, private router: Router) {

  }

  ngOnInit(): void {
    this.populateSipDetailsByFund();
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
  populateSipDetailsByFund() {
    this.financialService.getSipDetailsByFund().subscribe(
      (data: any) => {
        if (data.length > 0) {
          this.sipDetailsByFund = data as InvestmentDetails[];
          this.dataSource = new MatTableDataSource<InvestmentDetails>(this.sipDetailsByFund);
          this.dataSource.paginator = this.paginator;
          this.dataSource.sort = this.sort;
          //console.log(this.sipDetailsByFund);
        }
      },
      (error) => {
        console.log(error);
      }
    );
  }
}
