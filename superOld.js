import React from "react";
import { StyleSheet, View, Text } from "react-native";

const COLOURS = ["green", "blue", "yellow", "red"];

const TopBar = ({ color }) => {
  console.log("MY COLORS", color);
  return (
    <View style={[styles.container, { backgroundColor: color }]}>
      <Text> THIS IS THE TOP BAR</Text>
    </View>
  );
};

const MainPage = () => {
  return (
    <View>
      {COLOURS.map((currentColor) => {
        return <TopBar color={currentColor} />;
      })}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: 30,
    alignItems: "center",
    justifyContent: "center",
    backgroundColour: "red",
  },
});

export default MainPage;
