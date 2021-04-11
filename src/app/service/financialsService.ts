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

  constructor(private http: HttpClient) {
    this.baseURL = environment.baseUrl;
  }

  getInvestmentDetails(): Observable<any> {
    
    const httpOptions = {
      headers: new HttpHeaders(
        {
          'Content-Type': 'application/json'
        })
    }
    return this.http.get<InvestmentDetails[]>(this.baseURL + 'FinancialDiary/getinvestmentdetails/', httpOptions)
      .pipe(
        //tap(data => console.log(JSON.stringify(data))),
      );
  }

  getSipDetailsByFund(): Observable<any> {
    console.log(this.baseURL);
    const httpOptions = {
      headers: new HttpHeaders(
        {
          'Content-Type': 'application/json'
        })
    }
    return this.http.get<any>(this.baseURL + 'FinancialDiary/gettotalsipdetailsbyfund/', httpOptions)
      .pipe(
        //tap(data => console.log(JSON.stringify(data))),
      );
  }

  getSipDetailsByDate(): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders(
        {
          'Content-Type': 'application/json'
        })
    }
    return this.http.get<any>(this.baseURL + 'FinancialDiary/gettotalsipdetailsbydate/', httpOptions)
      .pipe(
        //tap(data => console.log(JSON.stringify(data))),
      );
  }


  getFilteredInvestmentDetails(date: string, profile: string): Observable<any> {
    const params = new HttpParams()
      .set('date', date)
      .set('profile', profile);

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
    return this.http.post<any>(this.baseURL + 'FinancialDiary/savereturns', formData)
      .pipe(
        //tap(data => console.log(JSON.stringify(data))),
      );
  }

  getInvestmentReturnDetails(): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders(
        {
          'Content-Type': 'application/json'
        })
    }
    return this.http.get<InvestmentDetails[]>(this.baseURL + 'FinancialDiary/getreturns/', httpOptions)
      .pipe(
        //tap(data => console.log(JSON.stringify(data))),
      );
  }

  getCombinedInvestmentReturnDetails(): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders(
        {
          'Content-Type': 'application/json'
        })
    }
    return this.http.get<InvestmentDetails[]>(this.baseURL + 'FinancialDiary/getcombinedreturns/', httpOptions)
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
    return this.http.post<any>(this.baseURL + 'FinancialDiary/updatesipdetails', formData)
      .pipe(
        //tap(data => console.log(JSON.stringify(data))),
      );
  }
  public deleteSipDetails(id: string): Observable<any> {
    const params = new HttpParams()
      .set('id', id);

    return this.http.get<any>(this.baseURL + 'FinancialDiary/deletesipdetails', { params })
      .pipe(
        //tap(data => console.log(JSON.stringify(data))),
      );
  }

  getCombinedInvestmentReturnDataForChart(): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders(
        {
          'Content-Type': 'application/json'
        })
    }
    return this.http.get<Returns[]>(this.baseURL + 'FinancialDiary/getinvestmentdataforchart/', httpOptions)
      .pipe(
        //tap(data => console.log(JSON.stringify(data))),
      );
  }

  getIndividualInvestmentReturnDataForChart(): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders(
        {
          'Content-Type': 'application/json'
        })
    }
    return this.http.get<Returns[]>(this.baseURL + 'FinancialDiary/getindividualinvestmentdataforchart/', httpOptions)
      .pipe(
        //tap(data => console.log(JSON.stringify(data))),
      );
  }

  getEquityInvestmentReturnDataForChart(): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders(
        {
          'Content-Type': 'application/json'
        })
    }
    return this.http.get<Returns[]>(this.baseURL + 'FinancialDiary/getequityinvestmentreturndata/', httpOptions)
      .pipe(
        //tap(data => console.log(JSON.stringify(data))),
      );
  }

  getPFReturnForChart(): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders(
        {
          'Content-Type': 'application/json'
        })
    }
    return this.http.get<Returns[]>(this.baseURL + 'FinancialDiary/getpfreturndataforchart/', httpOptions)
      .pipe(
        //tap(data => console.log(JSON.stringify(data))),
      );
  }
  getAssetsDashboardData(): Observable<any> {
    console.log(this.baseURL);
    const httpOptions = {
      headers: new HttpHeaders(
        {
          'Content-Type': 'application/json'
        })
    }
    return this.http.get<DashboardAssetDetails[]>(this.baseURL + 'FinancialDiary/getassetsdashboarddata/', httpOptions)
      .pipe(
        //tap(data => console.log(JSON.stringify(data))),
      );
  }
  getDebtsDashboardData(): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders(
        {
          'Content-Type': 'application/json'
        })
    }
    return this.http.get<Debt[]>(this.baseURL + 'FinancialDiary/getdebtsdashboarddata/', httpOptions)
      .pipe(
        //tap(data => console.log(JSON.stringify(data))),
      );
  }
  refreshDebtInvestmentForChart(): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders(
        {
          'Content-Type': 'application/json'
        })
    }
    return this.http.get<any>(this.baseURL + 'FinancialDiary/refreshdebtinvestmentforchart/', httpOptions)
      .pipe(
        //tap(data => console.log(JSON.stringify(data))),
      );
  }
  saveEquityInvestment(investedamount: number, currentvalue: number): Observable<any> {
    var formData: any = new FormData();
    formData.append("investedamount", investedamount);
    formData.append("currentvalue", currentvalue);
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
    return this.http.post<any>(this.baseURL + 'FinancialDiary/saveprovidentfunddetails', formData)
      .pipe(
        //tap(data => console.log(JSON.stringify(data))),
      );
  }

  saveDebtEntry(accountname: string, currentbalance: number): Observable<any> {
    var formData: any = new FormData();
    formData.append("accountname", accountname);
    formData.append("currentbalance", currentbalance);

    return this.http.post<any>(this.baseURL + 'FinancialDiary/adddebt', formData)
      .pipe(
        //tap(data => console.log(JSON.stringify(data))),
      );
  }

  getDebtAccountName(): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders(
        {
          'Content-Type': 'application/json'
        })
    }
    return this.http.get<string[]>(this.baseURL + 'FinancialDiary/getdebtaccountname/', httpOptions)
      .pipe(
        //tap(data => console.log(JSON.stringify(data))),
      );
  }
  getDebtInvestmentForChart(): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders(
        {
          'Content-Type': 'application/json'
        })
    }
    return this.http.get<Returns[]>(this.baseURL + 'FinancialDiary/getdebtinvestmentforchart/', httpOptions)
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
}

export class InvestmentReturnDetails {
  profile: string;
  investedamount: number;
  currentvalue: number;
  returns: string;
  createddate: string;
  id: string;
  type: string;
}

export class InvestmentReturnDataForChart {
  data: Array<number>;
  label: string;
  pointRadius: number;
}

export class Returns {
  investmentReturnChart: InvestmentReturnDataForChart[];
  chartLabels: string[];
}

export class DashboardAssetDetails {
  cardclass: string;
  investmenttype: number;
  currentvalue: number;
  equity: number;
  increased:boolean;
}

export class Debt {
  accountname: string;
  currentbalance: number;
  createddate: number;
  id: string;
}