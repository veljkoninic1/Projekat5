import { Component, OnInit } from '@angular/core';
import { TransakcijaComponent } from "../transakcija/transakcija.component";
import { PaginacijaComponent } from '../paginacija/paginacija.component';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { Transakcija } from '../interfaces/transaction.interface';
import { MultipleSelect } from '../services/service.service';
import { SelectMultipleTransactionsComponent } from '../select-multiple-transactions/select-multiple-transactions.component';


@Component({
  selector: 'app-finansijska-lista',
  imports: [TransakcijaComponent, PaginacijaComponent, CommonModule, SelectMultipleTransactionsComponent],
  templateUrl: './finansijska-lista.component.html',
  styleUrl: './finansijska-lista.component.scss'
})
export class FinansijskaListaComponent implements OnInit {

  multiSelectOn: boolean = false;
  podaci: any[] = [];
  transakcija: Transakcija[] = [];

  constructor(private http: HttpClient, private selectMultipleSercice: MultipleSelect) { }

  ngOnInit(): void {
    this.http.get<TransakcijaResponse>('assets/mock.json').subscribe((res) => {
      this.transakcija = res.items;
    });

    this.selectMultipleSercice.showCheckBox$.subscribe(status => {
      this.multiSelectOn = status;
      
    });

  }

}

interface TransakcijaResponse {
  items: Transakcija[];
  
}



