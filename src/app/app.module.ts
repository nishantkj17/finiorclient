import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AnalyticsComponent } from './analytics/analytics.component';
import { InvestmentTrackerComponent } from './investment-tracker/investment-tracker.component';
import { SipEditViewComponent } from './sip-edit-view/sip-edit-view.component';
import { SipEntryTrackerComponent } from './sip-entry-tracker/sip-entry-tracker.component';
import { BrowserAnimationsModule, NoopAnimationsModule } from '@angular/platform-browser/animations';
import { SocialLoginModule,  SocialAuthServiceConfig,  GoogleLoginProvider } from 'angularx-social-login';
import { ChartsModule, ThemeService  } from 'ng2-charts';
import { HttpClientModule } from '@angular/common/http';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import {ConfirmationDialog} from './confirmation-dialog/confirmation-dialog.component';
import {AlertDialogComponent} from './alert-dialog/alert-dialog.component';
import { InvestmentSavingsDetailsComponent } from './investment-savings-details/investment-savings-details.component';
import { SipDetailsComponent } from './sip-details/sip-details.component';
import { DebtEntryFormComponent } from './debt-entry-form/debt-entry-form.component';
import {AlertDialogClass} from '../app/common/alert-dialog-class';
import {PrintPDF} from '../app/common/print-pdf';

import {MatAutocompleteModule} from '@angular/material/autocomplete';
import {MatBadgeModule} from '@angular/material/badge';
import {MatBottomSheetModule} from '@angular/material/bottom-sheet';
import {MatButtonModule} from '@angular/material/button';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import {MatCardModule} from '@angular/material/card';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatChipsModule} from '@angular/material/chips';
import {MatStepperModule} from '@angular/material/stepper';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatDialogModule} from '@angular/material/dialog';
import {MatDividerModule} from '@angular/material/divider';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatIconModule} from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input';
import {MatListModule} from '@angular/material/list';
import {MatMenuModule} from '@angular/material/menu';
import {MatNativeDateModule, MatRippleModule} from '@angular/material/core';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatRadioModule} from '@angular/material/radio';
import {MatSelectModule} from '@angular/material/select';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatSliderModule} from '@angular/material/slider';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatSortModule} from '@angular/material/sort';
import {MatTableModule} from '@angular/material/table';
import {MatTabsModule} from '@angular/material/tabs';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatTreeModule} from '@angular/material/tree';
import {OverlayModule} from '@angular/cdk/overlay';
import { MfIndividualInvestmentReportComponent } from './mf-individual-investment-report/mf-individual-investment-report.component';
import { MfCombinedInvestmentReportComponent } from './mf-combined-investment-report/mf-combined-investment-report.component';
import { SipDetailsDateComponent } from './sip-details-date/sip-details-date.component';
import { SipDetailsFundComponent } from './sip-details-fund/sip-details-fund.component';
import { AssetsDashboardComponent } from './assets-dashboard/assets-dashboard.component';
import { DebtsDashboardComponent } from './debts-dashboard/debts-dashboard.component';
import { MutualFundReturnCreateFormComponent } from './mutual-fund-return-create-form/mutual-fund-return-create-form.component';
import { EquityReturnCreateFormComponent } from './equity-return-create-form/equity-return-create-form.component';
import { ProvidentFundCreateFormComponent } from './provident-fund-create-form/provident-fund-create-form.component';
import { SipCreateFormComponent } from './sip-create-form/sip-create-form.component';
import { FundHouseIconComponent } from './common/fund-house-icon/fund-house-icon.component';
import { MatFormFieldModule } from '@angular/material/form-field';

const googleLoginOptions = {
  scope: 'nishantkj@gmail.com'
}; // https://developers.google.com/api-client-library/javascript/reference/referencedocs#gapiauth2clientconfig

let config = [
  {
    id: GoogleLoginProvider.PROVIDER_ID,
    provider: new GoogleLoginProvider("347973345405-cqfu95tek8ghqtd1iagujbthfc58uksu.apps.googleusercontent.com", googleLoginOptions)
  }
];

export function provideConfig() {
  return config;
}
@NgModule({
  declarations: [
    AppComponent,
    AnalyticsComponent,
    InvestmentTrackerComponent,
    SipEditViewComponent,
    SipEntryTrackerComponent,
    NavMenuComponent,
    ConfirmationDialog,
    AlertDialogComponent,
    InvestmentSavingsDetailsComponent,
    SipDetailsComponent,
    DebtEntryFormComponent,
    MfIndividualInvestmentReportComponent,
    MfCombinedInvestmentReportComponent,
    SipDetailsDateComponent,
    SipDetailsFundComponent,
    AssetsDashboardComponent,
    DebtsDashboardComponent,
    MutualFundReturnCreateFormComponent,
    EquityReturnCreateFormComponent,
    ProvidentFundCreateFormComponent,
    SipCreateFormComponent,
    FundHouseIconComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    NoopAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    MatProgressBarModule,
    MatTabsModule,
    SocialLoginModule,
    ReactiveFormsModule,
    ChartsModule,
    MatDialogModule,
    MatSnackBarModule,
    MatAutocompleteModule,
    MatBadgeModule,
    MatBottomSheetModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatCardModule,
    MatCheckboxModule,
    MatChipsModule,
    MatStepperModule,
    MatDatepickerModule,
    MatDialogModule,
    MatDividerModule,
    MatExpansionModule,
    MatGridListModule,
    MatIconModule,
    MatInputModule,
    MatListModule,
    MatMenuModule,
    MatNativeDateModule,
    MatPaginatorModule,
    MatProgressBarModule,
    MatProgressSpinnerModule,
    MatRadioModule,
    MatRippleModule,
    MatSelectModule,
    MatSidenavModule,
    MatSliderModule,
    MatSlideToggleModule,
    MatSnackBarModule,
    MatSortModule,
    MatTableModule,
    MatTabsModule,
    MatToolbarModule,
    MatTooltipModule,
    MatTreeModule,
    OverlayModule,
    AlertDialogClass,
    PrintPDF,
    MatFormFieldModule,
    MatInputModule,
  ],
  providers: [
    {
      provide: 'SocialAuthServiceConfig',
      useValue: {
        autoLogin: false,
        providers: [
          {
            id: GoogleLoginProvider.PROVIDER_ID,
            provider: new GoogleLoginProvider(
              '347973345405-cqfu95tek8ghqtd1iagujbthfc58uksu.apps.googleusercontent.com'
            )
          }
        ]
      } as SocialAuthServiceConfig,
    },
    ThemeService 
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
