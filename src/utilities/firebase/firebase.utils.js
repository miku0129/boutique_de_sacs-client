// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
import { firebaseConfig } from "./firebase.config";

import {
  getFirestore,
  collection,
  doc,
  getDoc,
  getDocs,
  setDoc,
} from "firebase/firestore/lite";
import { firestore as db } from "./firebase.utils";

//To initialize shop data
// import ITEM from "../data/item";
// import ITEM_IMG from "../data/item_img";

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const firestore = getFirestore(app);

export const getAllDocuments = async () => {
  const querySnapshot = await getDocs(collection(db, "items"));
  return querySnapshot.docs.map((docsnapshot) => docsnapshot.data());
};