import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { NgxSpinnerService } from 'ngx-spinner';
import { AstrologersService } from '../astrologers.service';
import { AstrologersTaskModel, QueryModel, DEFAULT_QUERY_MODEL } from '../astrologer.model';
import { AuthenticationService } from 'src/app/auth/authentication.service';

@Component({
  selector: 'app-moderators-task',
  templateUrl: './astrologers-task.component.html',
  styleUrls: ['./astrologers-task.component.css']
})
export class AstrologersTaskComponent implements OnInit {

  astrologersTaskModel: AstrologersTaskModel = null;
  taskObject : QueryModel = DEFAULT_QUERY_MODEL;

  constructor(private _astrologersServive: AstrologersService,
    private _toastr: ToastrService,
    private spinner: NgxSpinnerService,
    private _authService: AuthenticationService) { }

  ngOnInit() {
  }

  getUaQuestions() {
    this.spinner.show();
    this._astrologersServive.getUaQuestions().subscribe(response=>{
      if (response.success) {
        this.astrologersTaskModel = response;
        this.taskObject.userId = this.astrologersTaskModel.questionerDetails.user.userId;
        this.taskObject.nepQuestionId = this.astrologersTaskModel.questionerDetails.questionId;
      }
      this.spinner.hide();
    },
    error=>{
      this._toastr.error("Failed to fetch task. Try again, later");
      this.spinner.hide();
    })
  }

  submitThisQuestion() {
    this.spinner.show();
   this._astrologersServive.postAstrologerAnswer(this.taskObject).subscribe(response=>{
     this.astrologersTaskModel = null;
     this.spinner.hide();
     this._toastr.success("Reply sent to user.");
   }, 
   error=>{
    this.spinner.hide();
    this._toastr.error("Failed to send reply.");
   })
  }
 
}
