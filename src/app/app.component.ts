import { Component, OnInit } from '@angular/core';

import { AuthService,SocialUser,GoogleLoginProvider,FacebookLoginProvider } from 'angularx-social-login';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent implements OnInit {

  user:SocialUser;
  lat: number = 23.109838;
  lng: number = 72.524179;

  constructor(private authService:AuthService) { }

  ngOnInit(): void {
    this.authService.authState.subscribe((user)=>{
      this.user=user;
    });
  }

  signInWithGoogle(): void {
    this.authService.signIn(GoogleLoginProvider.PROVIDER_ID);
  }

  signInWithFB(): void {
    this.authService.signIn(FacebookLoginProvider.PROVIDER_ID);
  }

  signOut(): void {
    this.authService.signOut();
  }

}
