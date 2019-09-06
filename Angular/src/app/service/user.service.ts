import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import {Observable } from 'rxjs';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private baseUrl = 'http://localhost:9091';
  constructor(private http: HttpClient) { }

  registerUser(user:Object):Observable<any>
  {
    console.log(user)
  return this.http.post(`${this.baseUrl}`+`/registeruser`,user);
  }
  
  getUserbyEmail(email:string):Observable<User>
  {
    console.log("getUserbyEmail");
    return this.http.get<User>(`${this.baseUrl}`+`/finduser/`+email);
  }
}
