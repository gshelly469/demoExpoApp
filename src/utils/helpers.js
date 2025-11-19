import { Linking, Alert } from "react-native";

export const openWebsite = (url) => {
  const formattedUrl = url.startsWith("http") ? url : `https://${url}`;

  Linking.canOpenURL(formattedUrl)
    .then((supported) => {
      if (supported) {
        Linking.openURL(formattedUrl);
      } else {
        Alert.alert("Error", "Cannot open this URL");
      }
    })
    .catch((err) => console.error("Error opening URL:", err));
};

export const formatNumber = (num) => {
  if (num >= 1000000) {
    return (num / 1000000).toFixed(1) + "M";
  }
  if (num >= 1000) {
    return (num / 1000).toFixed(1) + "K";
  }
  return num.toString();
};
