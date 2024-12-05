import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})
export class FilterComponent {
  @Output() filterChange = new EventEmitter<'all' | 'completed' | 'pending'>();

  changeFilter(filter: 'all' | 'completed' | 'pending'): void {
    this.filterChange.emit(filter);
  }
}