import React from "react";
import { View, Image, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { LAYOUT, COLORS } from "../constants/theme";

const GridView = ({ items }) => {
  return (
    <View style={styles.container}>
      {items.map((item) => (
        <View key={item.id} style={styles.gridItem}>
          <Image source={{ uri: item.image }} style={styles.gridImage} />
          {item.isMultiple && (
            <View style={styles.multipleIndicator}>
              <Ionicons name="copy-outline" size={20} color={COLORS.white} />
            </View>
          )}
          {item.type === "clip" && (
            <View style={styles.clipIndicator}>
              <Ionicons name="play" size={16} color={COLORS.white} />
            </View>
          )}
        </View>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    flexWrap: "wrap",
    paddingHorizontal: 16,
    gap: LAYOUT.gridGap,
  },
  gridItem: {
    width: LAYOUT.imageSize,
    height: LAYOUT.imageSize,
    position: "relative",
    borderRadius: LAYOUT.imageBorderRadius,
    overflow: "hidden",
  },
  gridImage: {
    width: "100%",
    height: "100%",
  },
  clipIndicator: {
    position: "absolute",
    bottom: 8,
    left: 8,
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    borderRadius: 12,
    padding: 4,
  },
  multipleIndicator: {
    position: "absolute",
    top: 8,
    right: 8,
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    borderRadius: 12,
    padding: 4,
  },
});

export default GridView;
