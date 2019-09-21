import { Component, OnInit, TemplateRef } from '@angular/core';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { ModeratorsService } from './moderators.service';

@Component({
  selector: 'app-moderators',
  templateUrl: './moderators.component.html',
  styleUrls: ['./moderators.component.css']
})
export class ModeratorsComponent implements OnInit {

  constructor(private modalService: BsModalService
  ) { }

  ngOnInit() {
  }

}
