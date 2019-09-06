import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Training } from '../models/training';
@Injectable({
  providedIn: 'root'
})
export class TrainingService {
  private baseUrl = 'http://localhost:9091';
  constructor(private http: HttpClient) { }

  addTraining(training):Observable<any>
  {
    {
      console.log('add training')
    return this.http.post(`${this.baseUrl}`+`/settraining`,training);
    } 
  }
  getTraining():Observable<any>
  {
    console.log("training detail");
    return this.http.get<Training[]>(`${this.baseUrl}`+'/gettraining');
  }

  getMentorTraining(email):Observable<any>
  {
    console.log("get Mentor training");
    return this.http.get<Training[]>(`${this.baseUrl}`+'/findtrainingbymentor/'+email);
  }
  getUserTraining(email):Observable<any>
  {
    console.log("get user training");
    return this.http.get<Training[]>(`${this.baseUrl}`+'/findtrainingbyuser/'+email);
  }
  
}
