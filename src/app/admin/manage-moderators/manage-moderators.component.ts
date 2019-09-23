import { Component, OnInit, TemplateRef } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { ModeratorsService } from 'src/app/moderators/moderators.service';
import { FormGroup, FormBuilder } from '@angular/forms';
import { NgxSpinnerService } from 'ngx-spinner';

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
    private _fb: FormBuilder,
    private spinner: NgxSpinnerService
  ) { }

  ngOnInit() {
    this.spinner.show();
    this._moderatorsService.getAllModerators().subscribe(response => {
      this.moderatorsList = response;
     this.spinner.hide();
    })
  }

  openModal(template: TemplateRef<any>) {
    this.currentlyEditingItem = 'new';
    this.bsModalRef = this.modalService.show(template);
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
