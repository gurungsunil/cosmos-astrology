import { Component, OnInit, TemplateRef, OnDestroy } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { FormGroup, FormBuilder } from '@angular/forms';
import { AstrologersService } from 'src/app/astrologers/astrologers.service';
import { AdminService } from '../admin.service';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-manage-astrologers',
  templateUrl: './manage-astrologers.component.html',
  styleUrls: ['./manage-astrologers.component.css']
})
export class ManageAstrologersComponent implements OnInit, OnDestroy {

  contentForm: FormGroup;
  addEditAstSubscriber;
  currentlyEditingItem = null;
  bsModalRef: BsModalRef;
  public astrologersList = [];
  currentlyDeletingItem = null;

  constructor(private modalService: BsModalService,
    private _astrologersService: AstrologersService,
    private _adminService: AdminService,
    private _fb: FormBuilder,
    private toastr: ToastrService,
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
    this.addEditAstSubscriber = this._adminService.addAstrologerResponse.subscribe(astrologer=>{
      if (astrologer !== null && this.currentlyEditingItem == 'new'){
        this.astrologersList.push(astrologer);
        this.bsModalRef.hide();
      } else if  (astrologer !== null && this.currentlyEditingItem !== 'new'){
        const moderatorIndex = this.astrologersList.indexOf(this.currentlyEditingItem);
        this.astrologersList.splice(moderatorIndex, 1);
        this.astrologersList.push(astrologer);
        this.bsModalRef.hide();
      }
    })
  }

  viewAstrologer(astrologer, viewAstrologerModal: TemplateRef<any>) {
    this.currentlyEditingItem = astrologer;
    this.bsModalRef = this.modalService.show(viewAstrologerModal);
  }

  editAstrologer(astrologer, editAstrologerModal: TemplateRef<any>) {
    this.currentlyEditingItem = astrologer;
    this.bsModalRef = this.modalService.show(editAstrologerModal);
  }

  deleteAstrologer(row, template: TemplateRef<any>) {
    this.bsModalRef = this.modalService.show(template, { class: 'modal-md' });
    this.currentlyDeletingItem = row;
  }

  confirmDelete(confirmed: boolean) {
    if (confirmed) {
      this._astrologersService.deleteAstrologers(this.currentlyDeletingItem.userId).subscribe(response => {
        console.log(response)
        const astrologerIndex = this.astrologersList.indexOf(this.currentlyDeletingItem);
        this.astrologersList.splice(astrologerIndex, 1);
        this.bsModalRef.hide();
        this.toastr.success("Successfully deleted astrologer!");
      }, error => {
        this.toastr.error("Failed to delete astrologer!");
      })
    } else {
      this.bsModalRef.hide();
    }
  }

  ngOnDestroy() {
    this.addEditAstSubscriber.unsubscribe();
  }

}
