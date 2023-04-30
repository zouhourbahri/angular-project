import { Component, OnInit } from '@angular/core';
import { BehaviorSubjectService } from 'src/app/core/services/behaviorSubject/behavior-subject.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {

  constructor( private bhSubject:BehaviorSubjectService) { }

  ngOnInit(): void {
    console.log('hello');
  }
  ajoutModal(){
    this.bhSubject.setAjoutPost(true)
  }

}
