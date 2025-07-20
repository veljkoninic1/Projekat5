import { Component, Input  } from '@angular/core';
import { Transakcija } from '../interfaces/transaction.interface';
import { SPdialogBoxComponent } from '../spdialog-box/spdialog-box.component';
import { MatDialog } from '@angular/material/dialog';
import { KatDialogBoxComponent } from '../kat-dialog-box/kat-dialog-box.component';
import { SelectMultipleTransactionsComponent } from '../select-multiple-transactions/select-multiple-transactions.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-transakcija',
  imports: [SelectMultipleTransactionsComponent, CommonModule],
  templateUrl: './transakcija.component.html',
  styleUrl: './transakcija.component.scss'
})
export class TransakcijaComponent {

 constructor(private dialog: MatDialog) {}

 otvoriDialog(): void {
    const dialogRef = this.dialog.open(SPdialogBoxComponent, {
      width: '400px',
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('Dialog zatvoren. Rezultat:', result);
    });
  }

  otvoriKategorije(): void {
    const dialogRef = this.dialog.open(KatDialogBoxComponent, {
      width: '400px',
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('Dialog zatvoren. Rezultat:', result);
    });
  }



 @Input() item!: Transakcija;
@Input() showCheckbox: boolean = false;

 splittransakcija (): void
 {
   
 }
}


