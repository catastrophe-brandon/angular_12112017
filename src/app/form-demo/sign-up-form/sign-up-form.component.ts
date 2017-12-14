import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'sign-up-form',
  templateUrl: './sign-up-form.component.html',
  styleUrls: ['./sign-up-form.component.css']
})
export class SignUpFormComponent implements OnInit {

  public states = ['Oceania', 'Pacifica', 'Rapture'];
  public email = '';
  public fullName = '';
  public state = '';
  public phone = '';
  public newMember = false;

  constructor() { }

  ngOnInit() {
  }

}
