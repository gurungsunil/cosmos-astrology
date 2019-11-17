import { Component, OnInit } from '@angular/core';
import { ModeratorsTaskModel, QuestionUnclearModel, TranslatedQuestionRequest } from './moderators-task.model';
import { ModeratorsService } from '../moderators.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-moderators-task',
  templateUrl: './moderators-task.component.html',
  styleUrls: ['./moderators-task.component.css']
})
export class ModeratorsTaskComponent implements OnInit {

  moderatorsTaskModel: ModeratorsTaskModel = null;
  taskObject = { questionUnclear: false, descriptionForUnclear: '' , translatedQuestion: ''}

  constructor(private _moderatorsService: ModeratorsService,
    private _toastr: ToastrService) { }

  ngOnInit() {
  }

  getEngQuestionForModerator() {
    this._moderatorsService.getEngQuestionForModerator().subscribe(response => {
      console.log(response);
      this.moderatorsTaskModel = response;
    })
  }

  skipThisQuestion(engQuesId) {
    this._moderatorsService.skipEngQuestionForModerator(engQuesId).subscribe(response => {
      console.log(response);
    })
  }

  markThisQuestionAsUnclear(moderatorsTaskModel: ModeratorsTaskModel) {
    this.taskObject.questionUnclear = true;
  }

  submitUnclearQuestionWithDescription(moderatorsTaskModel: ModeratorsTaskModel) {
    let questionUnclearModel : QuestionUnclearModel = {
      engQuestionId: moderatorsTaskModel.engQuesId,
      assignedModId: moderatorsTaskModel.assignedModId,
      description: this.taskObject.descriptionForUnclear,
      userId: moderatorsTaskModel.userId
    }

    this._moderatorsService.markQuestionAsUnclear(questionUnclearModel).subscribe(response=> {
      this._toastr.info("The question has been sent back to the user.")
    });
  }

  submitThisQuestion(moderatorsTaskModel: ModeratorsTaskModel) {
    let translatedQuestionRequest : TranslatedQuestionRequest = {
      engQsnId: moderatorsTaskModel.engQuesId,
      convertedQsn: this.taskObject.translatedQuestion,
      userId: moderatorsTaskModel.userId
    }

    this._moderatorsService.saveTranslatedQuestion(translatedQuestionRequest).subscribe(response=>{
      this._toastr.success("Your translation has been submitted.")
    });

  }

}
