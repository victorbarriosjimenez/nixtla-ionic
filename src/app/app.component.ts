import { Component, ViewChild } from '@angular/core';
import {  App , Platform, MenuController, Nav } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { HomePage } from '../pages/home/home';
import { LoginPage } from '../pages/login/login';
import { AuthService } from '../services/auth.service';
@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  pages;
	rootPage;
	@ViewChild(Nav) nav: Nav;
	constructor(private app: App,
							private menu: MenuController,
              private statusBar: StatusBar,
							private platform: Platform,
							private auth: AuthService) {
    this.pages = [
			{ title: 'Eventos', component: HomePage, icon: 'logo-buffer' },
			{ title: 'Configuración', component: HomePage, icon: 'settings' }				
		];
		this.initializeApp();
	}	
  initializeApp() {
		this.platform.ready().then(() => {
		  this.statusBar.styleDefault();
		});
		this.auth.afAuth.authState
		  .subscribe(
			user => {
			  if (user) {
				this.rootPage = HomePage;
			  } else {
				this.rootPage = LoginPage;
			  }
			},
			() => {
			  this.rootPage = LoginPage;
			}
		  );
		}
		public openPage(page) {
			this.menu.close();
			this.nav.setRoot(page.component);
		}
		public logout() {
			this.menu.close();
			this.auth.signOut();
			this.nav.setRoot(HomePage);
		}
}