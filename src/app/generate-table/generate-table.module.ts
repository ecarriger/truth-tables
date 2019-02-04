import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { GenerateTablePage } from './generate-table.page';
import { InputStatementComponent } from './input-statement/input-statement.component';
import { TableResultComponent } from './table-result/table-result.component';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild([{ path: '', component: GenerateTablePage }])
  ],
  declarations: [GenerateTablePage, InputStatementComponent, TableResultComponent]
})
export class GenerateTablePageModule {}
