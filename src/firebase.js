import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const instance = firebase.initializeApp({
  apiKey: "AIzaSyDVpghbVmlbhgnnwGDXWH-iglPm-mP1okE",
  authDomain: "nan-me-c2d13.firebaseapp.com",
  databaseURL: "https://nan-me-c2d13.firebaseio.com",
  projectId: "nan-me-c2d13",
  storageBucket: "nan-me-c2d13.appspot.com",
  messagingSenderId: "149125961169",
  appId: "1:149125961169:web:a641cf7708cd23ae2d7cf0",
  measurementId: "G-8ZLJJHV61C"
});

export const firebaseglobal = instance;
export const db = instance.firestore();

export const timestamp = firebase.firestore.Timestamp;
