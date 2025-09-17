import React, { useEffect } from "react";
import { Text, View } from "react-native";
import { db } from "./firebase/config";
import { collection, getDocs } from "firebase/firestore";

export default function App() {
  useEffect(() => {
    const checkFirestore = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, "tasks"));
        console.log("Tasks in Firestore:", querySnapshot.docs.length);
      } catch (error) {
        console.error("Firestore error:", error);
      }
    };
    checkFirestore();
  }, []);

  return (
    <View>
      <Text>Hello TodoApp</Text>
    </View>
  );
}
