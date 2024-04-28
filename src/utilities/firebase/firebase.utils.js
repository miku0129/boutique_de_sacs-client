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
import { item } from "../data/item";

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const firestore = getFirestore(app);

// export const getAllDocuments = async () => {
//   const querySnapshot = await getDocs(collection(db, "items"));
//   return querySnapshot.docs.map((docsnapshot) => docsnapshot.data());
// };
export const getAllDocuments = async () => {
  const querySnapshot = await getDocs(collection(db, "test-items"));
  return querySnapshot.docs.map((docsnapshot) => docsnapshot.data());
};


// export const initializeItemsData = async () => {
//   const { data } = item;
//   console.log("data", data);

//   data.forEach(async (item, idx) => {
//     const item_id = String(idx);
//     const docRef = doc(db, "items", item_id);
//     const docSnap = await getDoc(docRef);

//     if (!docSnap.exists()) {
//       try {
//         await setDoc(doc(db, "items", item_id), {
//           id: idx,
//           item_id_number: item.item_id_number,
//           name: item.name,
//           desc_1: item.desc_1,
//           desc_2: item.desc_2,
//           category: item.category,
//           price: item.price,
//           is_available: item.is_available,
//           item_img_urls: item.item_img_urls,
//         });
//       } catch (e) {
//         console.error("Error adding document: ", e);
//       }
//     }
//   });
// };
export const initializeItemsData = async () => {
  const { data } = item;
  console.log("data", data);

  data.forEach(async (item, idx) => {
    const item_id = String(idx);
    const docRef = doc(db, "test-items", item_id);
    const docSnap = await getDoc(docRef);

    if (!docSnap.exists()) {
      try {
        await setDoc(doc(db, "test-items", item_id), {
          id: idx,
          item_id_number: item.item_id_number,
          name: item.name,
          desc_1: item.desc_1,
          desc_2: item.desc_2,
          category: item.category,
          price: item.price,
          is_available: item.is_available,
          item_img_urls: item.item_img_urls,
        });
      } catch (e) {
        console.error("Error adding document: ", e);
      }
    }
  });
};

