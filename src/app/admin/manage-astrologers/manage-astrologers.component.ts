import { Component, OnInit, TemplateRef } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { FormGroup, FormBuilder } from '@angular/forms';
import { AstrologersService } from 'src/app/astrologers/astrologers.service';
import { AdminService } from '../admin.service';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-manage-astrologers',
  templateUrl: './manage-astrologers.component.html',
  styleUrls: ['./manage-astrologers.component.css']
})
export class ManageAstrologersComponent implements OnInit {

  contentForm: FormGroup;
  currentlyEditingItem = null;
  bsModalRef: BsModalRef;
  public astrologersList = null;

  constructor(private modalService: BsModalService,
    private _astrologersService: AstrologersService,
    private _adminService: AdminService,
    private _fb: FormBuilder,
    private spinner: NgxSpinnerService
  ) { }

  ngOnInit() {
    this.spinner.show();
    this._astrologersService.getAllAstrologers().subscribe(response => {
      this.astrologersList = response;
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
    this._adminService.addAstrologerResponse.subscribe(astrologer=>{
      if (astrologer !== null){
        this.astrologersList.push(astrologer);
        this.bsModalRef.hide();
      }
    })
  }

  viewAstrologer(astrologer, viewAstrologerModal: TemplateRef<any>) {
    this.currentlyEditingItem = astrologer;
    this.bsModalRef = this.modalService.show(viewAstrologerModal);
  }

  editAstrologer() {

  }

  deleteAstrologer() {

  }

}
