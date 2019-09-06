import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MentorService {

  private baseUrl = 'http://localhost:9091';
  constructor(private http: HttpClient) { }

  
  registerMentor(mentor:Object):Observable<any>
  {
    console.log('mentor')
  return this.http.post(`${this.baseUrl}`+`/registermentor`,mentor);
  }
  getMentorbyEmail(email:string)
  {
    console.log("getMentorbyEmail");
    return this.http.get(`${this.baseUrl}`+`/findmentor/`+email);
  }
}
