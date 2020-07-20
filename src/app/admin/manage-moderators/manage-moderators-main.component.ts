import { Component, OnInit, TemplateRef } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { FormGroup, FormBuilder } from '@angular/forms';
import { AstrologersService } from 'src/app/astrologers/astrologers.service';
import { AdminService } from '../admin.service';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-manage-moderators-main',
  template: '<router-outlet></router-outlet>'
})
export class ManageModeratorsMainComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
}
