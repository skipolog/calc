import { StateService } from '../../service/state.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss']
})
export class InputComponent implements OnInit {

  constructor(
    public state: StateService
  ) { }
  ngOnInit(): void {
  }
}
