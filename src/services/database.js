import {
  collection,
  addDoc,
  getDocs,
} from "firebase/firestore";
import { db } from "../firebase/firebaseConfig";

export async function addWasteEntry(data) {
  try {
    await addDoc(collection(db, "wasteLogs"), data);

    console.log("Waste entry saved successfully.");
  } catch (error) {
    console.error("Error saving waste entry:", error);
  }
}
export async function getWasteEntries() {
  try {
    const querySnapshot = await getDocs(collection(db, "wasteLogs"));

    const wasteEntries = querySnapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));

    return wasteEntries;
  } catch (error) {
    console.error("Error fetching waste entries:", error);
    return [];
  }
}