import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Student } from 'src/app/models/student.model';
import { StudentState } from 'src/app/models/student.state';
import { UiService } from 'src/app/service/ui.service';
import { FETCH_STUDENTS } from 'src/app/store/action/action.constant';
import { AppState } from 'src/app/store/app.state';

@Component({
  selector: 'app-tutorial',
  templateUrl: './tutorial.component.html',
  styleUrls: ['./tutorial.component.css']
})
export class TutorialComponent implements OnInit {
  showAddStudent:boolean=true;
  students$:Observable<Student[]>;
  constructor(private uiService:UiService,private store:Store<AppState>) {
    this.uiService.onToggleAddStudent().subscribe((value)=>this.showAddStudent=value)
    this.students$ = this.store.select(students=>students.student.students);
   }

  ngOnInit(): void {
    this.store.dispatch({type:FETCH_STUDENTS})
  }

  onBtnClick(){
    this.uiService.toggleAddStudent()
  }

}
