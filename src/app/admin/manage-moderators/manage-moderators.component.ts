import { Component, OnInit, TemplateRef, OnDestroy } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { ModeratorsService } from 'src/app/moderators/moderators.service';
import { FormGroup, FormBuilder } from '@angular/forms';
import { NgxSpinnerService } from 'ngx-spinner';
import { AdminService } from '../admin.service';
import { ToastrService } from 'ngx-toastr';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-manage-moderators',
  templateUrl: './manage-moderators.component.html',
  styleUrls: ['./manage-moderators.component.css']
})
export class ManageModeratorsComponent implements OnInit, OnDestroy {

  contentForm: FormGroup;
  addEditModSubscriber;
  currentlyEditingItem = null;
  currentlyDeletingItem = null;
  bsModalRef: BsModalRef;
  public moderatorsList = [];

  constructor(private modalService: BsModalService,
    private _moderatorsService: ModeratorsService,
    private _adminService: AdminService,
    private _fb: FormBuilder,
    private toastr: ToastrService,
    private spinner: NgxSpinnerService
  ) { }

  ngOnInit() {
    this.spinner.show();
    this.fetchModeratorsList();
    this.closeModalFunc();
  }

  fetchModeratorsList() {
    this._moderatorsService.getAllModerators().subscribe(response => {
      this.moderatorsList = response;
      this.spinner.hide();
    },
      error => {
        this.spinner.hide();
      });
  }

  openModal(template: TemplateRef<any>) {
    this.currentlyEditingItem = 'new';
    this.bsModalRef = this.modalService.show(template);
  }

  closeModalFunc() {
    this.addEditModSubscriber = this._adminService.addModeratorResponse.subscribe(moderator => {
      if (moderator !== null && this.currentlyEditingItem === 'new') {
        this.moderatorsList.push(moderator);
        if (this.bsModalRef) {
          this.bsModalRef.hide();
        }
      } else if (moderator !== null && this.currentlyEditingItem !== 'new') {
        const moderatorIndex = this.moderatorsList.indexOf(this.currentlyEditingItem);
        this.moderatorsList.splice(moderatorIndex, 1);
        this.moderatorsList.push(moderator);
        if (this.bsModalRef) {
          this.bsModalRef.hide();
        }
      }
    });
  }

  viewModerator(moderator, viewModeratorModal: TemplateRef<any>) {
    this.currentlyEditingItem = moderator;
    this.bsModalRef = this.modalService.show(viewModeratorModal);
  }

  editModerator(moderator, editModeratorModal: TemplateRef<any>) {
    this.currentlyEditingItem = moderator;
    this.bsModalRef = this.modalService.show(editModeratorModal);
  }

  deleteModerator(row, template: TemplateRef<any>) {
    this.bsModalRef = this.modalService.show(template, { class: 'modal-md' });
    this.currentlyDeletingItem = row;
  }

  confirmDelete(confirmed: boolean) {
    if (confirmed) {
      this._moderatorsService.deleteModerator(this.currentlyDeletingItem.userId).subscribe(response => {
        console.log(response)
        const moderatorIndex = this.moderatorsList.indexOf(this.currentlyDeletingItem);
        this.moderatorsList.splice(moderatorIndex, 1);
        this.bsModalRef.hide();
        this.toastr.success("Successfully deleted moderator!");
      }, error => {
        this.toastr.error("Failed to delete moderator!");
      })
    } else {
      this.bsModalRef.hide();
    }
  }

  ngOnDestroy() {
    this.addEditModSubscriber.unsubscribe();
  }
}
