import { FileUploadService } from './file-upload.service';
import { ToastrService } from 'ngx-toastr';
import { HttpEventType, HttpResponse } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-file-upload',
  templateUrl: './file-upload.component.html',
  styleUrls: ['./file-upload.component.css']
})
export class FileUploadComponent implements OnInit {

  @Input() currentImage: FormControl;
  currentFileUpload;

  constructor(
    private uploadFileService: FileUploadService,
    private spinner: NgxSpinnerService,
    private toastr: ToastrService) { }

  ngOnInit() {
  }

  selectFile(event) {
    this.currentFileUpload = event.target.files[0];
    const maxSize = 5048;
    if ((this.currentFileUpload.size/1024) > maxSize) {
      this.toastr.error("Images should be less than 5MB");
      return;
    }
    this.fileClicked();
  }

  fileClicked() {
    this.uploadFileService
      .pushFileToStorage(this.currentFileUpload)
      .subscribe(event => {
        if (event.type === HttpEventType.UploadProgress) {
          this.spinner.show();
        } else if (event instanceof HttpResponse) {
          const downloadUri = this.getFileDownloadUri(event.body);
          this.currentImage.setValue(downloadUri);
          this.currentImage.updateValueAndValidity();
          this.currentFileUpload = null;
          this.toastr.success("File successfully uploaded");
          this.spinner.hide();
        }
      });
  }

  getFileDownloadUri(response): string {
    return JSON.parse(response).fileDownloadUri;
  }

}
