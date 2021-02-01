import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';


@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.page.html',
  styleUrls: ['./sign-up.page.scss'],
})
export class SignUpPage implements OnInit {

  form: FormGroup;
  isSubmit = false;
  loading = false ;
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
    this.isSubmit = ! this.isSubmit ;
  }

  login() {
    this.router.navigate(['/login']).then();
  }
}
