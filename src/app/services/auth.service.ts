import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { User } from '../interfaces/user';
import * as firebase from 'firebase';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private angularFireAuth: AngularFireAuth
  ) { }

  login(usuario: User) {
    return firebase.auth().signInWithEmailAndPassword(usuario.email, usuario.password);
  }

  cadastro(usuario: User) {
    return firebase.auth().createUserWithEmailAndPassword(usuario.email, usuario.password);
  }

  logout() {

  }

  getAuth() {
    return this.angularFireAuth;
  }

}
