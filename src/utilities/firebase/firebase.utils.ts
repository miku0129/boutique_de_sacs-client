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
  deleteDoc,
  updateDoc,
} from "firebase/firestore/lite";
import { firestore as db } from "./firebase.utils";

import { getTailendId } from "../utility";

//To initialize shop data
import { item } from "../data/item";

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const firestore = getFirestore(app);

// firebaseDB: local, firebase-previewではtest-item, productionはitemsを使用する
const collection_name = import.meta.env.PROD ? "items" : "test-items";
// productionの dbを初期化したい場合は下記を実行する
// const collection_name = "items"

export const getAllDocuments = async () => {
  const querySnapshot_of_items = await getDocs(collection(db, collection_name));
  let items = querySnapshot_of_items.docs.map((docsnapshot) =>
    docsnapshot.data()
  );
  for (let i = 0; i < items.length; i++) {
    let querySnapshot_of_images_of_the_item = await getDocs(
      collection(db, collection_name, String(items[i].id), "item_imgs")
    );
    const images = querySnapshot_of_images_of_the_item.docs.map((doc) => {
      return doc.data();
    });

    items[i] = { ...items[i], item_imgs: images };
  }
  return items;
};

export const initializeItemsData = async () => {
  const { data } = item;

  data.forEach(async (item, idx) => {
    const item_id = String(idx);
    const docRef = doc(db, collection_name, item_id);
    const docSnap = await getDoc(docRef);

    if (!docSnap.exists()) {
      try {
        await setDoc(doc(db, collection_name, item_id), {
          id: idx,
          item_id_number: item.item_id_number,
          name: item.name,
          desc_1: item.desc_1,
          desc_2: item.desc_2,
          category: item.category,
          price: item.price,
          is_available: item.is_available,
        });

        item.item_imgs.forEach(async (image, idx) => {
          const item_image_id = String(idx);
          const itemImgDocRef = doc(
            db,
            collection_name,
            item_id,
            "item_imgs",
            item_image_id
          );
          const itemImgDocSnap = await getDoc(itemImgDocRef);
          if (!itemImgDocSnap.exists()) {
            try {
              await setDoc(
                doc(db, collection_name, item_id, "item_imgs", item_image_id),
                //もとのIDをfirestore用に上書きする
                {
                  ...image,
                  id: idx,
                }
              );
            } catch (e) {
              console.error("Error adding document: ", e);
            }
          }
        });
      } catch (e) {
        console.error("Error adding document: ", e);
      }
    }
  });
};

export const deleteDocument_of_an_item = async (itemId: number) => {
  try {
    await deleteDoc(doc(db, collection_name, String(itemId)));
    window.alert(`Élément supprimé avec succès.`);
    window.location.reload();
  } catch (e) {
    window.alert(`Echec de la suppression de l'élément, Error log: ${e}`);
  }
};

export const addDocument_of_an_item = async (
  item: FormItem,
  itemImgs: FormItem_img[]
) => {
  const items = await getAllDocuments();
  const tailEndId_for_newItem = getTailendId(items as Item[]);
  try {
    item = { ...item, id: tailEndId_for_newItem };
    await setDoc(doc(db, collection_name, String(tailEndId_for_newItem)), item);

    for (let i = 0; i < itemImgs.length; i++) {
      try {
        await setDoc(
          doc(
            db,
            collection_name,
            String(tailEndId_for_newItem),
            "item_imgs",
            `${i}`
          ),
          itemImgs[i]
        );
        window.alert("L'article a été enregistré avec succès.");
      } catch (e) {
        window.alert(
          `Échec de l'enregistrement de l'image de l'élément. Error log: ${e}`
        );
      }
    }
  } catch (e) {
    window.alert(`Échec de l'enregistrement de l'article. Error log: ${e}`);
  }
};

export const updateDocument_of_an_item = async (
  itemId: number,
  item: FormItem,
  imagesOfItem: FormItem_img[]
) => {
  const itemRef = doc(db, collection_name, String(itemId));
  try {
    const docSnap_of_item = await getDoc(itemRef);
    if (docSnap_of_item.exists()) {
      await updateDoc(itemRef, { ...item });
    }

    for (let i = 0; i < imagesOfItem.length; i++) {
      if (imagesOfItem[i].url !== "") {
        const ItemImgsRef = doc(
          db,
          collection_name,
          String(itemId),
          "item_imgs",
          String(imagesOfItem[i].id)
        );
        try {
          const docSnap_of_img = await getDoc(ItemImgsRef);
          if (docSnap_of_img.exists()) {
            await updateDoc(ItemImgsRef, { ...imagesOfItem[i] });
          } else {
            await setDoc(ItemImgsRef, { ...imagesOfItem[i] });
          }
        } catch (e) {
          window.alert(
            `Échec de la mise à jour de l'image de l'élément. Error log: ${e}`
          );
        }
      } else if (imagesOfItem[i].id !== null && imagesOfItem[i].url === "") {
        try {
          await deleteDoc(
            doc(
              db,
              collection_name,
              String(itemId),
              "item_imgs",
              String(imagesOfItem[i].id)
            )
          );
        } catch (e) {
          window.alert(
            `Échec de la suppression à jour de l'image de l'élément. Error log: ${e}`
          );
        }
      }
    }
    window.alert(`L'article a été mis à jour avec succès.`);
  } catch (e) {
    window.alert(`Échec de la mise à jour de l'élément. Error log: ${e}`);
  }
};
