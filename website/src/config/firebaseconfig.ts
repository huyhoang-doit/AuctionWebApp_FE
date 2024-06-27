import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyCx5Ev6rO832knK-PLhwiKb_PfmkxShI0s",
  authDomain: "auction-image-aecbe.firebaseapp.com",
  projectId: "auction-image-aecbe",
  storageBucket: "auction-image-aecbe.appspot.com",
  messagingSenderId: "1029946411005",
  appId: "1:1029946411005:web:59cb0b61cd235c5d333b94",
  measurementId: "G-HP9M31JEDP"
};

const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);

// Folder name
export const JEWELRY_IMAGES_FOLDER = 'images-jewelry'
export const CCCD_IMAGES_FOLDER = 'images-cccd'