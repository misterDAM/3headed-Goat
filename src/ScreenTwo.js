import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { TextInput } from "react-native";
import Container from "./Container";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";

export default function ScreenTwo({ navigation }) {
  const [email, setEmail] = useState("");
  const [password, setPasswordText] = useState("");
  const showDetails = () => {
    alert("my email is " + email + "and my password is " + password);
  };

  return (
    <Container>
      <KeyboardAwareScrollView>
        <View style={styles.container}>
          <Image
            style={styles.imgTop}
            source={require("../assets/Logo2.png")}
          />
          <View style={styles.EPL}>
            <TextInput
              style={styles.inputEmail}
              placeholder="Email"
              onChangeText={(text) => setEmail(text)}
              value={email}
            />
            <TextInput
              style={styles.inputPassword}
              placeholder="Password"
              onChangeText={(text) => setPasswordText(text)}
              value={password}
            />
            <TouchableOpacity
              style={styles.logIn}
              activeOpacity={0.6}
              onPress={() => {
                showDetails();
              }}
            >
              <Text style={styles.loginText}>Log In</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.ffg}>
            <Text style={styles.fogPass} onPress={() => {}}>
              Forgot Password?
            </Text>
            <View style={styles.rowContainer}>
              <View style={styles.dashLine} />
              <Text style={styles.rowContainerText}>or</Text>
              <View style={styles.dashLine} />
            </View>
            <TouchableOpacity
              style={styles.logInFbParent}
              activeOpacity={0.6}
              onPress={() => navigation.navigate("screenthree")}
            >
              <Image
                source={require("../assets/facebookIcon.png")}
                style={styles.fbIcon}
              />
              <Text style={styles.fbText}>Log in with Facebook</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.gmailLogIn} activeOpacity={0.6}>
              <Image
                source={require("../assets/googleIcon.png")}
                style={styles.gMailIcon}
              />
              <Text style={styles.gMail}>Log in with Gmail</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.endText}>
            <Text>
              Don't have an account?{" "}
              <Text
                style={styles.SU}
                onPress={() => navigation.navigate("screenthree")}
              >
                Sign Up
              </Text>
            </Text>
          </View>
        </View>
      </KeyboardAwareScrollView>
    </Container>
  );
}
const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
  },
  imgTop: {
    marginTop: 40,
    height: 140,
    width: 140,
    // borderWidth: 1,
  },
  EPL: {
    width: 342,
    // borderWidth: 1,
    // marginTop: 180,
  },
  inputEmail: {
    height: 56,
    borderRadius: 6,
    width: "100%",
    // borderWidth: 0.5,
    padding: 16,
    backgroundColor: "#F6F7FA",
  },
  inputPassword: {
    marginTop: 16,
    height: 56,
    borderRadius: 6,
    width: "100%",
    // borderWidth: 0.5,
    padding: 16,
    backgroundColor: "#F6F7FA",
  },
  logIn: {
    alignItems: "center",
    marginTop: 24,
    height: 56,
    borderRadius: 6,
    width: "100%",
    // borderWidth: 0.5,
    padding: 16,
    backgroundColor: "#EC5F5F",
  },
  loginText: { color: "#ffffff", fontSize: 14, fontWeight: "600" },
  ffg: {
    alignItems: "center",
    marginTop: 32,
    width: 343,
    // borderWidth: 1,
  },
  fogPass: {
    color: "#0082CD",
    fontWeight: "500",
    fontStyle: "italic",
  },
  or: {
    marginTop: 32,
  },
  logInFbParent: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 24,
    height: 56,
    borderRadius: 6,
    width: "100%",
    padding: 16,
    backgroundColor: "#0082CD",
  },
  fbIcon: {
    marginLeft: 67,
    marginRight: 16,
    width: 24,
    height: 24,
  },
  fbText: {
    color: "#FFFFFF",
    fontSize: 16,
  },
  gmailLogIn: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 16,
    height: 56,
    borderRadius: 6,
    width: "100%",
    // borderWidth: 0.5,
    padding: 16,
    backgroundColor: "#ffffff",
  },
  gMailIcon: {
    marginLeft: 77.5,
    marginRight: 16,
    width: 24,
    height: 24,
  },
  gMailTet: {
    fontSize: 16,
  },
  dashLine: {
    width: 144,
    height: 1,
    backgroundColor: "gray",
  },
  rowContainer: {
    flexDirection: "row",
    marginTop: 32,
    alignItems: "center",
    justifyContent: "space-between",
  },
  rowContainerText: {
    marginHorizontal: 5,
  },
  fbLogo: {
    flex: 1,
    height: 24,
    width: 24,
  },
  endText: {
    marginTop: 128,
    height: 24,
    width: 256,
    alignItems: "center",
    color: "#E5E5E5",
  },
  SU: {
    color: "blue",
  },
});

// {true ? "true" : "false"} this is known as tennering
