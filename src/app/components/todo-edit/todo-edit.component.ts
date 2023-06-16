import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-todo-edit',
  templateUrl: './todo-edit.component.html',
  styleUrls: ['./todo-edit.component.css',  '../shared-form-styles.css']
})
export class TodoEditComponent implements OnInit {

  @Input() onClose!: () => void;
  @Input() title!: string;
  @Input() description!: string;
  @Input() id!: number;

  constructor() { }

  ngOnInit(): void {
  }

}
