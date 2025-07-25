import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FinancialOverviewComponent } from "./financial-overview/financial-overview.component";
import { FinansijskaListaComponent } from "./financial-table/finansijska-lista.component";
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';
import { MatNativeDateModule } from '@angular/material/core';


@Component({
  selector: 'app-root',
  imports: [RouterOutlet, FinancialOverviewComponent, FinansijskaListaComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'Projekat5';
}
