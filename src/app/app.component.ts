import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';  // Для директивы *ngFor
import { FormsModule } from '@angular/forms';  // Для ngModel

@Component({
  selector: 'app-root',
  standalone: true,  // Этот компонент standalone
  imports: [CommonModule, FormsModule],  // Импортируем CommonModule и FormsModule
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  newTodo: string = '';
  todos = [
    { name: 'Learn Angular', completed: false },
    { name: 'Make a report', completed: false }
  ];

  addTodo() {
    if (this.newTodo.trim()) {
      this.todos.push({ name: this.newTodo, completed: false });
      this.newTodo = '';
    }
  }

  toggleComplete(todo: { name: string; completed: boolean }) {
    todo.completed = !todo.completed;
  }

  deleteTodo(todo: { name: string; completed: boolean }) {
    this.todos = this.todos.filter(t => t !== todo);
  }
}
