import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { mustMatch } from '../../forgot-password/must-match.validator';
import { AccountService } from '../account.service';
import { ChangePasswordModel } from './change-password.model';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { AuthenticationService } from 'src/app/auth/authentication.service';

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.css']
})
export class ChangePasswordComponent implements OnInit {

  changePasswordForm: FormGroup;
  submitted = false;
  wrongPassword = false;

  constructor(private _fb: FormBuilder, private accountService: AccountService,
    private toastr: ToastrService,
    private router: Router,
    public authService: AuthenticationService) { }

  ngOnInit() {
    this.initializeForm();
  }

      // convenience getter for easy access to form fields
      get f() { return this.changePasswordForm.controls; }

  initializeForm() {
    this.changePasswordForm = this._fb.group({
      currentPassword: ['', Validators.required],
      newPassword: ['', [Validators.required, Validators.minLength(8)]],
      confirmNewPassword: ['', Validators.required]
    },
    {
      validators: mustMatch('newPassword', 'confirmNewPassword')
  })
  }

  submitNewPassword() {
    this.submitted = true;

    if (this.changePasswordForm.invalid) {
      return;
    }

    let changePasswordModel : ChangePasswordModel = {
      oldPassword: this.changePasswordForm.get('currentPassword').value,
      newPassword: this.changePasswordForm.get('newPassword').value
    }
    this.accountService.changePassword(changePasswordModel).subscribe(response=>{
      this.authService.logout();
      this.router.navigate(['/login']);
      this.toastr.success("Your password has been reset. Please log in again.");
    },
    error=>{
      if (error.status == '200') {
      this.router.navigate(['/login']);
      this.toastr.success("Your password has been reset. You now must log in again.");
      } else {
        this.toastr.error("Failed!");
        this.wrongPassword = true;
      }
    })
    
  }

}
