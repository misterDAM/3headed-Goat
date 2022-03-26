import React from "react";
import { View, StyleSheet, Platform, ScrollView } from "react-native";

export default function Container({ children }) {
  const isWeb = Platform.OS === "web";
  return (
    <ScrollView style={isWeb ? styles.webContainer : styles.mobile}>
      {children}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  webContainer: {
    height: 812,
    width: 375,
    borderWidth: 2,
    backgroundColor: "#FFFFFF",
    // overflow: "hidden",
  },
  mobile: {
    flex: 1,
    backgroundColor: "#ffffff",
  },
});
