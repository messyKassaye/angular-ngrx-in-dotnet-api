import { Action } from "@ngrx/store";
import { Student } from "src/app/models/student.model";
import { ADD_STUDENT,STUDENT_FETCH_SUCCESS } from "./action.constant";


export class AddStudent implements Action{
  readonly type = ADD_STUDENT;
  constructor(public payload:Student){}
}

export class FetchStudent implements Action{
  readonly type = STUDENT_FETCH_SUCCESS

  constructor(public payload:Student[]){}
}

export type Actions = AddStudent |FetchStudent
