import { Component, OnInit } from '@angular/core';
import { ModeratorsTaskModel } from './moderators-task.model';
import { ModeratorsService } from '../moderators.service';

@Component({
  selector: 'app-moderators-task',
  templateUrl: './moderators-task.component.html',
  styleUrls: ['./moderators-task.component.css']
})
export class ModeratorsTaskComponent implements OnInit {

  moderatorsTaskModel: ModeratorsTaskModel = null;

  constructor(private _moderatorsService: ModeratorsService) { }

  ngOnInit() {
  }

  getEngQuestionForModerator() {
    this._moderatorsService.getEngQuestionForModerator().subscribe(response=> {
      console.log(response);
      this.moderatorsTaskModel = response;
    })
  }

  skipThisQuestion(engQuesId) {
    this._moderatorsService.skipEngQuestionForModerator(engQuesId).subscribe(response=>{
      console.log(response);
    })
  }

}
