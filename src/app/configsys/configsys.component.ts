import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import { Configsys } from '../configsys.model';
import { ConfigsysService } from '../configsys.service';
import {MatTableDataSource} from '@angular/material/table';
import {HttpClient} from '@angular/common/http';
import {animate, state, style, transition, trigger} from '@angular/animations';
import { FormControl } from '@angular/forms';
import * as jspdf from 'jspdf';
import html2canvas from 'html2canvas';  


@Component({
  selector: 'app-configsys',
  templateUrl: './configsys.component.html',
  styleUrls: ['./configsys.component.css'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({height: '0px', minHeight: '0'})),
      state('expanded', style({height: '*'})),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ],
})

export class ConfigsysComponent implements OnInit {
  displayedColumns = ['Hostname', 'Swap', 'Memory', 'CPU CORE', 'Local Storage', 'Patern', 'Date', 'status'];
  displayedColumnsVersion = ['mount point', 'file system', 'taille'];
  listData: MatTableDataSource<any>;
  array: any;
  expandedElement: Configsys | null;
  @ViewChild(MatSort, {static:true}) sort: MatSort;
  @ViewChild(MatPaginator, {static:true}) paginator: MatPaginator; 
  @ViewChild('filter', {static:true}) filter: ElementRef;
  


  filterValues = { Patern: '', status: '' };
  public doFilter = (value: string) => {
    this.listData.filter = value.trim().toLocaleLowerCase();
  }

   constructor(private configsysService: ConfigsysService, private router: Router) { }

  ngOnInit() {
   this.configsysService.getConfigsys().subscribe(
     list => {
       this.array = list;
       this.listData = new MatTableDataSource(this.array);
       this.listData.sort = this.sort;
       this.listData.paginator = this.paginator;
       });   

 }
  public captureScreen()  
  {  
    var data = document.getElementById('contentToConvert');  
    html2canvas(data).then(canvas => {  
      // Few necessary setting options  
      var imgWidth = 208;   
      var pageHeight = 295;    
      var imgHeight = canvas.height * imgWidth / canvas.width;  
      var heightLeft = imgHeight;  
  
      const contentDataURL = canvas.toDataURL('image/png')  
      let pdf = new jspdf('p', 'mm', 'a4'); // A4 size page of PDF  
      var position = 0;  
      pdf.addImage(contentDataURL, 'PNG', 0, position, imgWidth, imgHeight)  
      pdf.save('MYPdf.pdf'); // Generated PDF   
    });  
  }  

}
