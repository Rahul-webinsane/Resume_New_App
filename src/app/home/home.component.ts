import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from "@angular/forms";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  // totalDueNewCardForm = this.fb.group({
  //   creditCardNumber: ["", Validators.required]
  // });

  // constructor(private fb: FormBuilder) {}

  // onChangeCreditCardValue(event: string) {
  //   // this.totalDueNewCardForm.get("creditCardNumber").patchValue(event);
  //   console.log("value Texted    ", event);
  // }

}
