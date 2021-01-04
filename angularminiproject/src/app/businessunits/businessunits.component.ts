import { Component, OnInit } from '@angular/core';
import {NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { NgForm } from '@angular/forms';
@Component({
  selector: 'app-businessunits',
  templateUrl: './businessunits.component.html',
  styleUrls: ['./businessunits.component.css']
})
export class BusinessunitsComponent implements OnInit {

  constructor(private modalService: NgbModal, private ngForm: NgForm) { }

  ngOnInit(): void {
  }

 

}
