import { Component, OnInit, TemplateRef } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-manage-astrologers',
  templateUrl: './manage-astrologers.component.html',
  styleUrls: ['./manage-astrologers.component.css']
})
export class ManageAstrologersComponent implements OnInit {

  bsModalRef: BsModalRef;
  currentlyEditingItem;

  constructor(private modalService: BsModalService) { }

  ngOnInit() {
  }

  openModal(template: TemplateRef<any>) {
    this.bsModalRef = this.modalService.show(template);
  }

}
