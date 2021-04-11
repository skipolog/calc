import { CalculatorService } from './../../service/calculator.service';
import { StateService } from './../../service/state.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.scss']
})
export class ResultComponent implements OnInit {

  constructor(
    public state: StateService,
    public calculator: CalculatorService
  ) { }

  ngOnInit(): void {
  }

}
