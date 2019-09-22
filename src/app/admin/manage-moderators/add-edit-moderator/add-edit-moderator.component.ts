import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { ModeratorsService } from '../../../moderators/moderators.service';
import { ModeratorModel } from 'src/app/moderators/moderator.model';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-add-edit-moderator',
  templateUrl: './add-edit-moderator.component.html',
  styleUrls: ['./add-edit-moderator.component.css']
})
export class AddEditModeratorComponent implements OnInit {

  @Input() currentlyEditingItem;

  public reactiveForm: FormGroup;

  constructor(private _fb: FormBuilder, 
    private _moderatorsService: ModeratorsService,
    private spinner: NgxSpinnerService) { }

  ngOnInit() {
    this.initializeForm();
  }

  initializeForm() {
    this.reactiveForm = this._fb.group({
      userId: [null],
      firstName: [''],
      lastName: [''],
      email: [''],
      password:[''],
      phoneNumber: [''],
      gender: [''],
      city: [''],
      state: [''],
      country: ['']
    });
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
    this._moderatorsService.saveOrUpdateModerator(moderatorModel).subscribe(response=>{
      console.log(response);
      this.spinner.hide();
    },
    error=>{
      this.spinner.hide();
    });
  }

  updateForm(reactiveForm) {

  }

}
