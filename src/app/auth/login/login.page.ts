import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ToastServiceService} from '../../service/toast-service.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  form: FormGroup;
    isSubmit = false;
  constructor(private fb: FormBuilder, private toast: ToastServiceService, private router: Router) {
    this.form = this.fb.group({
        mobile: ['', [Validators.required]],

    });
  }

  ngOnInit() {
  }

 login() {
   this.isSubmit = true;
  //this.router.navigate(['/verify']);
 }

  submit() {
      this.router.navigate(['/signup']);

  }
}
