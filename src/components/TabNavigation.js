import React from "react";
import { View, TouchableOpacity, Text, StyleSheet } from "react-native";
import { COLORS, SIZES } from "../constants/theme";

const TabNavigation = ({ activeTab, onTabChange }) => {
  const tabs = [
    { id: "posts", label: "Posts" },
    { id: "clips", label: "Clips" },
    { id: "tagged", label: "Tagged" },
  ];

  return (
    <View style={styles.container}>
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
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    backgroundColor: COLORS.cardBackground,
    marginHorizontal: 16,
    marginTop: 16,
    marginBottom: 16,
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

export default TabNavigation;
