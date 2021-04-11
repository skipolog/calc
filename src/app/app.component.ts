import { StateService } from './service/state.service';
import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { DepositType } from './models/StateModel';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  deposit = new FormControl('unic')

  constructor(public state: StateService){}
}
