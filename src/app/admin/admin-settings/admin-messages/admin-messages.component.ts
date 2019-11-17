import { Component, OnInit } from '@angular/core';
import { AdminMessage, DEFAULT_ADMIN_MESSAGE } from './admin-messages.model';
import { AdminService } from '../../admin.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-admin-messages',
  templateUrl: './admin-messages.component.html',
  styleUrls: ['./admin-messages.component.css']
})
export class AdminMessagesComponent implements OnInit {

  welcomeMessage : AdminMessage = DEFAULT_ADMIN_MESSAGE;
  systemMessage : AdminMessage = DEFAULT_ADMIN_MESSAGE;

  constructor(private _adminService: AdminService, 
    private _toastr: ToastrService) { }

  ngOnInit() {
    this.getAllAdminMessages();
  }

  getAllAdminMessages() {
    this._adminService.getAllAdminMessages().subscribe(responseList=>{
      this.welcomeMessage = responseList[0];
      this.systemMessage = responseList[1];
    },error => {
      
    });
  }

  saveWelcomeMessage() {
    this.welcomeMessage.type = 'welcome';
    this._adminService.saveOrUpdateMessage(this.welcomeMessage).subscribe(response=>{
      this._toastr.success("Successfully saved welcome message.");
    },
    error=>{
      this._toastr.error("Failed to save welcome message.");
    });
  }
  
  saveSystemMessage() {
    this.systemMessage.type = 'system';
    this._adminService.saveOrUpdateMessage(this.systemMessage).subscribe(response=>{
      this._toastr.success("Successfully saved system message.");
    },
    error=>{
      this._toastr.error("Failed to save system message.");
    });
  }

}
