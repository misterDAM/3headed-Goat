import React from "react";
import { View, Text, Stylesheet } from "react-native";
import { back } from "react-native/Libraries/Animated/Easing";

const testArray = ["pink", "red", "blue"];

const functionName = (color) => {
  <View style={(StyleSheet.container, { backgroundcolor: color })}>
    <Text>this is a text area or zone</Text>
  </View>;
};

const StyleInFix = StyleSheet.create({
  container: {
    flex: 1,
    width: 60,
    borderwidth: 60,
    alignitems: "center",
  },
});

const outputPut = () => {
  return (
    <View>
      {testArray.map((colorName) => {
        return <functionName color={colorName} />;
      })}
    </View>
  );
};

doremaa(integers);
