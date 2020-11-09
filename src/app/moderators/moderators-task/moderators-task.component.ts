import { TruncateTextPipe } from './../../shared/pipes/truncate-string.pipe';
import { Component, OnInit, ɵCompiler_compileModuleSync__POST_R3__ } from '@angular/core';
import { ModeratorsTaskModel, QuestionUnclearModel, TranslatedQuestionRequest, TranslatedNepaliAnswer, TranslatedEnglishQuestion } from './moderators-task.model';
import { ModeratorsService } from '../moderators.service';
import { ToastrService } from 'ngx-toastr';
import { NgxSpinnerService } from 'ngx-spinner';
import { AuthenticationService } from 'src/app/auth/authentication.service';

@Component({
  selector: 'app-moderators-task',
  templateUrl: './moderators-task.component.html',
  styleUrls: ['./moderators-task.component.css']
})
export class ModeratorsTaskComponent implements OnInit {

  moderatorsTaskModel: ModeratorsTaskModel = null;
  taskObject = { questionUnclear: false, descriptionForUnclear: '', translation: '' };
  seeTranslation = false;
  taskError = null;

  constructor(private _moderatorsService: ModeratorsService,
              private _toastr: ToastrService,
              private spinner: NgxSpinnerService,
              private _authService: AuthenticationService) { }

  ngOnInit() {
  }

  getCurrentJob() {
    this.spinner.show();
    this._moderatorsService.getCurrentJob().subscribe(response => {
      this.moderatorsTaskModel = response;
      this.taskError = null;
      this.spinner.hide();
    }, error => {
      this.spinner.hide();
      if (error.status === 404) {
        this.taskError = 'There are no tasks in the system. Please try again later.';
      }
    });
   }

  skipThisQuestion(engQuesId) {
    this.spinner.show();
    this._moderatorsService.skipEngQuestionForModerator(engQuesId).subscribe(response => {
      console.log(response);
      this.moderatorsTaskModel = null;
      this.spinner.hide();
    });
  }

  markThisQuestionAsUnclear() {
    this.taskObject.questionUnclear = !this.taskObject.questionUnclear;
  }

  submitUnclearQuestionWithDescription() {
    this.spinner.show();
    const questionUnclearModel: QuestionUnclearModel = {
      engQuestionId: this.moderatorsTaskModel.currentJob.englishQuestion.engQuesId,
      assignedModId: this.moderatorsTaskModel.currentJob.englishQuestion.assignedModId,
      description: this.taskObject.descriptionForUnclear,
      userId: this.moderatorsTaskModel.currentJob.englishQuestion.userId
    };

    this._moderatorsService.markQuestionAsUnclear(questionUnclearModel).subscribe(response => {
      this.moderatorsTaskModel = null;
      this.taskObject = { questionUnclear: false, descriptionForUnclear: '', translation: '' };
      this.spinner.hide();
      this._toastr.success('The question has been sent back to the user.');
    }, error => {
      this.spinner.hide();
      this._toastr.error('Failed to submit!');
    });
  }

  submitThisQuestion() {
    if (this.moderatorsTaskModel.currentJob.currentJobType == 'nepali-answer') {
      this.submitTranslatedNepaliAnswer();
    } else if (this.moderatorsTaskModel.currentJob.currentJobType == 'english-question') {
      this.submitTranslatedEnglishQuestion();
    } else {
      this._toastr.error('Job type not recognized.');
    }

  }

  submitTranslatedNepaliAnswer() {
    this.spinner.show();
    let translatedNepaliAnswer: TranslatedNepaliAnswer;
    translatedNepaliAnswer = {
      nepQuestionId: this.moderatorsTaskModel.currentJob.nepaliAnswer.nepQuestionId,
      userId: this.moderatorsTaskModel.currentJob.nepaliAnswer.userId,
      translatedAns: this.taskObject.translation,
      moderatorId: this._authService.currentUser.appUserId
    };
    this._moderatorsService.saveTranslatedNepaliAnswer(translatedNepaliAnswer).subscribe(response => {
      this.spinner.hide();
      this._toastr.success('Task submitted successfully!');
      this.moderatorsTaskModel = null;
      this.taskObject = { questionUnclear: false, descriptionForUnclear: '', translation: '' };
    },
      error => {
        this.spinner.hide();
        this._toastr.error('Failed to submit task!');
      });
  }

  submitTranslatedEnglishQuestion() {
    this.spinner.show();
    let translatedEnglishQuestion: TranslatedEnglishQuestion;
    translatedEnglishQuestion = {
      engQsnId: this.moderatorsTaskModel.currentJob.englishQuestion.engQuesId,
      convertedQsn: this.taskObject.translation,
      userId: this.moderatorsTaskModel.currentJob.englishQuestion.userId
    };
    this._moderatorsService.saveTranslatedEnglishQuestion(translatedEnglishQuestion).subscribe(response => {
      this.spinner.hide();
      this._toastr.success('Task submitted successfully!');
      this.moderatorsTaskModel = null;
      this.taskObject = { questionUnclear: false, descriptionForUnclear: '', translation: '' };
    },
      error => {
        this.spinner.hide();
        this._toastr.error('Failed to submit task!');
      });
  }

  get validForTranslationSubmit() {
    if (this.taskObject.translation == '' || this.taskObject.questionUnclear) {
      return false;
    } else {
      return true;
    }
  }

}
