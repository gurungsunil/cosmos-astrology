import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SharedService } from '../shared.service'
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
    selector: 'app-user-qa-history',
    templateUrl: './user-qa-history.component.html',
    styleUrls: ['user-qa-history.component.css']
})
export class UserQaHistoryComponent implements OnInit {

    userQaHistory = null;
    taskError = null;

    constructor(private activatedRoute: ActivatedRoute,
        private _sharedService: SharedService,
        private spinner: NgxSpinnerService,
        private router: Router) {
            this.router.routeReuseStrategy.shouldReuseRoute = () => false;
         }

    ngOnInit() {
        this.getUserQaHistory();
    }
    
    getUserQaHistory() {
        this.spinner.show();
        try {
            let userId = this.activatedRoute.snapshot.paramMap.get('userId');
            this._sharedService.getUserQaHistory(Number(userId)).subscribe(response =>{
                this.userQaHistory = response;
                this.spinner.hide();
            },
            error => {
                this.spinner.hide();
                if (error.toString().startsWith("No any user found")) {
                    this.taskError = "Sorry, no user exists with ID: "+ userId;
                } else {
                    this.taskError = userId+ " is not a valid ID. Please enter a valid number.";
                } 
            })
        } catch (err) {
            console.log(err)
        }
    }


}
