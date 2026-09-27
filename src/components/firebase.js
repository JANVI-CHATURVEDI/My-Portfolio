import { initializeApp } from "firebase/app";
import { getFirestore, doc, getDoc, setDoc, updateDoc, increment } from "firebase/firestore";

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_FIREBASE_APP_ID,
  measurementId: process.env.REACT_APP_FIREBASE_MEASUREMENT_ID,
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);

// Function to increment and fetch visitor count
export async function incrementVisitors() {
  const docRef = doc(db, "stats", "visitors");
  const docSnap = await getDoc(docRef);

  if (!docSnap.exists()) {
    await setDoc(docRef, { count: 1 });
    return 1;
  } else {
    await updateDoc(docRef, { count: increment(1) });
    const updatedDoc = await getDoc(docRef);
    return updatedDoc.data().count;
  }
}
