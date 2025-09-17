import React, { useEffect, useState } from "react";
import { View, TextInput, Button, FlatList, StyleSheet } from "react-native";
import { addTask, getTasks, deleteTask } from "../services/taskService";
import TaskItem from "../components/TaskItem";

export default function HomeScreen() {
  const [task, setTask] = useState("");
  const [tasks, setTasks] = useState([]);

  const loadTasks = async () => {
    const data = await getTasks();
    setTasks(data);
  };

  useEffect(() => {
    loadTasks();
  }, []);

  const handleAdd = async () => {
    if (task.trim()) {
      await addTask(task);
      setTask("");
      loadTasks();
    }
  };

  const handleDelete = async (id) => {
    await deleteTask(id);
    loadTasks();
  };

  return (
    <View style={styles.container}>
      <TextInput
        placeholder="Enter task"
        value={task}
        onChangeText={setTask}
        style={styles.input}
      />
      <Button title="Add Task" onPress={handleAdd} />
      <FlatList
        data={tasks}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TaskItem task={item} onDelete={() => handleDelete(item.id)} />
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20 },
  input: { borderWidth: 1, marginBottom: 10, padding: 8, borderRadius: 5 }
});
