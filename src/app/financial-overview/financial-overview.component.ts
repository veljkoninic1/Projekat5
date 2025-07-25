import { Component } from '@angular/core';
import { FinansijskaListaComponent } from "../financial-table/finansijska-lista.component";



@Component({
  selector: 'app-financial-overview',
  imports: [FinansijskaListaComponent,
  ],
  templateUrl: './financial-overview.component.html',
  styleUrl: './financial-overview.component.scss'
})
export class FinancialOverviewComponent {
}