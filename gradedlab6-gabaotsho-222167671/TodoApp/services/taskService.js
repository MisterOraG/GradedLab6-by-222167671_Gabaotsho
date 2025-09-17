import { collection, addDoc, getDocs, deleteDoc, doc } from "firebase/firestore";
import { db } from "../firebase/config";

export const addTask = async (task) => {
  try {
    await addDoc(collection(db, "tasks"), { text: task });
  } catch (error) {
    console.error("Error adding task: ", error);
  }
};

export const getTasks = async () => {
  try {
    const querySnapshot = await getDocs(collection(db, "tasks"));
    return querySnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
  } catch (error) {
    console.error("Error fetching tasks: ", error);
    return [];
  }
};

export const deleteTask = async (id) => {
  try {
    await deleteDoc(doc(db, "tasks", id));
  } catch (error) {
    console.error("Error deleting task: ", error);
  }
};
