import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-verify-number',
  templateUrl: './verify-number.page.html',
  styleUrls: ['./verify-number.page.scss'],
})
export class VerifyNumberPage implements OnInit {

  form: FormGroup;
  isSubmit = false;
  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      mobile: ['', [Validators.required, Validators.min(1) , Validators.max(11)]],
    });
  }

  ngOnInit() {
  }

  confirm() {

  }
}
