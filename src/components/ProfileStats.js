import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";
import { COLORS, SIZES } from "../constants/theme";

const ProfileStats = ({ profilePicture, stats }) => {
  return (
    <View style={styles.container}>
      <Image source={{ uri: profilePicture }} style={styles.profilePicture} />

      <View style={styles.statsContainer}>
        <View style={styles.statItem}>
          <Text style={styles.statNumber}>{stats.posts}</Text>
          <Text style={styles.statLabel}>Posts</Text>
        </View>
        <View style={styles.statItem}>
          <Text style={styles.statNumber}>{stats.followers}</Text>
          <Text style={styles.statLabel}>Followers</Text>
        </View>
        <View style={styles.statItem}>
          <Text style={styles.statNumber}>{stats.following}</Text>
          <Text style={styles.statLabel}>Following</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: SIZES.small,
  },
  profilePicture: {
    width: 86,
    height: 86,
    borderRadius: 43,
    marginRight: 28,
  },
  statsContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-around",
  },
  statItem: {
    alignItems: "center",
  },
  statNumber: {
    fontSize: 18,
    fontWeight: "600",
    marginBottom: 2,
  },
  statLabel: {
    fontSize: 13,
    color: COLORS.secondary,
  },
});

export default ProfileStats;
