import { Component,  OnInit } from '@angular/core';

@Component({
  selector: 'app-sip-entry-tracker',
  templateUrl: './sip-entry-tracker.component.html',
})
export class SipEntryTrackerComponent implements OnInit {
  IsWait: boolean;
  actions: any;
  selectedAction: string;
  ngOnInit(): void {
      this.actions = ["Add SIP Details", "Save mutual fund Return", "Save provident fund", "Save Equity", "Add Debt"];

  }
  constructor( ) {

  }
  
}
