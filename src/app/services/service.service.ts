import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class MultipleSelect {
  showCheckBox$ = new BehaviorSubject<boolean>(false);
  selectedIDs$ = new BehaviorSubject<string[]>([]);

  showCheckBox(status: boolean) {
    this.showCheckBox$.next(status);
  }

  apply(){}
}
