import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { UiService } from 'src/app/service/ui.service';
import { AppState } from 'src/app/store/app.state';
import * as StudentAction from '../../store/action/student.action'
@Component({
  selector: 'app-add-student',
  templateUrl: './add-student.component.html',
  styleUrls: ['./add-student.component.css']
})
export class AddStudentComponent implements OnInit {
  showAddStudent:boolean=true;
  name:string;
  department:string;
  constructor(private uiService:UiService,private store:Store<AppState>) {
    this.uiService.onToggleAddStudent().subscribe((value)=>this.showAddStudent=value)
   }

  ngOnInit(): void {
  }

  onSubmit(){
    this.store.dispatch(new StudentAction.AddStudent({name:this.name,department:this.department}))
  }

}
