export interface One_SummType {
    summ_from: number
    rate: number
  }
    
  export interface ParamType {
    period_from: number, 
    summs_and_rate: One_SummType[]
  }
  
  export interface DepositType {
    code: string
    name: string
    param: ParamType[]
  }
  
  export interface StateType {
    deposits: DepositType[]
  }
  
  export interface GetPeriodDepositType {
    minPeriod: number 
    maxPeriod: number 
  }
  