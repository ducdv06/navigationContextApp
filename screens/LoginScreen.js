import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";

export default function LoginScreen({ setUser }) {

  const [name, setName] = useState("");

  return (
    <View style={styles.container}>

      <Ionicons name="person-circle" size={100} color="#4A90E2" />

      <Text style={styles.title}>LOGIN</Text>

      <TextInput
        placeholder="Nhập tên của bạn"
        style={styles.input}
        value={name}
        onChangeText={setName}
      />

      <TouchableOpacity
        style={styles.button}
        onPress={() => {
          if (name !== "") {
            setUser(name);
          }
        }}
      >
        <Ionicons name="log-in" size={20} color="white" />
        <Text style={styles.buttonText}> Sign In</Text>
      </TouchableOpacity>

    </View>
  );
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F5F5F5"
  },

  title: {
    fontSize: 28,
    marginBottom: 20,
    marginTop: 10
  },

  input: {
    width: "80%",
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 8,
    padding: 10,
    marginBottom: 20,
    backgroundColor: "white"
  },

  button: {
    flexDirection: "row",
    backgroundColor: "#4A90E2",
    padding: 12,
    borderRadius: 8,
    alignItems: "center"
  },

  buttonText: {
    color: "white",
    fontSize: 18
  }

});