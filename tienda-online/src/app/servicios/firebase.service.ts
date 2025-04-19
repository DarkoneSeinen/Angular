import { Injectable } from '@angular/core';
import { Firestore, getFirestore } from 'firebase/firestore';
import { initializeApp } from 'firebase/app';
import { Auth, getAuth } from 'firebase/auth';

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {

  firebaseConfig = {
    apiKey: "AIzaSyAbIcne8tWtT_WAazn30onCr0xqvfHy_9w",
    authDomain: "tienda-online-694c6.firebaseapp.com",
    databaseURL: "https://tienda-online-694c6-default-rtdb.firebaseio.com",
    projectId: "tienda-online-694c6",
    storageBucket: "tienda-online-694c6.firebasestorage.app",
    messagingSenderId: "218179873525",
    appId: "1:218179873525:web:ef0f61a22598e72d1f33bc"
  };

  public auth: Auth;
  public firebase: Firestore;

  constructor() {
    const app =initializeApp(this.firebaseConfig);
    this.auth =getAuth(app);
    this.firebase = getFirestore(app);
   }
}
