import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-delete-template',
  templateUrl: './delete-template.component.html',
  styleUrls: ['./delete-template.component.scss']
})
export class DeleteTemplateComponent implements OnInit {
  @Input() title!:string
  @Output() closeModal : EventEmitter<boolean> = new EventEmitter();
  @Output() deleteConfirm : EventEmitter<boolean> = new EventEmitter();
    constructor() { }
  
    ngOnInit(): void {
      console.log('hello delete',this.title);
      
    }
    close(){
      this.closeModal.emit(true)
    }
    confirmDelete(){
      this.deleteConfirm.emit(true)
    }
}
