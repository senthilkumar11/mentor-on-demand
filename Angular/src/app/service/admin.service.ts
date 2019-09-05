import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Technology } from '../models/technology';
import { Observable } from 'rxjs';
import { Mentor } from '../models/mentor';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class AdminService {
  private baseUrl = 'http://localhost:9091';

  constructor(private httpClient:HttpClient) { }
  
  getTech():Observable<any>
  {
    console.log("get tech");
    return this.httpClient.get<Technology[]>(`${this.baseUrl}`+'/techlist');
  }
  addTech(technology:Object):Observable<any>
  {
    console.log('add tech')
    console.log(technology);
    return this.httpClient.post( `${this.baseUrl}`+`/addtech`,technology);
  }
  getMentor():Observable<any>
  {
    console.log("get mentor");
    return this.httpClient.get<Mentor[]>(`${this.baseUrl}`+'/mentorlist');
  }
  getUser():Observable<any>
  {
    console.log("get mentor");
    return this.httpClient.get<User[]>(`${this.baseUrl}`+'/userlist');
  }
 
}
