import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FinancialOverviewComponent } from "./financial-overview/financial-overview.component";
import { FinansijskaListaComponent } from "./financial-table/finansijska-lista.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, FinancialOverviewComponent, FinansijskaListaComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'Projekat5';
}
