import React from "react";
import { SafeAreaView, StyleSheet, StatusBar } from "react-native";
import ProfileScreen from "./src/screens/ProfileScreen";

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" />
      <ProfileScreen />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f5f5",
  },
});
