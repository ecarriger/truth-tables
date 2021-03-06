import { Component, OnInit } from '@angular/core';
import {Validators, FormBuilder, FormGroup } from '@angular/forms';

import { GenerateTableService } from '../generate-table.service';

@Component({
  selector: 'app-input-statement',
  templateUrl: './input-statement.component.html',
  styleUrls: ['./input-statement.component.scss']
})
export class InputStatementComponent implements OnInit {
  private logicStatement : FormGroup;

  constructor( private formBuilder: FormBuilder, private generateTableService: GenerateTableService ) {
    this.logicStatement = this.formBuilder.group({
      logicStatement: ['', Validators.required],
    });
   }

  generateTable() {
    console.log(this.logicStatement.value);
    this.generateTableService.handleStatement(this.logicStatement.value.logicStatement);
  }

  ngOnInit() {
  }

}
