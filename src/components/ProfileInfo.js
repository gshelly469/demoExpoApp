import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { COLORS, SIZES } from "../constants/theme";
import { openWebsite } from "../utils/helpers";

const ProfileInfo = ({ name, bio, website }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.name}>{name}</Text>
      <Text style={styles.bio}>{bio}</Text>
      {website && (
        <TouchableOpacity onPress={() => openWebsite(website)}>
          <Text style={styles.website}>{website}</Text>
        </TouchableOpacity>
      )}

      <View style={styles.actionButtons}>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Edit Profile</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Share Profile</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: SIZES.small,
  },
  name: {
    fontSize: 14,
    fontWeight: "600",
    marginBottom: 4,
  },
  bio: {
    fontSize: 14,
    lineHeight: 18,
    marginBottom: 4,
  },
  website: {
    fontSize: 14,
    color: COLORS.link,
    fontWeight: "500",
    marginBottom: SIZES.small,
  },
  actionButtons: {
    flexDirection: "row",
    gap: 8,
  },
  button: {
    flex: 1,
    backgroundColor: COLORS.buttonBg,
    paddingVertical: 6,
    borderRadius: 8,
    alignItems: "center",
  },
  buttonText: {
    fontSize: 14,
    fontWeight: "600",
  },
});

export default ProfileInfo;
