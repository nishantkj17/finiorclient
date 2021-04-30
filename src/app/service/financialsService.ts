import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { of, Observable, BehaviorSubject, throwError } from 'rxjs';
import { tap, catchError, map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
//import { InvestmentDetails, Returns, Debt, DashboardAssetDetails } from '../model/financialdiarymodel';

@Injectable({
  providedIn: 'root'
})
export class financialsService {
  baseURL: string;
  //user: string;
  validLogin: boolean;
  //token: string | string[];
  constructor(private http: HttpClient) {
    this.baseURL = environment.baseUrl;
  }

  getInvestmentDetails(): Observable<any> {
    let user = localStorage.getItem('user');
    const params = new HttpParams()
      .set('user', user);

    const headers = new HttpHeaders()
      .set('Authorization', localStorage.getItem('jwt'))
      .set('User', user)
      .set('Content-Type', 'application/json');

    return this.http.get<InvestmentDetails[]>(this.baseURL + 'FinancialDiary/getinvestmentdetails', { params, headers })
      .pipe(
        //tap(data => console.log(JSON.stringify(data))),
      );
  }

  getSipDetailsByFund(): Observable<any> {
    let user = localStorage.getItem('user');
    const params = new HttpParams()
      .set('user', user);

    const headers = new HttpHeaders()
      .set('Authorization', localStorage.getItem('jwt'))
      .set('User', user)
      .set('Content-Type', 'application/json');

    return this.http.get<any>(this.baseURL + 'FinancialDiary/gettotalsipdetailsbyfund', { params, headers })
      .pipe(
        //tap(data => console.log(JSON.stringify(data))),
      );
  }

  getSipDetailsByDate(): Observable<any> {
    let user = localStorage.getItem('user');
    const params = new HttpParams()
      .set('user', user);

    const headers = new HttpHeaders()
      .set('Authorization', localStorage.getItem('jwt'))
      .set('User', user)
      .set('Content-Type', 'application/json');

    return this.http.get<any>(this.baseURL + 'FinancialDiary/gettotalsipdetailsbydate', { params, headers })
      .pipe(
        //tap(data => console.log(JSON.stringify(data))),
      );
  }


  getFilteredInvestmentDetails(date: string, profile: string): Observable<any> {
    let user = localStorage.getItem('user');

    const params = new HttpParams()
      .set('date', date)
      .set('profile', profile)
      .set('user', user);

    const headers = new HttpHeaders()
      .set('Authorization', localStorage.getItem('jwt'))
      .set('User', user)
      .set('Content-Type', 'application/json');

    return this.http.get<InvestmentDetails[]>(this.baseURL + 'FinancialDiary/getfilteredinvestmentdetails', { params, headers })
      .pipe(
        //tap(data => console.log(JSON.stringify(data))),
      );
  }

  addInvestment(fundName: string, date: string, denomination: string, profile: string): Observable<any> {
    let user = localStorage.getItem('user');
    var formData: any = new FormData();
    formData.append("fundName", fundName);
    formData.append("date", date);
    formData.append("denomination", denomination);
    formData.append("profile", profile);
    formData.append("user", user);

    const headers = new HttpHeaders()
      .set('Authorization', localStorage.getItem('jwt'))
      .set('User', user);

    return this.http.post<any>(this.baseURL + 'FinancialDiary/addinvestment', formData, { headers: headers })
      .pipe(
        //tap(data => console.log(JSON.stringify(data))),
      );
  }

  saveReturns(profile: string, investedamount: number, currentvalue: number): Observable<any> {
    let user = localStorage.getItem('user');
    var formData: any = new FormData();
    formData.append("profile", profile);
    formData.append("investedamount", investedamount);
    formData.append("currentvalue", currentvalue);
    formData.append("user", user);

    const headers = new HttpHeaders()
      .set('Authorization', localStorage.getItem('jwt'))
      .set('User', user);

    return this.http.post<any>(this.baseURL + 'FinancialDiary/savereturns', formData, { headers: headers })
      .pipe(
        //tap(data => console.log(JSON.stringify(data))),
      );
  }

  getInvestmentReturnDetails(): Observable<any> {
    let user = localStorage.getItem('user');
    const headers = new HttpHeaders()
      .set('Authorization', localStorage.getItem('jwt'))
      .set('User', user)
      .set('Content-Type', 'application/json');

    const params = new HttpParams()
      .set('user', user);

    return this.http.get<InvestmentDetails[]>(this.baseURL + 'FinancialDiary/getreturns', { params, headers })
      .pipe(
        //     //tap(data => console.log(JSON.stringify(data))),
      );
  }

  getCombinedInvestmentReturnDetails(): Observable<any> {
    let user = localStorage.getItem('user');
    const params = new HttpParams()
      .set('user', user);

    const headers = new HttpHeaders()
      .set('Authorization', localStorage.getItem('jwt'))
      .set('User', user)
      .set('Content-Type', 'application/json');

    return this.http.get<InvestmentDetails[]>(this.baseURL + 'FinancialDiary/getcombinedreturns', { params, headers })
      .pipe(
        //tap(data => console.log(JSON.stringify(data))),
      );
  }

  updateSipDetails(item: InvestmentDetails): Observable<any> {
    let user = localStorage.getItem('user');
    var formData: any = new FormData();
    formData.append("fundName", item.fundName);
    formData.append("date", item.date);
    formData.append("denomination", item.denomination);
    formData.append("profile", item.profile);
    formData.append("id", item.id);
    formData.append("user", user);

    const headers = new HttpHeaders()
      .set('Authorization', localStorage.getItem('jwt'))
      .set('User', user);

    return this.http.post<any>(this.baseURL + 'FinancialDiary/updatesipdetails', formData, { headers: headers })
      .pipe(
        //tap(data => console.log(JSON.stringify(data))),
      );
  }

  public deleteSipDetails(id: string): Observable<any> {
    let user = localStorage.getItem('user');
    const params = new HttpParams()
      .set('id', id)
      .set('user', user);

    const headers = new HttpHeaders()
      .set('Authorization', localStorage.getItem('jwt'))
      .set('User', user)
      .set('Content-Type', 'application/json');

    return this.http.get<any>(this.baseURL + 'FinancialDiary/deletesipdetails', { params, headers })
      .pipe(
        //tap(data => console.log(JSON.stringify(data))),
      );
  }

  getCombinedInvestmentReturnDataForChart(): Observable<any> {
    let user = localStorage.getItem('user');
    const params = new HttpParams()
      .set('user', user);

    const headers = new HttpHeaders()
      .set('Authorization', localStorage.getItem('jwt'))
      .set('User', user)
      .set('Content-Type', 'application/json');

    return this.http.get<Returns[]>(this.baseURL + 'FinancialDiary/getinvestmentdataforchart', { params, headers })
      .pipe(
        //tap(data => console.log(JSON.stringify(data))),
      );
  }

  getIndividualInvestmentReturnDataForChart(): Observable<any> {
    let user = localStorage.getItem('user');
    const params = new HttpParams()
      .set('user', user);

    const headers = new HttpHeaders()
      .set('Authorization', localStorage.getItem('jwt'))
      .set('User', user)
      .set('Content-Type', 'application/json');

    return this.http.get<Returns[]>(this.baseURL + 'FinancialDiary/getindividualinvestmentdataforchart', { params, headers })
      .pipe(
        //tap(data => console.log(JSON.stringify(data))),
      );
  }

  getEquityInvestmentReturnDataForChart(): Observable<any> {
    let user = localStorage.getItem('user');
    const params = new HttpParams()
      .set('user', user);

    const headers = new HttpHeaders()
      .set('Authorization', localStorage.getItem('jwt'))
      .set('User', user)
      .set('Content-Type', 'application/json');

    return this.http.get<Returns[]>(this.baseURL + 'FinancialDiary/getequityinvestmentreturndata', { params, headers })
      .pipe(
        //tap(data => console.log(JSON.stringify(data))),
      );
  }

  getPFReturnForChart(): Observable<any> {
    let user = localStorage.getItem('user');
    const params = new HttpParams()
      .set('user', user);

    const headers = new HttpHeaders()
      .set('Authorization', localStorage.getItem('jwt'))
      .set('User', user)
      .set('Content-Type', 'application/json');

    return this.http.get<Returns[]>(this.baseURL + 'FinancialDiary/getpfreturndataforchart', { params, headers })
      .pipe(
        //tap(data => console.log(JSON.stringify(data))),
      );
  }

  getAssetsDashboardData(): Observable<any> {
    let user = localStorage.getItem('user');
    const params = new HttpParams()
      .set('user', user);

    const headers = new HttpHeaders()
      .set('Authorization', localStorage.getItem('jwt'))
      .set('User', user)
      .set('Content-Type', 'application/json');

    return this.http.get<DashboardAssetDetails[]>(this.baseURL + 'FinancialDiary/getassetsdashboarddata', { params, headers })
      .pipe(
        //tap(data => console.log(JSON.stringify(data))),
      );
  }

  getDebtsDashboardData(): Observable<any> {
    let user = localStorage.getItem('user');
    const params = new HttpParams()
      .set('user', user);

    const headers = new HttpHeaders()
      .set('Authorization', localStorage.getItem('jwt'))
      .set('User', user)
      .set('Content-Type', 'application/json');

    return this.http.get<Debt[]>(this.baseURL + 'FinancialDiary/getdebtsdashboarddata', { params, headers })
      .pipe(
        //tap(data => console.log(JSON.stringify(data))),
      );
  }

  refreshDebtInvestmentForChart(): Observable<any> {
    let user = localStorage.getItem('user');
    const params = new HttpParams()
      .set('user', user);

    const headers = new HttpHeaders()
      .set('Authorization', localStorage.getItem('jwt'))
      .set('User', user)
      .set('Content-Type', 'application/json');

    return this.http.get<any>(this.baseURL + 'FinancialDiary/refreshdebtinvestmentforchart', { params, headers })
      .pipe(
        //tap(data => console.log(JSON.stringify(data))),
      );
  }

  saveEquityInvestment(investedamount: number, currentvalue: number): Observable<any> {
    let user = localStorage.getItem('user');
    var formData: any = new FormData();
    formData.append("investedamount", investedamount);
    formData.append("currentvalue", currentvalue);
    formData.append("user", user);

    const headers = new HttpHeaders()
      .set('Authorization', localStorage.getItem('jwt'))
      .set('User', user);

    return this.http.post<any>(this.baseURL + 'FinancialDiary/saveequityinvestmentreturndata', formData, { headers: headers })
      .pipe(
        //tap(data => console.log(JSON.stringify(data))),
      );
  }

  saveProvidentFundDetails(epfoPrimaryBalance: number, ppfBalance: number, type: string, profile: string): Observable<any> {
    let user = localStorage.getItem('user');
    var formData: any = new FormData();
    formData.append("epfoPrimaryBalance", epfoPrimaryBalance);
    formData.append("ppfBalance", ppfBalance);
    formData.append("type", type);
    formData.append("profile", profile);
    formData.append("user", user);

    const headers = new HttpHeaders()
      .set('Authorization', localStorage.getItem('jwt'))
      .set('User', user);

    return this.http.post<any>(this.baseURL + 'FinancialDiary/saveprovidentfunddetails', formData, { headers: headers })
      .pipe(
        //tap(data => console.log(JSON.stringify(data))),
      );
  }

  saveDebtEntry(accountname: string, currentbalance: number): Observable<any> {
    let user = localStorage.getItem('user');
    var formData: any = new FormData();
    formData.append("accountname", accountname);
    formData.append("currentbalance", currentbalance);
    formData.append("user", user);

    const headers = new HttpHeaders()
      .set('Authorization', localStorage.getItem('jwt'))
      .set('User', user);

    return this.http.post<any>(this.baseURL + 'FinancialDiary/adddebt', formData, { headers: headers })
      .pipe(
        //tap(data => console.log(JSON.stringify(data))),
      );
  }

  getDebtAccountName(): Observable<any> {
    let user = localStorage.getItem('user');
    const params = new HttpParams()
      .set('user', user);

    const headers = new HttpHeaders()
      .set('Authorization', localStorage.getItem('jwt'))
      .set('User', user)
      .set('Content-Type', 'application/json');

    return this.http.get<string[]>(this.baseURL + 'FinancialDiary/getdebtaccountname', { params, headers })
      .pipe(
        //tap(data => console.log(JSON.stringify(data))),
      );
  }

  getInvestmentAccountName(): Observable<any> {
    let user = localStorage.getItem('user');
    const params = new HttpParams()
      .set('user', user);

    const headers = new HttpHeaders()
      .set('Authorization', localStorage.getItem('jwt'))
      .set('User', user)
      .set('Content-Type', 'application/json');

    return this.http.get<string[]>(this.baseURL + 'FinancialDiary/getinvestmentaccountname', { params, headers })
      .pipe(
        //tap(data => console.log(JSON.stringify(data))),
      );
  }

  getDebtInvestmentForChart(): Observable<any> {
    let user = localStorage.getItem('user');
    const params = new HttpParams()
      .set('user', user);

    const headers = new HttpHeaders()
      .set('Authorization', localStorage.getItem('jwt'))
      .set('User', user)
      .set('Content-Type', 'application/json');

    return this.http.get<Returns[]>(this.baseURL + 'FinancialDiary/getdebtinvestmentforchart', { params, headers })
      .pipe(
        //tap(data => console.log(JSON.stringify(data))),
      );
  }

  getConfigurationSettings(): Observable<any> {
    let user = localStorage.getItem('user');
    const params = new HttpParams()
      .set('user', user);

    const headers = new HttpHeaders()
      .set('Authorization', localStorage.getItem('jwt'))
      .set('User', user)
      .set('Content-Type', 'application/json');

    return this.http.get<Configuration>(this.baseURL + 'FinancialDiary/getconfigurationsettings', { params, headers })
      .pipe(
        //tap(data => console.log(JSON.stringify(data))),
      );
  }

  saveProfileSettings(profiles: string): Observable<any> {
    let user = localStorage.getItem('user');
    var formData: any = new FormData();
    formData.append("profiles", profiles);
    formData.append("user", user);

    const headers = new HttpHeaders()
      .set('Authorization', localStorage.getItem('jwt'))
      .set('User', user);

    return this.http.post<any>(this.baseURL + 'FinancialDiary/saveprofilessettings', formData, { headers: headers })
      .pipe(
        //tap(data => console.log(JSON.stringify(data))),
      );
  }

  saveDebtAccountSettings(debtaccount: string): Observable<any> {
    let user = localStorage.getItem('user');
    var formData: any = new FormData();
    formData.append("debtaccount", debtaccount);
    formData.append("user", user);

    const headers = new HttpHeaders()
      .set('Authorization', localStorage.getItem('jwt'))
      .set('User', user);

    return this.http.post<any>(this.baseURL + 'FinancialDiary/savedebtaccountsettings', formData, { headers: headers })
      .pipe(
        //tap(data => console.log(JSON.stringify(data))),
      );
  }

  saveInvestmentAccountSettings(investmentaccount: string): Observable<any> {
    let user = localStorage.getItem('user');
    var formData: any = new FormData();
    formData.append("investmentaccount", investmentaccount);
    formData.append("user", user);

    const headers = new HttpHeaders()
      .set('Authorization', localStorage.getItem('jwt'))
      .set('User', user);

    return this.http.post<any>(this.baseURL + 'FinancialDiary/saveinvestmentaccountsettings', formData, { headers: headers })
      .pipe(
        //tap(data => console.log(JSON.stringify(data))),
      );
  }

  getDashboardChangeData(): Observable<any> {
    let user = localStorage.getItem('user');
    const params = new HttpParams()
      .set('user', user);

    const headers = new HttpHeaders()
      .set('Authorization', localStorage.getItem('jwt'))
      .set('User', user)
      .set('Content-Type', 'application/json');

    return this.http.get<Configuration>(this.baseURL + 'FinancialDiary/getdashboardchangedata', { params, headers })
      .pipe(
        //tap(data => console.log(JSON.stringify(data))),
      );
  }
}
export class InvestmentDetails {
  fundName: string;
  date: string;
  denomination: string;
  profile: string;
  id: string;
  user: string;
}

export class InvestmentReturnDetails {
  profile: string;
  investedamount: number;
  currentvalue: number;
  returns: string;
  createddate: string;
  id: string;
  type: string;
  user: string;
}

export class InvestmentReturnDataForChart {
  data: Array<number>;
  label: string;
  pointRadius: number;
  user: string;
}

export class Returns {
  investmentReturnChart: InvestmentReturnDataForChart[];
  chartLabels: string[];
  user: string;
}

export class DashboardAssetDetails {
  cardclass: string;
  investmenttype: number;
  currentvalue: number;
  equity: number;
  increased: boolean;
  user: string;
}

export class Debt {
  accountname: string;
  currentbalance: number;
  createddate: number;
  id: string;
  user: string;
}
export class Configuration {
  profile: string[];
  debtaccount: string[];
}

export class DashBoardChangeData
{
  assetchange :number;
  assetincreased : boolean;
  assetchangepercentage :number;
  debtchange :number;
  debtincreased :boolean;
  debtchangepercentage :number;
}