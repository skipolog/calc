import { BehaviorSubject } from 'rxjs';
import { StateService } from './state.service';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CalculatorService {
  public profit: BehaviorSubject<number> = new BehaviorSubject(0)
  public summInEndPeriod: BehaviorSubject<number> = new BehaviorSubject(0)

  constructor(
  ) { }

  calculateProfit(summ: number, period: number, rate: number): void{
    this.profit.next(parseFloat((summ / 100 * period / 365 * rate).toFixed(2)))
    this.summInEndPeriod.next(+ summ + this.profit.value)
  }
}
