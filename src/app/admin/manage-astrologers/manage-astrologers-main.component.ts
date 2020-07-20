import { Component, OnInit, TemplateRef } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { FormGroup, FormBuilder } from '@angular/forms';
import { AstrologersService } from 'src/app/astrologers/astrologers.service';
import { AdminService } from '../admin.service';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-manage-astrologers-main',
  template: '<router-outlet></router-outlet>'
})
export class ManageAstrologersMainComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
}
