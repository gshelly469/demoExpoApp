import React from "react";
import { View, TouchableOpacity, Text, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { COLORS, SIZES } from "../constants/theme";

const BottomNavigation = ({ activeItem, onItemPress }) => {
  const navItems = [
    { id: "home", icon: "home-outline", iconActive: "home", label: "Home" },
    {
      id: "search",
      icon: "search-outline",
      iconActive: "search",
      label: "Search",
    },
    { id: "add", icon: "add-circle", iconActive: "add-circle", label: "" },
    {
      id: "messages",
      icon: "chatbubble-outline",
      iconActive: "chatbubble",
      label: "Message",
    },
    {
      id: "profile",
      icon: "person-outline",
      iconActive: "person",
      label: "Profile",
    },
  ];

  return (
    <View style={styles.container}>
      {navItems.map((item) => (
        <TouchableOpacity
          key={item.id}
          style={styles.navItem}
          onPress={() => onItemPress(item.id)}
        >
          <Ionicons
            name={activeItem === item.id ? item.iconActive : item.icon}
            size={item.id === "add" ? 40 : 24}
            color={
              item.id === "add"
                ? COLORS.primary
                : activeItem === item.id
                ? COLORS.primary
                : COLORS.textLight
            }
          />
          {item.label && (
            <Text
              style={[
                styles.label,
                activeItem === item.id && styles.activeLabel,
              ]}
            >
              {item.label}
            </Text>
          )}
        </TouchableOpacity>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-around",
    paddingVertical: 10,
    paddingBottom: 20,
    backgroundColor: COLORS.white,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: -2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 5,
  },
  navItem: {
    alignItems: "center",
    justifyContent: "center",
    minWidth: 50,
  },
  label: {
    fontSize: 10,
    marginTop: 4,
    color: COLORS.textLight,
  },
  activeLabel: {
    color: COLORS.primary,
    fontWeight: "600",
  },
});

export default BottomNavigation;
