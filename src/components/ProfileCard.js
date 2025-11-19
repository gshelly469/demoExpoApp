import React, { useState } from "react";
import { View, Text, Image, TouchableOpacity, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { COLORS, SIZES, LAYOUT } from "../constants/theme";
import { openWebsite } from "../utils/helpers";

const ProfileCard = ({ user }) => {
  const [isLinkExpanded, setIsLinkExpanded] = useState(false);

  const handleSeeMore = () => {
    setIsLinkExpanded(!isLinkExpanded);
  };

  return (
    <View style={styles.container}>
      {/* Profile Picture and Action Buttons */}
      <View style={styles.topSection}>
        <Image
          source={{ uri: user.profilePicture }}
          style={styles.profilePicture}
        />

        <View style={styles.actionButtons}>
          <TouchableOpacity style={styles.editButton}>
            <Text style={styles.editButtonText}>Edit Profile</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.optionsButton}>
            <Ionicons
              name="ellipsis-horizontal"
              size={20}
              color={COLORS.textPrimary}
            />
          </TouchableOpacity>
        </View>
      </View>

      {/* Name and Username */}
      <View style={styles.nameSection}>
        <Text style={styles.name}>{user.name}</Text>
        <Text style={styles.username}>{user.username}</Text>
      </View>

      {/* Bio */}
      <View style={styles.bioSection}>
        <Ionicons
          name="remove-outline"
          size={20}
          color={COLORS.textSecondary}
        />
        <Text style={styles.bio}>{user.bio}</Text>
      </View>

      {/* Website Link */}
      <View style={styles.linkSection}>
        <Ionicons name="link-outline" size={20} color={COLORS.link} />
        <TouchableOpacity
          style={styles.linkTextContainer}
          onPress={() => openWebsite(user.website)}
        >
          <Text
            style={styles.link}
            numberOfLines={isLinkExpanded ? undefined : 1}
          >
            {user.website}
          </Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={handleSeeMore}>
          <Text style={styles.seeMore}>
            {isLinkExpanded ? "See less" : "See more"}
          </Text>
        </TouchableOpacity>
      </View>

      {/* Stats */}
      <View style={styles.statsContainer}>
        <View style={styles.statItem}>
          <Text style={styles.statNumber}>{user.stats.posts}</Text>
          <Text style={styles.statLabel}>Posts</Text>
        </View>
        <View style={styles.statDivider} />
        <View style={styles.statItem}>
          <Text style={styles.statNumber}>{user.stats.followers}</Text>
          <Text style={styles.statLabel}>Followers</Text>
        </View>
        <View style={styles.statDivider} />
        <View style={styles.statItem}>
          <Text style={styles.statNumber}>{user.stats.following}</Text>
          <Text style={styles.statLabel}>Following</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: -40, // overlap header
    paddingTop: 20,
    paddingHorizontal: 16,
    paddingBottom: 0,
    backgroundColor: COLORS.cardBackground,

    // Rounded top corners
    borderTopLeftRadius: 28,
    borderTopRightRadius: 28,

    // Floating effect
    // shadowColor: "#000",
    // shadowOffset: { width: 0, height: -3 },
    // shadowOpacity: 0.12,
    // shadowRadius: 8,
    // elevation: 6,
  },

  topSection: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-start",
    marginBottom: 16,
  },
  profilePicture: {
    width: 80,
    height: 80,
    borderRadius: 40,
    borderWidth: 3,
    borderColor: COLORS.white,
  },
  actionButtons: {
    flexDirection: "row",
    gap: 8,
  },
  editButton: {
    backgroundColor: COLORS.primary,
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 20,
  },
  editButtonText: {
    color: COLORS.white,
    fontSize: 14,
    fontWeight: "600",
  },
  optionsButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: COLORS.background,
    justifyContent: "center",
    alignItems: "center",
  },

  nameSection: {
    marginBottom: 12,
  },
  name: {
    fontSize: 20,
    fontWeight: "700",
    color: COLORS.textPrimary,
    marginBottom: 2,
  },
  username: {
    fontSize: 14,
    color: COLORS.textSecondary,
  },

  bioSection: {
    flexDirection: "row",
    alignItems: "flex-start",
    marginBottom: 12,
    gap: 8,
  },
  bio: {
    fontSize: 14,
    color: COLORS.textPrimary,
    flex: 1,
  },

  linkSection: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 20,
    gap: 8,
  },
  linkTextContainer: { flex: 1 },
  link: {
    fontSize: 14,
    color: COLORS.link,
  },
  seeMore: {
    fontSize: 14,
    color: COLORS.link,
    fontWeight: "500",
  },

  statsContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    paddingTop: 16,
    borderTopWidth: 1,
    borderTopColor: COLORS.border,
  },
  statItem: {
    alignItems: "center",
    flex: 1,
  },
  statNumber: {
    fontSize: 18,
    fontWeight: "700",
    color: COLORS.textPrimary,
    marginBottom: 4,
  },
  statLabel: {
    fontSize: 13,
    color: COLORS.textSecondary,
  },
  statDivider: {
    width: 1,
    height: 40,
    backgroundColor: COLORS.border,
  },
});

export default ProfileCard;
