import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor() { }

  loginForm: FormGroup;

  createNewFormGroup(): FormGroup {
    return new FormGroup({
      userName: new FormControl(),
      password: new FormControl()
    });
  }

  ngOnInit() {
    this.loginForm = this.createNewFormGroup();
  }

}
