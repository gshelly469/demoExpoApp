import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { COLORS, SIZES } from "../constants/theme";
import { useSafeAreaInsets } from "react-native-safe-area-context";

const StickyHeader = ({ username, activeTab, onTabChange, isVisible }) => {
  const insets = useSafeAreaInsets();

  const tabs = [
    { id: "posts", label: "Posts" },
    { id: "clips", label: "Clips" },
    { id: "tagged", label: "Tagged" },
  ];

  if (!isVisible) return null;

  return (
    <View style={[styles.container, { paddingTop: insets.top }]}>
      {/* Top Row - Name and Icons */}
      <View style={styles.topRow}>
        <Text style={styles.username}>{username}</Text>
        <View style={styles.icons}>
          <TouchableOpacity>
            <Ionicons
              name="settings-outline"
              size={24}
              color={COLORS.textPrimary}
            />
          </TouchableOpacity>
          <TouchableOpacity style={styles.iconSpacing}>
            <Ionicons
              name="qr-code-outline"
              size={24}
              color={COLORS.textPrimary}
            />
          </TouchableOpacity>
        </View>
      </View>

      {/* Tab Navigation */}
      <View style={styles.tabContainer}>
        {tabs.map((tab) => (
          <TouchableOpacity
            key={tab.id}
            style={[styles.tab, activeTab === tab.id && styles.activeTab]}
            onPress={() => onTabChange(tab.id)}
          >
            <Text
              style={[
                styles.tabText,
                activeTab === tab.id && styles.activeTabText,
              ]}
            >
              {tab.label}
            </Text>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    backgroundColor: COLORS.white,
    zIndex: 1000,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  topRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 16,
    paddingTop: 10,
    paddingBottom: 12,
  },
  username: {
    fontSize: 18,
    fontWeight: "700",
    color: COLORS.textPrimary,
  },
  icons: {
    flexDirection: "row",
    alignItems: "center",
  },
  iconSpacing: {
    marginLeft: 16,
  },
  tabContainer: {
    flexDirection: "row",
    borderBottomWidth: 1,
    borderBottomColor: COLORS.border,
  },
  tab: {
    flex: 1,
    paddingVertical: 12,
    alignItems: "center",
    borderBottomWidth: 2,
    borderBottomColor: "transparent",
  },
  activeTab: {
    borderBottomColor: COLORS.primary,
  },
  tabText: {
    fontSize: 14,
    fontWeight: "600",
    color: COLORS.textSecondary,
  },
  activeTabText: {
    color: COLORS.primary,
  },
});

export default StickyHeader;
