import { Injectable } from '@angular/core';
import { Observable, Subject, Subscription } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UiService {
   showAddStudent:boolean=true;
   subject= new Subject<any>()
  constructor() {

  }

  toggleAddStudent(){
    this.showAddStudent = !this.showAddStudent;
    this.subject.next(this.showAddStudent);
  }

  onToggleAddStudent():Observable<any>{
    return this.subject.asObservable();
  }
}
