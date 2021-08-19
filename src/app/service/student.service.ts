import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Student } from '../models/student.model';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class StudentService {
  private apiUrl:string = "https://localhost:44391/api/student";
  constructor(private http:HttpClient) { }

  getAll():Observable<Student[]>{
    return this.http.get<Student[]>(this.apiUrl)
  }
}
