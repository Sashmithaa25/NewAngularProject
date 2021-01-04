import { Component, OnInit, TemplateRef} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms'
import Swal from 'node_modules/sweetalert2/src/sweetalert2.js';
import {NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { NgForm } from '@angular/forms';
import { ClientsService } from '../clients.service';

declare let $: any;

interface ClientLists {
  idtype: string;
  id: string;
  name: string;
  industry: string;
  sub_industry: string;
  market: string;
  marketunits: string; }

@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.css']
})



export class ClientsComponent implements OnInit {
  closeResult:string;
  allClients:Object;
  public clientList: ClientLists[];
 
  constructor(public clientService:ClientsService, private modalService: NgbModal, private ngForm: NgForm) {
    this.clientList = [];
   }
  
   
 addClients(formObj)
 {
      console.log(formObj);
      this.clientService.createClients(formObj).subscribe((response) => {
        //$("#addUser").modal("hide");
        this.modalService.dismissAll();
        //sweetalert message popup
        Swal.fire({
          title: 'Hurray!!',
          text:   "Client has been added successfully",
          icon: 'success'
        });

        this.getLatestClient();
        console.log("Client Has been Added")
       });


 }
  getLatestClient()
  {
    this.clientService.getClients().subscribe(response => {
      this.allClients=response
    });
  }
  

  ngOnInit(): void {

    this.clientService.getClients().subscribe(data => {
      this.clientList=data as ClientLists[];
});

  }
  
 

 
    
  
  /*openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template,{class: 'modal-lg',  backdrop: 'static'});
  }*/

  open(content) {
    console.log("Welcome");
    this.modalService.open(content, { size: 'lg', backdrop: 'static' ,ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }
  
  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }

}
