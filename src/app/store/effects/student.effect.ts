import { Injectable } from "@angular/core";
import { Actions,createEffect, ofType } from "@ngrx/effects";
import { StudentService } from "src/app/service/student.service";
import { FETCH_STUDENTS,STUDENT_FETCH_SUCCESS } from "../action/action.constant";
import { map, mergeMap, catchError } from 'rxjs/operators';
import { EMPTY } from "rxjs";

@Injectable()
export class StudentEffect{

  studentLoading$ = createEffect(()=>this.actions$.pipe(
    ofType(FETCH_STUDENTS),
    mergeMap(()=>this.studentService.getAll().pipe(
      map(students=>({type:STUDENT_FETCH_SUCCESS,payload:students})),
      catchError(()=>EMPTY)
    ))
  ))
  constructor(private actions$:Actions,private studentService:StudentService){}
}
