import React from "react";
import { StyleSheet, Image, Text, View, TextInput, Button } from "react-native";

const getFullname = (firstName, secondName, thirdName) => {
  return firstName + " " + secondName + " " + thirdName;
};

const defaultBgColor = "aqua";
const defaultValue = "werey";
const defaultValue2 = "MY NEW BENS GO BREAK YA GATE!";

const Man = ({ style, bgColor, newText, bDcolor, boxHeight, newBens }) => {
  return (
    <View
      style={[styles.container, { backgroundColor: bgColor || defaultBgColor }]}
    >
      <Text>hi Mr {getFullname("david", "love", "lancaster")}</Text>
      <TextInput
        style={{
          marginLeft: 20,
          height: boxHeight || 20,
          borderColor: bDcolor || "gray",
          borderWidth: 1,
        }}
        defaultValue={newText || defaultValue}
      />
      <Text>my text is {newBens || defaultValue2}</Text>
    </View>
  );
};

const Cafe = () => {
  return (
    <View>
      <Man bgColor={"hotpink"} />
      <Man bgColor={"limegreen"} />
      <Man newText={"fuck you!"} />
      <Man bDcolor={"red"} boxHeight={200} />
      <Man newBens={"your papa! I DON BY BENZ!"} bgColor={"red"} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "aqua",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default Cafe;
