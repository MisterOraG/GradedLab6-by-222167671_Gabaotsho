import React from "react";
import { View, Text, Button, StyleSheet } from "react-native";

export default function TaskItem({ task, onDelete }) {
  return (
    <View style={styles.item}>
      <Text>{task.text}</Text>
      <Button title="Delete" onPress={onDelete} />
    </View>
  );
}

const styles = StyleSheet.create({
  item: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 10,
    marginVertical: 5,
    borderWidth: 1,
    borderRadius: 5
  }
});
