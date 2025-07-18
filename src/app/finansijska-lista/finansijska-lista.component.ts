import { Component, OnInit } from '@angular/core';
import { TransakcijaComponent } from "../transakcija/transakcija.component";
import { PaginacijaComponent } from '../paginacija/paginacija.component';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { Transakcija } from '../interfaces/transaction.interface';

@Component({
  selector: 'app-finansijska-lista',
  imports: [TransakcijaComponent, PaginacijaComponent, CommonModule],
  templateUrl: './finansijska-lista.component.html',
  styleUrl: './finansijska-lista.component.scss'
})
export class FinansijskaListaComponent implements OnInit{

podaci: any[]=[];
transakcija: Transakcija[]=[];

constructor(private http: HttpClient){}

  ngOnInit(): void {
    this.http.get<TransakcijaResponse>('assets/mock.json').subscribe((res)=>{
      this.transakcija= res.items;
    });
    
  }

}
  
  interface TransakcijaResponse {
  items: Transakcija[];
}



