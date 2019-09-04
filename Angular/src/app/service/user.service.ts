import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import {Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private baseUrl = 'http://localhost:9091';
  constructor(private http: HttpClient) { }

  registerUser(user:Object):Observable<any>
  {
  return this.http.post(`${this.baseUrl}`+`/registeruser`,user);
  }
}
