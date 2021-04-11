"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.financialsService = void 0;
var http_1 = require("@angular/common/http");
var core_1 = require("@angular/core");
var financialsService = /** @class */ (function () {
    function financialsService(http, baseUrl) {
        this.http = http;
        this.baseURL = baseUrl;
    }
    financialsService.prototype.getInvestmentDetails = function () {
        var httpOptions = {
            headers: new http_1.HttpHeaders({
                'Content-Type': 'application/json'
            })
        };
        return this.http.get(this.baseURL + 'FinancialDiary/getinvestmentdetails/', httpOptions)
            .pipe(
        //tap(data => console.log(JSON.stringify(data))),
        );
    };
    financialsService.prototype.getSipDetailsByFund = function () {
        var httpOptions = {
            headers: new http_1.HttpHeaders({
                'Content-Type': 'application/json'
            })
        };
        return this.http.get(this.baseURL + 'FinancialDiary/gettotalsipdetailsbyfund/', httpOptions)
            .pipe(
        //tap(data => console.log(JSON.stringify(data))),
        );
    };
    financialsService.prototype.getSipDetailsByDate = function () {
        var httpOptions = {
            headers: new http_1.HttpHeaders({
                'Content-Type': 'application/json'
            })
        };
        return this.http.get(this.baseURL + 'FinancialDiary/gettotalsipdetailsbydate/', httpOptions)
            .pipe(
        //tap(data => console.log(JSON.stringify(data))),
        );
    };
    financialsService.prototype.getFilteredInvestmentDetails = function (date, profile) {
        var params = new http_1.HttpParams()
            .set('date', date)
            .set('profile', profile);
        return this.http.get(this.baseURL + 'FinancialDiary/getfilteredinvestmentdetails', { params: params })
            .pipe(
        //tap(data => console.log(JSON.stringify(data))),
        );
    };
    financialsService.prototype.addInvestment = function (fundName, date, denomination, profile) {
        var formData = new FormData();
        formData.append("fundName", fundName);
        formData.append("date", date);
        formData.append("denomination", denomination);
        formData.append("profile", profile);
        return this.http.post(this.baseURL + 'FinancialDiary/addinvestment', formData)
            .pipe(
        //tap(data => console.log(JSON.stringify(data))),
        );
    };
    financialsService.prototype.saveReturns = function (profile, investedamount, currentvalue) {
        var formData = new FormData();
        formData.append("profile", profile);
        formData.append("investedamount", investedamount);
        formData.append("currentvalue", currentvalue);
        return this.http.post(this.baseURL + 'FinancialDiary/savereturns', formData)
            .pipe(
        //tap(data => console.log(JSON.stringify(data))),
        );
    };
    financialsService.prototype.getInvestmentReturnDetails = function () {
        var httpOptions = {
            headers: new http_1.HttpHeaders({
                'Content-Type': 'application/json'
            })
        };
        return this.http.get(this.baseURL + 'FinancialDiary/getreturns/', httpOptions)
            .pipe(
        //tap(data => console.log(JSON.stringify(data))),
        );
    };
    financialsService.prototype.getCombinedInvestmentReturnDetails = function () {
        var httpOptions = {
            headers: new http_1.HttpHeaders({
                'Content-Type': 'application/json'
            })
        };
        return this.http.get(this.baseURL + 'FinancialDiary/getcombinedreturns/', httpOptions)
            .pipe(
        //tap(data => console.log(JSON.stringify(data))),
        );
    };
    financialsService = __decorate([
        core_1.Injectable({
            providedIn: 'root'
        }),
        __param(1, core_1.Inject('BASE_URL'))
    ], financialsService);
    return financialsService;
}());
exports.financialsService = financialsService;
//# sourceMappingURL=financialsService.js.map