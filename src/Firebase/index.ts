import { initializeApp } from "firebase/app";
import { getFirestore, collection, addDoc, getDocs } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAdjm92Io6wzGNUi8VGq60Z_JF9Ya42soI",
  authDomain: "minigame-paradise-3b919.firebaseapp.com",
  projectId: "minigame-paradise-3b919",
  storageBucket: "minigame-paradise-3b919.appspot.com",
  messagingSenderId: "92929987670",
  appId: "1:92929987670:web:743b7c38b3bfcc2f6697f7",
  measurementId: "G-XTWT16C3C7",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Cloud Firestore and get a reference to the service
const db = getFirestore(app);

export const addRanking = async (name: string, score: number) => {
  try {
    const docRef = await addDoc(collection(db, "ranking"), {
      name,
      score,
    });
    console.log("Document written with ID: ", docRef.id);
  } catch (e) {
    console.error("Error adding document: ", e);
  }
};

export const getRanking = async () => {
  const data = await getDocs(collection(db, "ranking"));
  return data.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
};
