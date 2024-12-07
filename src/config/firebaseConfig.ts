
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
  apiKey: 'AIzaSyAajctLLHimd4SDhi47tuFFKRIJNAfHWmM',
  authDomain: 'ngola-homecare.firebaseapp.com',
  projectId: 'ngola-homecare',
  storageBucket: 'ngola-homecare.appspot.com',
  messagingSenderId: '168698453190',
  appId: '1:168698453190:web:1059e948feacda19458bc7',
  measurementId: 'G-DWVVR936GF',
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);
const storage = getStorage(app);

export { db, auth, storage };