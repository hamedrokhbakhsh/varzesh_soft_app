import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {min} from 'rxjs/operators';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.page.html',
  styleUrls: ['./sign-up.page.scss'],
})
export class SignUpPage implements OnInit {

  form: FormGroup;
  isSubmit: boolean;

  constructor(private fb: FormBuilder, private router: Router) {
    this.form = this.fb.group({
      mobile: ['', [Validators.required, Validators.minLength(10)]],
      fName: ['', [Validators.required]],
      lName: ['', [Validators.required]],
      gender: ['', [Validators.required]],

    });
  }

  ngOnInit() {
  }

  confirm() {
    console.log(this.form.value)
  }
}
