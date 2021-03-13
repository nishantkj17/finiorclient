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

export class DashboardDataForChart{
  epfo: number;
  mutualfund: number;
  equity: number;
  date: string;
  ppf: number;
}

export class Debt{
  accountname: string;
  currentbalance: number;
  createddate: number;
  id:string;
}