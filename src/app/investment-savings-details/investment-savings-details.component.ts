import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { financialsService } from '../service/financialsService';

@Component({
  selector: 'app-investment-savings-details',
  templateUrl: './investment-savings-details.component.html',
  styleUrls: ['./investment-savings-details.component.css']
})
export class InvestmentSavingsDetailsComponent implements OnInit {
  _router: string;
  constructor(private financialService: financialsService, private router: Router) {

  }

  ngOnInit(): void {

  }
}
