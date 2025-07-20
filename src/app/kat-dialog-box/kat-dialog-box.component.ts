import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Kategorije } from '../interfaces/transaction.interface';
import { CommonModule } from '@angular/common';
import { MatDialogActions } from '@angular/material/dialog';

@Component({
  selector: 'app-kat-dialog-box',
  imports: [CommonModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatButtonModule,
    MatDialogActions],
  templateUrl: './kat-dialog-box.component.html',
  styleUrl: './kat-dialog-box.component.scss'
})
export class KatDialogBoxComponent implements OnInit {
  allItems: Kategorije[] = [];
  categories: Kategorije[] = [];
  subcategories: Kategorije[] = [];

  selectedCategoryCode: string = '';

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.http.get<KategorijaaResponse>('assets/katMock.json').subscribe((res) => {
      this.allItems = res.items;
      this.categories = res.items.filter(item => item['parent-code'] === '');
    });
  }

  onCategoryChange(): void {
    this.subcategories = this.allItems.filter(
      item => item['parent-code'] === this.selectedCategoryCode
    );
  }

}
interface KategorijaaResponse {
  items: Kategorije[]
}
