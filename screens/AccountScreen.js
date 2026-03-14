import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";

export default function AccountScreen({ name, setUser }) {

  return (
    <View style={styles.container}>

      <Ionicons name="person" size={80} color="#4A90E2" />

      <Text style={styles.text}>
        User: {name}
      </Text>

      <TouchableOpacity
        style={styles.button}
        onPress={() => setUser(null)}
      >
        <Ionicons name="log-out" size={20} color="white" />
        <Text style={styles.buttonText}> Log Out</Text>
      </TouchableOpacity>

    </View>
  );

}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },

  text: {
    fontSize: 22,
    marginBottom: 20
  },

  button: {
    flexDirection: "row",
    backgroundColor: "red",
    padding: 12,
    borderRadius: 8,
    alignItems: "center"
  },

  buttonText: {
    color: "white",
    fontSize: 18
  }

});