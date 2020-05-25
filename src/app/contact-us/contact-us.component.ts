import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css']
})
export class ContactUsComponent implements OnInit {


  myForm: FormGroup;
  constructor() { }

  ngOnInit(): void {
    this.myForm = new FormGroup({ });
  }

}
