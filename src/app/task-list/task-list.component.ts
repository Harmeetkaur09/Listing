import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { Task, TaskService } from '../Services/task.service';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css'],
})
export class TaskListComponent implements OnChanges {
  @Input() filter: 'all' | 'completed' | 'pending' = 'all';
  tasks$: Observable<Task[]> = new Observable<Task[]>();

  constructor(private taskService: TaskService) {}

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['filter']) {
      this.applyFilter();
    }
  }

  ngOnInit(): void {
    this.applyFilter();
  }

  applyFilter(): void {
    this.tasks$ = this.taskService.getTasks().pipe(
      map(tasks => {
        if (this.filter === 'completed') return tasks.filter(t => t.completed);
        if (this.filter === 'pending') return tasks.filter(t => !t.completed);
        return tasks;
      })
    );
  }

  toggleCompletion(taskId: number): void {
    this.taskService.toggleTaskCompletion(taskId);
  }

  deleteTask(taskId: number): void {
    this.taskService.deleteTask(taskId);
  }
}