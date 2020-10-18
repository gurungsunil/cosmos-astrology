import { Component, OnInit, TemplateRef } from '@angular/core';
import { AdminMessage, DEFAULT_ADMIN_MESSAGE } from './admin-messages.model';
import { AdminService } from '../../admin.service';
import { ToastrService } from 'ngx-toastr';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-admin-messages',
  templateUrl: './admin-messages.component.html',
  styleUrls: ['./admin-messages.component.css']
})
export class AdminMessagesComponent implements OnInit {

  public welcomeMessage: AdminMessage = DEFAULT_ADMIN_MESSAGE;
  public previousWelcomeMessages: Array<AdminMessage> = [];
  public systemMessage: AdminMessage = DEFAULT_ADMIN_MESSAGE;
  public previousSystemMessages: Array<AdminMessage> = [];
  public previousMessagesList: Array<AdminMessage> = [];
  public bsModalRef: BsModalRef;
  public currentlyEditingItem = null;
  public currentlyDeletingItem = null;

  constructor(
    private modalService: BsModalService,
    private _adminService: AdminService,
    private _toastr: ToastrService,
    private spinner: NgxSpinnerService) { }

  ngOnInit() {
    this.getAllAdminMessages();
  }

  getAllAdminMessages() {
    this.spinner.show();
    this._adminService.getAllAdminMessages().subscribe(([welcomeMessages, systemMessages]) => {
      this.previousWelcomeMessages = welcomeMessages;
      this.previousSystemMessages = systemMessages;
      this.spinner.hide();
    }, error => {
      this.spinner.hide();
    });
  }

  saveOrUpdateWelcomeMessage() {
    this.welcomeMessage.type = 'welcome';
    if (this.currentlyEditingItem == null) {
      this.saveWelcomeMessage();
    } else {
      this.updateWelcomeMessage();
    }
  }

  saveWelcomeMessage() {
    this._adminService.saveMessage(this.welcomeMessage).subscribe(response => {
      this._toastr.success("Successfully saved welcome message.");
      this.previousWelcomeMessages.push(response);
      this.currentlyEditingItem = null;
      DEFAULT_ADMIN_MESSAGE.text = '';
    },
      error => {
        this._toastr.error("Failed to save welcome message.");
      });
  }

  updateWelcomeMessage() {
    this._adminService.updateMessage(this.welcomeMessage).subscribe(response => {
      this._toastr.success("Successfully updated welcome message.");
      this.currentlyEditingItem = null;
      this.welcomeMessage = DEFAULT_ADMIN_MESSAGE;
      this.previousWelcomeMessages.splice(this.previousWelcomeMessages.indexOf(this.currentlyEditingItem), 1,response)
    },
      error => {
        this._toastr.error("Failed to update welcome message.");
      });
  }

  saveOrUpdateSystemMessage() {
    this.systemMessage.type = 'system';
    if (this.currentlyEditingItem == null) {
      this.saveSystemMessage();
    } else {
      this.updateSystemMessage();
    }
  }

  saveSystemMessage() {
    this._adminService.saveMessage(this.systemMessage).subscribe(response => {
      this._toastr.success("Successfully saved system message.");
      this.previousSystemMessages.push(response);
      this.currentlyEditingItem = null;
      DEFAULT_ADMIN_MESSAGE.text = '';
    },
      error => {
        this._toastr.error("Failed to save system message.");
      });
  }

  updateSystemMessage() {
    this._adminService.updateMessage(this.systemMessage).subscribe(response => {
      this._toastr.success("Successfully updated system message.");
      this.currentlyEditingItem = null;
      this.systemMessage = DEFAULT_ADMIN_MESSAGE;
      this.previousWelcomeMessages.splice(this.previousSystemMessages.indexOf(this.currentlyEditingItem), 1,response)
    },
      error => {
        this._toastr.error("Failed to update system message.");
      });
  }

  openModal(template: TemplateRef<any>, messageType: string) {
    this.bsModalRef = this.modalService.show(template, { class: 'modal-md' });
    if (messageType === 'welcome') {
      this.previousMessagesList = this.previousWelcomeMessages;
    } else if (messageType === 'system') {
      this.previousMessagesList = this.previousSystemMessages;
    }
    this.currentlyEditingItem = null;
    this.currentlyDeletingItem = null;
  }

  editThisMessage(message: AdminMessage) {
    this.currentlyEditingItem = message;
    this.bsModalRef.hide();
    if (message.type == 'welcome') {
      this.welcomeMessage = message;
    } else {
      this.systemMessage = message;
    }
  }

  deleteThisMessage(message: AdminMessage) {
    this.currentlyDeletingItem = message;
  }

  confirmDelete(confirm: boolean) {
    if (confirm) {
      this.spinner.show();
      this._adminService.deleteMessage(this.currentlyDeletingItem).subscribe(response => {
        this.spinner.hide();
        this._toastr.success("Successfully deleted message");
        let deletedMessageIndex = this.previousMessagesList.indexOf(this.currentlyDeletingItem);
        this.previousMessagesList.splice(deletedMessageIndex, 1);
        this.currentlyDeletingItem = null;
      },
        error => {
          this._toastr.error("Failed to delete message");
          this.spinner.hide();
        });
    } else {
      this.currentlyDeletingItem = null;
    }
  }

}
