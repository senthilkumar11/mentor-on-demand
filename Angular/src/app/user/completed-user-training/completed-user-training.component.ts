import { Component, OnInit } from '@angular/core';
import { TrainingService } from 'src/app/service/training.service';

import { Training } from 'src/app/models/training';
@Component({
  selector: 'app-completed-user-training',
  templateUrl: './completed-user-training.component.html',
  styleUrls: ['./completed-user-training.component.css']
})
export class CompletedUserTrainingComponent implements OnInit {

 
  training:Training[];

  constructor(private trainingService:TrainingService) { }

  ngOnInit() {
    let email = sessionStorage.getItem("username");
  console.log(email);
  this.trainingService.getUserTraining(email).subscribe(response => {this.training = response
  console.log(response);
  });
  }

  isCompleted(temp)
  {
    console.log("one")
    if(temp>=100)
    return true;
    else
    return false;
  }
  
}
