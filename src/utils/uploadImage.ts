import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import { storage } from '../config/firebaseConfig';

export const uploadImage = async (image: File, folder: string): Promise<string> => {
  try {
    const storageRef = ref(storage, `${folder}/${image.name}`);
    await uploadBytes(storageRef, image);
    const imageUrl = await getDownloadURL(storageRef);
    return imageUrl;
  } catch (error) {
    console.error('Error uploading image to Firebase:', error);
    throw new Error('Failed to upload image to Firebase');
  }
};