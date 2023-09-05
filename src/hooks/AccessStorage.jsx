import { useState } from "react";
import { storage } from "../Firebase/config";
import { getDownloadURL, ref, uploadBytesResumable } from "firebase/storage";
import { v4 as uuidv4 } from "uuid";
import { listAll } from "firebase/storage";
const AccessStorage = () => {
  const [error, setError] = useState(null); //Error from upload
  const [url, setUrl] = useState(null); //image Url that we get back from the storage after img uploaded
  const [allimages, setAllImages] = useState([]); 

  const startUpload = async (file) => {
    if (!file) {
      return;
    }
    const fileId = uuidv4();
    const storageRef = ref(storage, `images/${fileId}`);
    const uploadTask = await uploadBytesResumable(storageRef, file);
    const {state, ref: storedRef } = uploadTask;
    if (state === "success") {
      getDownloadURL(storedRef).then((downloadURL) => {
        setUrl(downloadURL);  
      });
    } else {
      setError(error);
    }
  };
  const listImages = async () => {
    try {
      const storageRef = ref(storage, "images"); // Change "images" to the appropriate path
      const items = await listAll(storageRef);

      // Process each item
      const imageURLs = await Promise.all(
        items.items.map(async (item) => {
          const downloadURL = await getDownloadURL(item);
          return downloadURL;
        })
      );

      console.log("List of image URLs:", imageURLs);
      setAllImages(imageURLs)
 
    } catch (error) {
      console.error("Error listing images:", error);
    }
  };

  return { error, startUpload, url, listImages, allimages };
};

export default AccessStorage;
