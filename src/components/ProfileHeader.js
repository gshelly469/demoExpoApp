import React from "react";
import { View, Image, StyleSheet, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { COLORS, LAYOUT } from "../constants/theme";

const ProfileHeader = ({ coverImage }) => {
  return (
    <View style={styles.container}>
      <Image source={{ uri: coverImage }} style={styles.coverImage} />
      <View style={styles.iconsContainer}>
        <TouchableOpacity style={styles.iconButton}>
          <Ionicons name="settings-outline" size={24} color={COLORS.white} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.iconButton}>
          <Ionicons name="qr-code-outline" size={24} color={COLORS.white} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: LAYOUT.headerHeight,
    position: "relative",
    marginTop: 0,
  },
  coverImage: {
    width: "100%",
    height: "100%",
    resizeMode: "cover",
  },
  iconsContainer: {
    position: "absolute",
    top: 50,
    right: 16,
    flexDirection: "row",
    gap: 12,
  },
  iconButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: "rgba(255, 255, 255, 0.3)",
    justifyContent: "center",
    alignItems: "center",
  },
});

export default ProfileHeader;
