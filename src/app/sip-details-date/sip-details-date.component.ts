import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Router, RouterOutlet } from '@angular/router';
import { InvestmentDetails, InvestmentReturnDetails } from '../model/financialdiarymodel';
import { financialsService } from '../service/financialsService';

@Component({
  selector: 'app-sip-details-date',
  templateUrl: './sip-details-date.component.html',
  styleUrls: ['./sip-details-date.component.css']
})
export class SipDetailsDateComponent implements OnInit {
  sipDetailsByDate: InvestmentDetails[];
  @ViewChild(RouterOutlet) outlet: RouterOutlet;
  displayedColumns: string[] = ['date', 'denomination'];
  dataSource = new MatTableDataSource<InvestmentDetails>();
  private paginator: MatPaginator;
  private sort: MatSort;
  IsWait: boolean;
  constructor(private financialService: financialsService, private router: Router) {

  }

  ngOnInit(): void {
    this.IsWait = true;
    this.populateSipDetailsByDate();
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
  populateSipDetailsByDate() {
    this.financialService.getSipDetailsByDate().subscribe(
      (data: any) => {
        if (data.length > 0) {
          this.sipDetailsByDate = data as InvestmentDetails[];
          this.dataSource = new MatTableDataSource<InvestmentDetails>(this.sipDetailsByDate);
          this.dataSource.paginator = this.paginator;
          this.dataSource.sort = this.sort;
        }
      },
      (error) => {
        console.log(error);
      }
    );
  }
}
