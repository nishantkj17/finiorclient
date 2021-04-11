import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { Observable, BehaviorSubject, throwError } from 'rxjs';
import { tap, catchError, map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
//import { InvestmentDetails, Returns, Debt, DashboardAssetDetails } from '../model/financialdiarymodel';

@Injectable({
  providedIn: 'root'
})
export class financialsService {
  baseURL: string;
  user: string;
  constructor(private http: HttpClient) {
    this.baseURL = environment.baseUrl;
    this.user = localStorage.getItem('user');
  }

  getInvestmentDetails(): Observable<any> {
    const params = new HttpParams()
    .set('user', this.user);
    return this.http.get<InvestmentDetails[]>(this.baseURL + 'FinancialDiary/getinvestmentdetails', {params})
      .pipe(
        //tap(data => console.log(JSON.stringify(data))),
      );
  }

  getSipDetailsByFund(): Observable<any> {
    const params = new HttpParams()
    .set('user', this.user);
    return this.http.get<any>(this.baseURL + 'FinancialDiary/gettotalsipdetailsbyfund', {params})
      .pipe(
        //tap(data => console.log(JSON.stringify(data))),
      );
  }

  getSipDetailsByDate(): Observable<any> {
    const params = new HttpParams()
    .set('user', this.user);
    return this.http.get<any>(this.baseURL + 'FinancialDiary/gettotalsipdetailsbydate', {params})
      .pipe(
        //tap(data => console.log(JSON.stringify(data))),
      );
  }


  getFilteredInvestmentDetails(date: string, profile: string): Observable<any> {
    const params = new HttpParams()
      .set('date', date)
      .set('profile', profile)
      .set('user', this.user);

    return this.http.get<InvestmentDetails[]>(this.baseURL + 'FinancialDiary/getfilteredinvestmentdetails', { params })
      .pipe(
        //tap(data => console.log(JSON.stringify(data))),
      );
  }

  addInvestment(fundName: string, date: string, denomination: string, profile: string): Observable<any> {
    var formData: any = new FormData();
    formData.append("fundName", fundName);
    formData.append("date", date);
    formData.append("denomination", denomination);
    formData.append("profile", profile);
    formData.append("user", this.user);
    return this.http.post<any>(this.baseURL + 'FinancialDiary/addinvestment', formData)
      .pipe(
        //tap(data => console.log(JSON.stringify(data))),
      );
  }

  saveReturns(profile: string, investedamount: number, currentvalue: number): Observable<any> {
    var formData: any = new FormData();
    formData.append("profile", profile);
    formData.append("investedamount", investedamount);
    formData.append("currentvalue", currentvalue);
    formData.append("user", this.user);
    return this.http.post<any>(this.baseURL + 'FinancialDiary/savereturns', formData)
      .pipe(
        //tap(data => console.log(JSON.stringify(data))),
      );
  }

  getInvestmentReturnDetails(): Observable<any> {
    const params = new HttpParams()
    .set('user', this.user);
    return this.http.get<InvestmentDetails[]>(this.baseURL + 'FinancialDiary/getreturns', {params})
      .pipe(
        //tap(data => console.log(JSON.stringify(data))),
      );
  }

  getCombinedInvestmentReturnDetails(): Observable<any> {
    const params = new HttpParams()
    .set('user', this.user);
    return this.http.get<InvestmentDetails[]>(this.baseURL + 'FinancialDiary/getcombinedreturns', {params})
      .pipe(
        //tap(data => console.log(JSON.stringify(data))),
      );
  }

  updateSipDetails(item: InvestmentDetails): Observable<any> {
    var formData: any = new FormData();
    formData.append("fundName", item.fundName);
    formData.append("date", item.date);
    formData.append("denomination", item.denomination);
    formData.append("profile", item.profile);
    formData.append("id", item.id);
    formData.append("user", this.user);
    return this.http.post<any>(this.baseURL + 'FinancialDiary/updatesipdetails', formData)
      .pipe(
        //tap(data => console.log(JSON.stringify(data))),
      );
  }

  public deleteSipDetails(id: string): Observable<any> {
    const params = new HttpParams()
      .set('id', id)
      .set('user', this.user);

    return this.http.get<any>(this.baseURL + 'FinancialDiary/deletesipdetails', { params })
      .pipe(
        //tap(data => console.log(JSON.stringify(data))),
      );
  }

  getCombinedInvestmentReturnDataForChart(): Observable<any> {
    const params = new HttpParams()
    .set('user', this.user);
    return this.http.get<Returns[]>(this.baseURL + 'FinancialDiary/getinvestmentdataforchart', {params})
      .pipe(
        //tap(data => console.log(JSON.stringify(data))),
      );
  }

  getIndividualInvestmentReturnDataForChart(): Observable<any> {
    const params = new HttpParams()
    .set('user', this.user);
    return this.http.get<Returns[]>(this.baseURL + 'FinancialDiary/getindividualinvestmentdataforchart', {params})
      .pipe(
        //tap(data => console.log(JSON.stringify(data))),
      );
  }

  getEquityInvestmentReturnDataForChart(): Observable<any> {
    const params = new HttpParams()
    .set('user', this.user);
    return this.http.get<Returns[]>(this.baseURL + 'FinancialDiary/getequityinvestmentreturndata', {params})
      .pipe(
        //tap(data => console.log(JSON.stringify(data))),
      );
  }

  getPFReturnForChart(user:string): Observable<any> {
    const params = new HttpParams()
    .set('user', user);
    return this.http.get<Returns[]>(this.baseURL + 'FinancialDiary/getpfreturndataforchart', { params })
      .pipe(
        //tap(data => console.log(JSON.stringify(data))),
      );
  }

  getAssetsDashboardData(): Observable<any> {
    const params = new HttpParams()
    .set('user', this.user);
    return this.http.get<DashboardAssetDetails[]>(this.baseURL + 'FinancialDiary/getassetsdashboarddata', {params})
      .pipe(
        //tap(data => console.log(JSON.stringify(data))),
      );
  }

  getDebtsDashboardData(user:string): Observable<any> {
    const params = new HttpParams()
    .set('user', user);
    return this.http.get<Debt[]>(this.baseURL + 'FinancialDiary/getdebtsdashboarddata', { params })
      .pipe(
        //tap(data => console.log(JSON.stringify(data))),
      );
  }

  refreshDebtInvestmentForChart(user:string): Observable<any> {
    const params = new HttpParams()
    .set('user', user);
    return this.http.get<any>(this.baseURL + 'FinancialDiary/refreshdebtinvestmentforchart', { params })
      .pipe(
        //tap(data => console.log(JSON.stringify(data))),
      );
  }

  saveEquityInvestment(investedamount: number, currentvalue: number): Observable<any> {
    var formData: any = new FormData();
    formData.append("investedamount", investedamount);
    formData.append("currentvalue", currentvalue);
    formData.append("user", this.user);

    return this.http.post<any>(this.baseURL + 'FinancialDiary/saveequityinvestmentreturndata', formData)
      .pipe(
        //tap(data => console.log(JSON.stringify(data))),
      );
  }

  saveProvidentFundDetails(epfoPrimaryBalance: number, ppfBalance: number, type: string, profile: string): Observable<any> {
    var formData: any = new FormData();
    formData.append("epfoPrimaryBalance", epfoPrimaryBalance);
    formData.append("ppfBalance", ppfBalance);
    formData.append("type", type);
    formData.append("profile", profile);
    formData.append("user", this.user);
    return this.http.post<any>(this.baseURL + 'FinancialDiary/saveprovidentfunddetails', formData)
      .pipe(
        //tap(data => console.log(JSON.stringify(data))),
      );
  }

  saveDebtEntry(accountname: string, currentbalance: number): Observable<any> {
    var formData: any = new FormData();
    formData.append("accountname", accountname);
    formData.append("currentbalance", currentbalance);
    formData.append("user", this.user);

    return this.http.post<any>(this.baseURL + 'FinancialDiary/adddebt', formData)
      .pipe(
        //tap(data => console.log(JSON.stringify(data))),
      );
  }

  getDebtAccountName(): Observable<any> {
    const params = new HttpParams()
    .set('user', this.user);
    return this.http.get<string[]>(this.baseURL + 'FinancialDiary/getdebtaccountname', {params})
      .pipe(
        //tap(data => console.log(JSON.stringify(data))),
      );
  }
  getDebtInvestmentForChart(): Observable<any> {
  
    const params = new HttpParams()
    .set('user', this.user);
    return this.http.get<Returns[]>(this.baseURL + 'FinancialDiary/getdebtinvestmentforchart', {params})
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
  increased:boolean;
  user: string;
}

export class Debt {
  accountname: string;
  currentbalance: number;
  createddate: number;
  id: string;
  user: string;
}