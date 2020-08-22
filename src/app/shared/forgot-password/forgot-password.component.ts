import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { SharedService } from "../shared.service";
import { HttpErrorResponse } from "@angular/common/http";
import { NgxSpinnerService } from "ngx-spinner";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { mustMatch } from "./must-match.validator";
import { ToastrService } from "ngx-toastr";

@Component({
  selector: "app-forgot-password",
  templateUrl: "./forgot-password.component.html",
  styleUrls: [
    "../../auth/login/login.component.css",
    "forgot-password.component.css",
  ],
})
export class ForgotPasswordComponent implements OnInit {
  email: string;
  emailStatus: string = "NOT_SENT";

  otpCode: string = "";
  otpCodeStatus: string = "NOT_SENT";

  passwordForm: FormGroup;
  submitted = false;

  constructor(
    private route: ActivatedRoute,
    private sharedService: SharedService,
    private spinner: NgxSpinnerService,
    private fb: FormBuilder,
    private toastr: ToastrService,
    private router: Router
  ) {}

  ngOnInit() {
    this.email = this.route.snapshot.paramMap.get("email");

    this.passwordForm = this.fb.group(
      {
        newPassword: ["", [Validators.required, Validators.minLength(8)]],
        confirmPassword: ["", Validators.required],
      },
      {
        validators: mustMatch("newPassword", "confirmPassword"),
      }
    );
  }

  sendCodeToMail() {
    this.spinner.show();
    this.sharedService.sendCodeToMail(this.email).subscribe(
      (response) => {
        if (response.status == "OK") {
          this.emailStatus = "VALID";
        } else {
          this.emailStatus = "INVALID";
        }
        this.spinner.hide();
      },
      (error) => {
        this.emailStatus = "INVALID";
        this.spinner.hide();
      }
    );
  }

  verifyCode() {
    this.sharedService.validateOTP(this.otpCode).subscribe(
      (response) => {
        this.otpCodeStatus = "VALID";
        this.toastr.success("Code verified!");
      },
      (error) => {
        if (error.status == "404") {
          this.otpCodeStatus = "INVALID";
          this.toastr.error("Wrong code!");
        } else if (error.status == "406") {
          this.otpCodeStatus = "EXPIRED";
          this.toastr.error("Code expired");
        }
      }
    );
  }

  submitNewPassword() {
    this.submitted = true;

    if (this.passwordForm.invalid) {
      return;
    }

    const password = this.passwordForm.get("newPassword").value;
    this.sharedService.submitNewPassword(this.otpCode, password).subscribe(
      (response) => {
        this.router.navigate(['/login']);
        this.toastr.success("Your password has been reset. Please log in again.");
      },
      (error) => {
       this.toastr.error("Oops, your token is invalid")
      }
    );
  }
}
