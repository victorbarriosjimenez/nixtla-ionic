import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AuthService } from '../../services/auth.service';
import { FormBuilder, FormGroup , Validators } from '@angular/forms';
import { HomePage } from '../home/home';

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
  public loginForm: FormGroup;
  loginError: string;
  constructor(public navCtrl: NavController, 
              public navParams: NavParams,
              private auth: AuthService, 
              private fb: FormBuilder) {
    this.createForm();
  }
  public createForm(): void {
    this.loginForm = this.fb.group({
			email: ['', Validators.compose([Validators.required, Validators.email])],
			password: ['', Validators.compose([Validators.required, Validators.minLength(6)])]
		});
  }
  public login() {
		let data = this.loginForm.value;
		if (!data.email) {
			return;
		}
		let credentials = {
			email: data.email,
			password: data.password
		};
		this.auth.signInWithEmail(credentials)
			.then(
				() => this.navCtrl.setRoot(HomePage),
				error => this.loginError = error.message
			);
	}
}
