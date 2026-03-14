import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";

export default function HomeScreen({ name }) {

  return (
    <View style={styles.container}>

      <Ionicons name="home" size={80} color="#4A90E2" />

      <Text style={styles.text}>
        Xin chào {name}
      </Text>

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
    fontSize: 24,
    marginTop: 20
  }

});