import { Component, OnInit, TemplateRef } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { ModeratorsService } from 'src/app/moderators/moderators.service';
import { FormGroup, FormBuilder } from '@angular/forms';
import { NgxSpinnerService } from 'ngx-spinner';
import { AdminService } from '../admin.service';

@Component({
  selector: 'app-manage-moderators',
  templateUrl: './manage-moderators.component.html',
  styleUrls: ['./manage-moderators.component.css']
})
export class ManageModeratorsComponent implements OnInit {

  contentForm: FormGroup;
  currentlyEditingItem = null;
  bsModalRef: BsModalRef;
  public moderatorsList = null;

  constructor(private modalService: BsModalService,
    private _moderatorsService: ModeratorsService,
    private _adminService: AdminService,
    private _fb: FormBuilder,
    private spinner: NgxSpinnerService
  ) { }

  ngOnInit() {
    this.spinner.show();
    this._moderatorsService.getAllModerators().subscribe(response => {
      this.moderatorsList = response;
     this.spinner.hide();
    },
    error=>{
      this.spinner.hide();
      console.log(error);
    });
    this.closeModalFunc();
  }

  openModal(template: TemplateRef<any>) {
    this.currentlyEditingItem = 'new';
    this.bsModalRef = this.modalService.show(template);
  }

  closeModalFunc() {
    this._adminService.addModeratorResponse.subscribe(moderator=>{
      if (moderator !== null){
        this.moderatorsList.push(moderator);
        this.bsModalRef.hide();
      }
    })
  }

  viewModerator(moderator, viewModeratorModal: TemplateRef<any>) {
    this.currentlyEditingItem = moderator;
    this.bsModalRef = this.modalService.show(viewModeratorModal);
  }

  editModerator() {

  }

  deleteModerator() {

  }
}
