import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AnalyticsComponent } from './analytics/analytics.component';
import { DebtEntryFormComponent } from './debt-entry-form/debt-entry-form.component';
import { InvestmentSavingsDetailsComponent } from './investment-savings-details/investment-savings-details.component';
import { InvestmentTrackerComponent } from './investment-tracker/investment-tracker.component';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { SipEditViewComponent } from './sip-edit-view/sip-edit-view.component';
import { SipEntryTrackerComponent } from './sip-entry-tracker/sip-entry-tracker.component';


const routes: Routes = [
  {
      path: 'analytics',
      component: AnalyticsComponent
  },
  {
    path: 'investmenttracker',
    component: InvestmentTrackerComponent
},
{
  path: 'sipeditview',
  component: SipEditViewComponent
},
{
  path: 'sipentrytracker',
  component: SipEntryTrackerComponent
},
{
  path: 'navmenu',
  component: NavMenuComponent
},
{
  path: 'dashboard',
  component: InvestmentSavingsDetailsComponent
},
{
  path: 'debtentryform',
  component: DebtEntryFormComponent
},
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
