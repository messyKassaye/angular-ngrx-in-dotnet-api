import { Component, Input, OnInit } from '@angular/core';
import { Student } from 'src/app/models/student.model';

@Component({
  selector: 'app-tutorial-item',
  templateUrl: './tutorial-item.component.html',
  styleUrls: ['./tutorial-item.component.css']
})
export class TutorialItemComponent implements OnInit {
  @Input() student:Student
  constructor() { }

  ngOnInit(): void {
  }

}
