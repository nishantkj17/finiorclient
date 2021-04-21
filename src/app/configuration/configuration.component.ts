import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { AlertDialogClass } from '../common/alert-dialog-class';
import { financialsService } from '../service/financialsService';
import { Configuration } from '../service/financialsService';

@Component({
  selector: 'app-configuration',
  templateUrl: './configuration.component.html',
  styleUrls: ['./configuration.component.css']
})
export class ConfigurationComponent implements OnInit {

  constructor(private financialService: financialsService,  private alertservice: AlertDialogClass) { }
  profile: string;
  debtAccount: string;
  investmentAccount: string;
  IsWait: boolean;
  configData: Configuration;
  displayedColumns: string[] = ['name', 'editdelete'];
  dataSource = new MatTableDataSource<any>();
  dataSourceDebtAccount= new MatTableDataSource<any>();
  ngOnInit(): void {
    this.LoadConfigurationSettings();
  }
  addProfiles()
  {
    this.IsWait = true;
    this.financialService.saveProfileSettings(this.profile).subscribe(
      (data: any) => {
        this.alertservice.openAlertDialog('Profile added successfully.');
        this.IsWait = false;
      },
      (error) => {
        console.log(error);
        this.alertservice.openAlertDialog('Errored while adding profile!');
        this.IsWait = false;
      }
    );
  }
  addDebtAccount()
  {
    this.IsWait = true;
    this.financialService.saveDebtAccountSettings(this.debtAccount).subscribe(
      (data: any) => {
        this.alertservice.openAlertDialog('Debt account added successfully.');
        this.IsWait = false;
      },
      (error) => {
        console.log(error);
        this.alertservice.openAlertDialog('Errored while adding debt account!');
        this.IsWait = false;
      }
    );
  }

  deleteProfile(item: any)
  {


  }
  LoadConfigurationSettings() {
    this.IsWait = true;
    this.financialService.getConfigurationSettings().subscribe(
      (data: any) => {
        
          this.configData = data as Configuration;
          console.log(this.configData);
          this.dataSource = new MatTableDataSource<any>(this.configData.profile);
          this.dataSourceDebtAccount= new MatTableDataSource<any>(this.configData.debtaccount);
          this.IsWait = false;
        
      },
      (error) => {
        console.log(error);
        this.IsWait = false;
      }
    );
  }
}
