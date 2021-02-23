import { Component, OnInit } from '@angular/core';
import { AdminService } from '../../admin.service';
import { repeat } from 'rxjs/operators';
import { QuestionPrice, DEFAULT_QUESTION_PRICE } from './pricing.model';
import { NgForm } from '@angular/forms';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-pricing',
  templateUrl: './pricing.component.html',
  styleUrls: ['./pricing.component.css', '../admin-messages/admin-messages.component.css']
})
export class PricingComponent implements OnInit {
  questionPriceHistory: Array<QuestionPrice> = [];
  // newQuestionPrice: QuestionPrice = DEFAULT_QUESTION_PRICE;

  constructor(private _adminService: AdminService,
    private spinner: NgxSpinnerService,
    private toastr: ToastrService) { }

  ngOnInit() {
    this.getQuestionPrice();
  }

  getQuestionPrice() {
    this._adminService.getQuestionPrice().subscribe(response => {
      if (Array.isArray(response)) {
        this.questionPriceHistory = response;
      } else {
        this.questionPriceHistory.push(response);
      }
    })
  }

  saveQuestionPrice(questionPriceForm: NgForm) {
    this.spinner.show();
   var res=this._adminService.saveQuestionPrice(questionPriceForm.value).subscribe(response => {
    this.toastr.success("New question price has been set");
    this.spinner.hide();
    // TO DO: REMOVE THIS ONCE ALL THE PRICES COME 
    this.questionPriceHistory.pop();
    this.questionPriceHistory.push(response);
   }, 
   error=>{
    this.toastr.error("Failed to set question price");
    this.spinner.hide();
   })
   console.log(res);
  }

}
