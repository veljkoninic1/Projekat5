import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Transakcija } from '../interfaces/transaction.interface';
import { CommonModule } from '@angular/common';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { KatDialogBoxComponent } from '../cat-dialog-box/kat-dialog-box.component';
@Component({
  selector: 'app-finansijska-lista',
  standalone: true,
  imports: [
    CommonModule,
    MatTableModule,
    MatPaginatorModule,
    MatButtonModule,
    MatIconModule,
    MatDialogModule,
    
  ],
  templateUrl: './finansijska-lista.component.html',
styleUrls: ['./finansijska-lista.component.scss'],
})
export class FinansijskaListaComponent implements OnInit {

  transakcija: Transakcija[] = [];
  displayedColumns = ['id', 'beneficiary-name', 'date', 'direction', 'amount', 'kind', 'split', 'category-dialog'];

  constructor(private http: HttpClient, private dialog: MatDialog) {}

  ngOnInit(): void {
    this.http.get<{items: Transakcija[]}>('assets/mock.json').subscribe(res => {
      this.transakcija = res.items;
    });
  }

  openCategoryDialog(item: Transakcija): void {
    this.dialog.open(KatDialogBoxComponent, {
      width: '400px',
      data: { transaction: item }
    });
  }
}
