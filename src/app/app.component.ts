import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FinancialOverviewComponent } from "./financial-overview/financial-overview.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, FinancialOverviewComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'Projekat5';
}
