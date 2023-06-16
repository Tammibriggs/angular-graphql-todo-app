import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-todo-add',
  templateUrl: './todo-add.component.html',
  styleUrls: ['./todo-add.component.css', '../shared-form-styles.css']
})
export class TodoAddComponent implements OnInit {

  @Input() onClose!: () => void;
  title: string = ""
  description: string = ""

  constructor() { }

  ngOnInit(): void {
  }

}
