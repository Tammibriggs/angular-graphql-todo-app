import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {

  @Input() title!: string;
  @Input() description!: string;
  @Input() completed: boolean = false;
  @Input() id!: number;

  checked!: boolean;
  open = {edit: false, view: false}

  constructor() { }

  viewTodo() {
    this.open = {...this.open, view: true}
  }
 
  editTodo() {
    this.open = {...this.open, edit: true}
  }

  handleClose (){
    this.open = {edit:false, view:false}
  }

  ngOnInit(): void {
    this.checked = this.completed
  }

}
