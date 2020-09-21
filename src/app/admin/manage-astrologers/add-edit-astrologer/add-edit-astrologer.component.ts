import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AstrologersService } from 'src/app/astrologers/astrologers.service';
import { AdminService } from '../../admin.service';
import { NgxSpinnerService } from 'ngx-spinner';
import { AstrologerModel } from 'src/app/astrologers/astrologer.model';

@Component({
  selector: 'app-add-edit-astrologer',
  templateUrl: './add-edit-astrologer.component.html',
  styleUrls: ['./add-edit-astrologer.component.css']
})
export class AddEditAstrologerComponent implements OnInit {

  @Input() currentlyEditingItem;

  public reactiveForm: FormGroup;
  public mouseOnSubmit: boolean = false;
  invalid: boolean = false;
  invalidMessage: string;

  constructor(private _fb: FormBuilder,
    private _astrologersService: AstrologersService,
    private _adminService: AdminService,
    private spinner: NgxSpinnerService) { }

  ngOnInit() {
    this.initializeForm();
    if (this.currentlyEditingItem !== 'new') {
      this.patchFormForEdit();
    }
  }

  patchFormForEdit() {
    this.reactiveForm.patchValue({
      userId: this.currentlyEditingItem.userId,
      firstName: this.currentlyEditingItem.firstName,
      lastName: this.currentlyEditingItem.lastName,
      email: this.currentlyEditingItem.email,
      phoneNumber: this.currentlyEditingItem.phoneNumber,
      gender: this.currentlyEditingItem.gender,
      city: this.currentlyEditingItem.city,
      state: this.currentlyEditingItem.state,
      country: this.currentlyEditingItem.country,
      profileImageUrl: this.currentlyEditingItem.profileImageUrl
    })
  }
  initializeForm() {
    this.reactiveForm = this._fb.group({
      userId: [null],
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: [''],
      password:[''],
      phoneNumber: ['', Validators.required],
      gender: ['', Validators.required],
      city: ['', Validators.required],
      state: ['', Validators.required],
      country: ['', Validators.required],
      profileImageUrl: ['']
    });

    if (this.currentlyEditingItem == 'new') {
      this.reactiveForm.controls['email'].setValidators([Validators.required]);
      this.reactiveForm.controls['password'].setValidators([Validators.required]);
    } else {
      this.reactiveForm.controls['email'].disable();
      this.reactiveForm.controls['password'].disable();
    }
  }

  saveOrUpdateForm(reactiveForm) {
  if (this.currentlyEditingItem == 'new'){
    this.saveForm(reactiveForm);
  } else {
    this.updateForm(reactiveForm);
  }
  }

  saveForm(reactiveForm) {
    this.spinner.show();
    let astrologerModel : AstrologerModel = reactiveForm.value;
    this._astrologersService.saveAstrologer(astrologerModel).subscribe(response=>{
      this._adminService.addAstrologerResponse.next(response);
      this.spinner.hide();
    },
    error=>{
      this.invalid = true;
      this.invalidMessage = error.message;
      this.spinner.hide();
    });
  }

  updateForm(reactiveForm) {
    this.spinner.show();
    let astrologerModel : AstrologerModel = reactiveForm.value;
    delete astrologerModel.password;
    this._astrologersService.updateAstrologer(astrologerModel.userId, astrologerModel).subscribe(response=>{
      this._adminService.addAstrologerResponse.next(response);
      this.spinner.hide();
    }
    ,
    error=>{
      this.invalid = true;
      console.log(error);
      this.invalidMessage = error.message;
      this.spinner.hide();
    });
  }
}
