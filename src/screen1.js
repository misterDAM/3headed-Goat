import React from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import Container from "./Container";

export default function ScreenOne({ navigation }) {
  return (
    <Container>
      <View style={styles.parent}>
        <View style={styles.logoText}>
          <Image source={require("../assets/logo.png")} style={styles.child1} />
          {/* <View style={styles.child2} />     */}
        </View>
        <View style={styles.bothText}>
          <Text style={styles.text1}>Welcome to Ajheryuk</Text>
          <View style={styles.textContainer}>
            <Text style={styles.text2}>
              Best and popular apps for live education course from home
            </Text>
          </View>
        </View>
        <View style={{ marginLeft: 16 }}>
          <TouchableOpacity
            style={styles.button1}
            onPress={() => navigation.navigate("screentwo")}
            activeOpacity={0.6}
          >
            <Text style={styles.text1}>Get Started</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Container>
  );
}

const styles = StyleSheet.create({
  parent: {
    flexDirection: "column",
    alignItems: "center",
  },
  logoText: {
    marginTop: 120,
  },
  bothText: {
    alignItems: "center",
    marginTop: 80,
  },
  textContainer: {
    // flexWrap: "wrap",
    justifyContent: "center",
    height: 50,
    width: 300,
  },
  text1: {
    textTransform: "capitalize",
    fontSize: 20,
  },
  text2: {
    // textTransform: "lowercase",
    textAlign: "center",
    fontSize: 15,
    color: "hotpink",
    marginTop: 4,
  },
  child1: {
    height: 200,
    width: 200,
    // backgroundColor: "aqua",
    // borderWidth: 1,
  },
  child2: {
    height: 50,
    width: 50,
    // backgroundColor: "limegreen",
  },
  button1: {
    height: 56,
    width: 300,
    marginHorizontal: "100%",
    borderRadius: 15,
    backgroundColor: "#EC5F5F",
    // marginBottom: 80,
    marginTop: 64,
    alignItems: "center",
    justifyContent: "center",
    // marginHorizontal: "50%",
  },
});
