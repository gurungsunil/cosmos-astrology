import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
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

  constructor(private _fb: FormBuilder, 
    private _astrologersService: AstrologersService,
    private _adminService: AdminService,
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
    let astrologerModel : AstrologerModel = reactiveForm.value;
    this._astrologersService.saveOrUpdateAstrologers(astrologerModel).subscribe(response=>{
      this._adminService.addAstrologerResponse.next(response);
      this.spinner.hide();
    },
    error=>{
      this.spinner.hide();
    });
  }

  updateForm(reactiveForm) {

  }
}
