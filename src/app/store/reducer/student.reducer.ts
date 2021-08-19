import { Student } from "src/app/models/student.model";
import { StudentState } from "src/app/models/student.state";
import { ADD_STUDENT, STUDENT_FETCH_SUCCESS } from "../action/action.constant";
import * as StudentAction from '../action/student.action'
const initialState:StudentState ={
  students:[],
  loading:true,
  error:null
}

export function reducer(state:StudentState=initialState,action:StudentAction.Actions){
  switch(action.type){
    case ADD_STUDENT:
      return {
        ...state,
      }

      case STUDENT_FETCH_SUCCESS:
        return {
          ...state,
          students:action.payload,
          loading:false
        }
      default:
        return state;
  }
}
