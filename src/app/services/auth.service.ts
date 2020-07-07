import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private angularFireAuth: AngularFireAuth
  ) { }

    login (email: any, password: any) {

      return new Promise((resolve, rejected) => {
        this.angularFireAuth.signInWithEmailAndPassword(email, password).then(user => {
          resolve(user)
        }).catch(err => rejected(err));
      });

    }

    cadastro (username: string, name: string, email: any, password: any) {

      return new Promise((resolve, rejected) => {
        this.angularFireAuth.createUserWithEmailAndPassword(email, password).then(user => {
          resolve(user)
        }).catch(err => rejected(err));
      });

    }

}
