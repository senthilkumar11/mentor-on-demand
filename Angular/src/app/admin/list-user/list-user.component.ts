import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user';
import { AdminService } from 'src/app/service/admin.service';

@Component({
  selector: 'app-list-user',
  templateUrl: './list-user.component.html',
  styleUrls: ['./list-user.component.css']
})
export class ListUserComponent implements OnInit {

  user:User[];
  constructor(private adminService:AdminService) { }

  ngOnInit() {this.adminService.getUser().subscribe(response=> this.user=response)
  }


}
