import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Login } from '../models/login';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private baseUrl = 'http://localhost:9091';

  constructor(private httpClient:HttpClient) { }
  
    getUsers():Observable<any>
  {
    console.log("get login");
    return this.httpClient.get<Login[]>(`${this.baseUrl}`+'/getlogin');
  }
  
}
