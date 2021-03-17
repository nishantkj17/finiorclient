import { Component, OnInit } from '@angular/core';
import { financialsService } from '../service/financialsService';

@Component({
  selector: 'app-landing-dashboard',
  templateUrl: './landing-dashboard.component.html',
  styleUrls: ['./landing-dashboard.component.css']
})
export class LandingDashboardComponent implements OnInit {

  constructor(private financialService: financialsService) {  
  }

  ngOnInit(): void {
  }

}
