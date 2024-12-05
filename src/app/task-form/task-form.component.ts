import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { TaskService } from '../Services/task.service';
TaskService
@Component({
  selector: 'app-task-form',
  templateUrl: './task-form.component.html',
  styleUrls: ['./task-form.component.css']
})
export class TaskFormComponent {
onInputChange() {
throw new Error('Method not implemented.');
}
  taskName: string = '';
  showForm: boolean = false;

  constructor(private taskService: TaskService, 
    private dialogRef: MatDialogRef<TaskFormComponent>
  ) { }

  openTaskForm(): void {
    this.showForm = true;
  }

  closeTaskForm(): void {
    this.dialogRef.close();

  }

  addTask(): void {
    if (this.taskName.trim()) {
      this.taskService.addTask(this.taskName);
      this.dialogRef.close();
    } else {
      alert('Task name cannot be empty');
    }
  }
}
