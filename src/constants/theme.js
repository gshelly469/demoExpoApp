import { Dimensions } from "react-native";

const { width } = Dimensions.get("window");

export const COLORS = {
  primary: "#00D9D0",
  primaryLight: "#4DEDE6",
  textPrimary: "#000",
  textSecondary: "#666",
  textLight: "#999",
  background: "#f5f5f5",
  cardBackground: "#fff",
  border: "#e0e0e0",
  link: "#00D9D0",
  white: "#fff",
};

export const SIZES = {
  base: 8,
  small: 12,
  medium: 16,
  large: 20,
  xLarge: 24,
  xxLarge: 32,
};

export const FONTS = {
  regular: "400",
  medium: "500",
  semiBold: "600",
  bold: "700",
};

export const LAYOUT = {
  screenWidth: width,
  gridColumns: 2,
  gridGap: 8,
  imageSize: (width - 40 - 8) / 2, // accounting for padding and gap
  headerHeight: 200,
  cardBorderRadius: 20,
  imageBorderRadius: 12,
};
