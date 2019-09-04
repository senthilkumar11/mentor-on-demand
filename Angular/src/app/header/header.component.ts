import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../service/authentication.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  isLogged:Boolean;
  constructor(private anthentication:AuthenticationService) { }

  ngOnInit() {
    this.isLogged=this.anthentication.isLoggedIn();
  }
 
}
