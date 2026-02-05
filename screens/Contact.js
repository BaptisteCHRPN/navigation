import { StyleSheet, Text, View } from "react-native";
import React from "react";

export default function Contact() {
  return (
    <View style={styles.container}>
      <Text>Contact</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "green",
    justifyContent: "center",
    alignItems: "center",
  },
});