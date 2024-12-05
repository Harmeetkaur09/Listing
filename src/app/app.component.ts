import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { TaskFormComponent } from './task-form/task-form.component';
TaskFormComponent
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'task';
  currentFilter: 'all' | 'completed' | 'pending' = 'all';
  constructor(private dialog: MatDialog) {}

  onFilterChange(newFilter: 'all' | 'completed' | 'pending'): void {
    this.currentFilter = newFilter;
  }
  openTaskForm(): void {
    this.dialog.open(TaskFormComponent, {
      width: '400px',
    });
  }
}
