import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import { storage } from "../config/firebaseconfig";
import { v4 as uuidv4 } from 'uuid';

export const uploadFileToFirebase = async (file: File, folder: string): Promise<string> => {
  const storageRef = ref(storage, `${folder}/${uuidv4()}`);
  const snapshot = await uploadBytes(storageRef, file);
  const downloadURL = await getDownloadURL(snapshot.ref);

  return downloadURL;
};

export const uploadFilesToFirebase = async (files: File[], folder: string): Promise<string[]> => {
  const uploadPromises = files.map(file => {
    const storageRef = ref(storage, `${folder}/${uuidv4()}`);
    return uploadBytes(storageRef, file).then(snapshot => getDownloadURL(snapshot.ref));
  });

  return Promise.all(uploadPromises);
};

export const convertFilesToBase64 = (files: File[]): Promise<string[]> => {
  return new Promise((resolve, reject) => {
    const base64Array: string[] = [];
    files.forEach((file, index) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => {
        if (reader.result) {
          base64Array.push(reader.result as string);
          if (base64Array.length === files.length) {
            resolve(base64Array);
          }
        }
      };
      reader.onerror = reject;
    });
  });
};

