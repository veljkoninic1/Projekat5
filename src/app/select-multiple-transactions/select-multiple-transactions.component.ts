import { Component, OnInit } from '@angular/core';
import { MultipleSelect } from '../services/service.service';
import { CommonModule } from '@angular/common';

@Component({
      selector: 'app-select-multiple-transactions',
      imports: [CommonModule],
      templateUrl: './select-multiple-transactions.component.html',
      styleUrl: './select-multiple-transactions.component.scss'
})
export class SelectMultipleTransactionsComponent implements OnInit {


      multiSelectOn: boolean = false;
      constructor(private multipleSelect: MultipleSelect, private selectMultipleSercice: MultipleSelect) { }

      showCheckBox() {
            this.multipleSelect.showCheckBox(true);
      }

      cancel() {
            this.multipleSelect.showCheckBox(false);
      }

      ngOnInit(): void {
            this.selectMultipleSercice.showCheckBox$.subscribe(status => {
                  this.multiSelectOn = status;
            });
      }
}
