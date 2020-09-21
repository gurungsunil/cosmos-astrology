import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ModeratorsService } from '../../../moderators/moderators.service';
import { ModeratorModel } from 'src/app/moderators/moderator.model';
import { NgxSpinnerService } from 'ngx-spinner';
import { AdminService } from '../../admin.service';

@Component({
  selector: 'app-add-edit-moderator',
  templateUrl: './add-edit-moderator.component.html',
  styleUrls: ['./add-edit-moderator.component.css']
})
export class AddEditModeratorComponent implements OnInit {

  @Input() currentlyEditingItem;
  public mouseOnSubmit: boolean = false;
  public reactiveForm: FormGroup;
  invalid: boolean = false;
  invalidMessage: string;

  constructor(private _fb: FormBuilder,
    private _moderatorsService: ModeratorsService,
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
  if (this.currentlyEditingItem === 'new'){
    this.saveForm(reactiveForm);
  } else {
    this.updateForm(reactiveForm);
  }
  }

  saveForm(reactiveForm) {
    this.spinner.show();
    let moderatorModel : ModeratorModel = reactiveForm.value;
    this._moderatorsService.saveModerator(moderatorModel).subscribe(response=>{
      this._adminService.addModeratorResponse.next(response);
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
    let moderatorModel : ModeratorModel = reactiveForm.value;
    delete moderatorModel.password;
    this._moderatorsService.updateModerator(moderatorModel.userId, moderatorModel).subscribe(response=>{
      this._adminService.addModeratorResponse.next(response);
      this.spinner.hide();
    }
    ,
    error=>{
      this.invalid = true;
      this.invalidMessage = error.message;
      this.spinner.hide();
    });
  }

}
