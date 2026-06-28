import {
  collection,
  addDoc,
  getDocs,
  deleteDoc,
  doc,
} from "firebase/firestore";

import { db } from "../firebase/firebaseConfig";

const wasteCollection = collection(db, "wasteLogs");

// Add Waste Entry
export async function addWasteEntry(data) {
  try {
    await addDoc(wasteCollection, data);
    console.log("Waste entry saved successfully.");
  } catch (error) {
    console.error("Error saving waste entry:", error);
    throw error;
  }
}

// Get All Waste Entries
export async function getWasteEntries() {
  try {
    const querySnapshot = await getDocs(wasteCollection);

    return querySnapshot.docs.map((document) => ({
      id: document.id,
      ...document.data(),
    }));
  } catch (error) {
    console.error("Error fetching entries:", error);
    return [];
  }
}

// Delete Waste Entry
export async function deleteWasteEntry(id) {
  try {
    await deleteDoc(doc(db, "wasteLogs", id));
    console.log("Waste entry deleted.");
  } catch (error) {
    console.error("Error deleting entry:", error);
    throw error;
  }
}