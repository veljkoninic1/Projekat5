import { Component, Input, OnInit  } from '@angular/core';
import { Transakcija } from '../interfaces/transaction.interface';
import { SPdialogBoxComponent } from '../spdialog-box/spdialog-box.component';
import { MatDialog } from '@angular/material/dialog';
import { KatDialogBoxComponent } from '../cat-dialog-box/kat-dialog-box.component';
import { SelectMultipleTransactionsComponent } from '../select-multiple-transactions/select-multiple-transactions.component';
import { CommonModule } from '@angular/common';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatChipsModule } from '@angular/material/chips';
import { MatCardModule } from '@angular/material/card';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClient } from '@angular/common/http';



@Component({
  selector: 'app-transakcija',
  imports: [SelectMultipleTransactionsComponent,
            CommonModule,
            BrowserModule,
    BrowserAnimationsModule,
    MatTableModule,
    MatPaginatorModule,
    MatCheckboxModule,
    MatButtonModule,
    MatIconModule,
    MatChipsModule,
    MatCardModule],
  templateUrl: './transakcija.component.html',
  styleUrl: './transakcija.component.scss'
})
export class TransakcijaComponent{

 constructor(private dialog: MatDialog, private http: HttpClient) {}

 openDialog(): void {
    const dialogRef = this.dialog.open(SPdialogBoxComponent, {
      width: '400px',
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('Dialog zatvoren. Rezultat:', result);
    });
  }

  openCategories(): void {
    const dialogRef = this.dialog.open(KatDialogBoxComponent, {
      width: '400px',
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('Dialog zatvoren. Rezultat:', result);
    });
  }
  }






