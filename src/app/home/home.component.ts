import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators, FormControl} from '@angular/forms';
import {STEPPER_GLOBAL_OPTIONS} from '@angular/cdk/stepper';
import {FileUploader} from "ng2-file-upload";
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";
import { HomeService } from '../home.service';
import { NgxUiLoaderService } from 'ngx-ui-loader';
import { ToastrService } from 'ngx-toastr';

export interface Patern {
  name: string;
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [{
    provide: STEPPER_GLOBAL_OPTIONS, useValue: {showError: true}
  }]
})
export class HomeComponent implements OnInit {
  public uploader:FileUploader = new FileUploader({
    isHTML5: true
  });
  title: string = 'File Upload';
  selectedValue: string= ''; 
  secondFormGroup: FormGroup;
  paternControl = new FormControl('', [Validators.required]);
  paterns: Patern[] = [
    {name: 'small'},
    {name: 'medium'},
    {name: 'high'},
    {name: 'veryhigh'},
  ];
  constructor(private ngxService: NgxUiLoaderService, private toastr: ToastrService, private _formBuilder: FormBuilder, private http: HttpClient, private homeService: HomeService) { }
  
  uploadSubmit(){
        for (var i = 0; i < this.uploader.queue.length; i++) {
          let fileItem = this.uploader.queue[i]._file;
          if(fileItem.size > 10000000){
            alert("Each File should be less than 10 MB of size.");
            return;
          }
        }
        for (var j = 0; j < this.uploader.queue.length; j++) {
          let data = new FormData();
          let fileItem = this.uploader.queue[j]._file;
          console.log(fileItem.name);
          data.append('file', fileItem);
          data.append('fileSeq', 'seq'+j);
          data.append( 'dataType', this.secondFormGroup.controls.type.value);
          this.uploadFile(data).subscribe(data => console.log(data.message));
        }
        this.uploader.clearQueue();
  }
  uploadFile(data: FormData): Observable<any> {
    return this.http.post<any>('http://192.168.56.101:3000/api/upload', data);
  }

   myFunc(data: string){
   this.homeService.getshell(data).subscribe(
    response => {
           console.log(response);
           this.toastr.info('Done');

   }); 
   }


  
  ngOnInit() {
    this.secondFormGroup = this._formBuilder.group({
      document: [null, Validators.required],
      type: [null]
    });
     this.ngxService.start(); // start foreground loading with 'default' id

    // Stop the foreground loading after 5s
    setTimeout(() => {
      this.ngxService.stop(); // stop foreground loading with 'default' id
    }, 5000);

    // OR
    this.ngxService.startBackground('do-background-things');
    // Do something here...
    this.ngxService.stopBackground('do-background-things');
  }

  
}

