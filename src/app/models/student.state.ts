import { Student } from "./student.model";

export interface StudentState{
  students:Student[],
  loading:boolean,
  error:Error
}
