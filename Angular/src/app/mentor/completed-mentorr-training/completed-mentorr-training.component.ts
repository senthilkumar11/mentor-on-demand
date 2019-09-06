import { Component, OnInit } from '@angular/core';
import { Training } from 'src/app/models/training';
import { TrainingService } from 'src/app/service/training.service';

@Component({
  selector: 'app-completed-mentorr-training',
  templateUrl: './completed-mentorr-training.component.html',
  styleUrls: ['./completed-mentorr-training.component.css']
})
export class CompletedMentorrTrainingComponent implements OnInit {

  training:Training[];

  constructor(private trainingService:TrainingService) { }

  ngOnInit() {
    let email = sessionStorage.getItem("username");
  console.log(email);
  this.trainingService.getMentorTraining(email).subscribe(response => {this.training = response
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
