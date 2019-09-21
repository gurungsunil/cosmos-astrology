import { Component, OnInit, TemplateRef } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { ModeratorsService } from 'src/app/moderators/moderators.service';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-manage-moderators',
  templateUrl: './manage-moderators.component.html',
  styleUrls: ['./manage-moderators.component.css']
})
export class ManageModeratorsComponent implements OnInit {

  contentForm: FormGroup;
  currentlyEditingItem = null;
  bsModalRef: BsModalRef;
  public empData: Object;
  public temp: Object = false;

  constructor(private modalService: BsModalService,
    private _moderatorsService: ModeratorsService,
    private _fb: FormBuilder
  ) { }

  ngOnInit() {
    
    this._moderatorsService.getAllModerators().subscribe(response => {
      this.empData = response;
      this.temp = true;
    })
  }

  openModal(template: TemplateRef<any>) {
    this.currentlyEditingItem = 'new';
    this.bsModalRef = this.modalService.show(template);
  }

}
