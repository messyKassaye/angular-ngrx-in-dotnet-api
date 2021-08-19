import { Student } from "../models/student.model";
import { StudentState } from "../models/student.state";

export interface AppState{
  readonly student:StudentState;
}
