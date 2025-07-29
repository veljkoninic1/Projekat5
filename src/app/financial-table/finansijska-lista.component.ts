import { Component, OnInit, AfterViewInit, ViewChild } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Transakcija } from '../interfaces/transaction.interface';
import { CommonModule } from '@angular/common';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule, MatPaginator, PageEvent } from '@angular/material/paginator';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { KatDialogBoxComponent } from '../cat-dialog-box/kat-dialog-box.component';
import { FormsModule } from '@angular/forms';
import { MatLabel } from '@angular/material/form-field';
import { MatOption } from '@angular/material/select';
import { MatFormField } from '@angular/material/form-field';
import { MatDatepicker } from '@angular/material/datepicker';
import { MatDatepickerToggle } from '@angular/material/datepicker';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatNativeDateModule } from '@angular/material/core'; // važno za rad sa Date objektima
import { MatSelectModule } from '@angular/material/select';
import { MatDatepickerInput } from '@angular/material/datepicker';
import { SPdialogBoxComponent } from '../spdialog-box/spdialog-box.component';
import { MatCheckbox } from '@angular/material/checkbox';

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
    FormsModule,
    MatOption,
    MatLabel,
    MatFormField,
    MatDatepicker,
    MatDatepickerToggle,
    MatDatepickerModule,
    MatFormFieldModule,
    MatInputModule,
    MatNativeDateModule,
    MatSelectModule,
    MatDatepickerInput,
    MatCheckbox,
    
  ],
  templateUrl: './finansijska-lista.component.html',
  styleUrls: ['./finansijska-lista.component.scss'],
})
export class FinansijskaListaComponent implements OnInit {

  // LEFT MENU
  menuItems = [
    { icon: 'home', label: 'Home' },
    { icon: 'account_balance', label: 'My Accounts' },
    { icon: 'payment', label: 'Payments' },
    { icon: 'credit_card', label: 'Cards' },
    { icon: 'currency_exchange', label: 'Currency Exchange' },
    { icon: 'inventory_2', label: 'Product Catalog' },
    { icon: 'assessment', label: 'PFM' },
    { icon: 'settings', label: 'Settings' },
    { icon: 'support', label: 'Support' },
  ];

  selectedMenuIndex = 6;

   selectMenu(index: number) {
    this.selectedMenuIndex = index;
  }
  // LEFT MENU END

  transakcija: Transakcija[] = [];
  
  // režim selekcije
  selectionMode = false;
  // prati koje transakcije su čekirane
  selectedTxIds = new Set<Number>();

  // Paginacija
  pagedData: Transakcija[] = [];
  pageSize = 7;
  totalItems = 0;
  pageIndex = 0;
  @ViewChild(MatPaginator) paginator!: MatPaginator;

  // Filteri
  filterFromDate: Date | null = null;
  filterToDate: Date | null = null;
  filterKind: string = '';

  constructor(private http: HttpClient, private dialog: MatDialog) { }
/*
  * Inicijalizacija komponente
  * Učitavanje podataka iz JSON fajla i postavljanje paginacije
*/
  ngOnInit(): void {
    this.http.get<{ items: Transakcija[], 'total-count': number }>('assets/transactionMock.json').subscribe(res => {
      this.transakcija = res.items;
      this.totalItems = res['total-count'] || res.items.length;
      this.updatePagedData();
      // umesto get requesta, koristi se mock podaci
      // http.get<Transakcija[]>('https://api.example.com/transactions')
    });
  }
  /**
   * Ažuriranje paginiranih podataka na osnovu filtera i trenutne stranice
   */
  //uzimam sve filtere i filtiriram transakcije
  //zatim uzimam samo one koje su na trenutnoj stranici
  updatePagedData() {
    const filtered = this.transakcija.filter(item => {
      const itemDate = new Date(item.date);
      const fromValid = !this.filterFromDate || itemDate >= this.filterFromDate;
      const toValid = !this.filterToDate || itemDate <= this.filterToDate;
      const kindValid = !this.filterKind || item.kind === this.filterKind;
      return fromValid && toValid && kindValid;
    });

    this.totalItems = filtered.length;

    const startIndex = this.pageIndex * this.pageSize;
    this.pagedData = filtered.slice(startIndex, startIndex + this.pageSize);
    // ovo mora da radi na backendu, jer se koristi u paginaciji
  }

  onPageChange(event: PageEvent) {
    this.pageIndex = event.pageIndex;
    this.pageSize = event.pageSize;
    this.updatePagedData();
     // ovo mora da radi na backendu, jer se koristi u paginaciji
  }

  applyFilter() {
    this.pageIndex = 0;
    this.updatePagedData();
  }

  clearFilter() {
    this.filterFromDate = null;
    this.filterToDate = null;
    this.filterKind = '';
    this.pageIndex = 0;
    this.updatePagedData();
  }
/**
 * Otvaranje dijaloga
 */
  openSplitDialog(item: Transakcija): void {
    this.dialog.open(SPdialogBoxComponent, {
      data: { transaction: item }
    });
  }
  
  openCategoryDialog(item: Transakcija): void {
    this.dialog.open(KatDialogBoxComponent, {
      data: { transactions: [item] }
    });
  }

  toggleSelectionMode() {
    this.selectionMode = true;
    this.selectedTxIds.clear();
  }
  cancelSelection() {
    this.selectionMode = false;
    this.selectedTxIds.clear();
  }
  proceedSelection() {
    const selected = this.pagedData.filter(tx => this.selectedTxIds.has(tx.id));
    this.dialog.open(KatDialogBoxComponent, {
      data: { transactions: selected }
    });
    this.cancelSelection();
  }
  onSelectionChange(tx: Transakcija, checked: boolean) {
    if (checked) this.selectedTxIds.add(tx.id);
    else this.selectedTxIds.delete(tx.id);
  }
}
