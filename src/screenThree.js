import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  TextInput,
} from "react-native";
import Container from "./Container";

export default function ScreenThree({ navigation }) {
  const [fullname, setfullname] = useState("");
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const signUpDetails = () => {
    alert(
      "thefull name is this = " +
        fullname +
        " password is this = " +
        password +
        " and the email is = " +
        email
    );
  };
  return (
    <Container>
      <View style={styles.container}>
        <TouchableOpacity onPress={() => navigation.navigate("screenone")}>
          <Image
            style={styles.imgTop}
            source={require("../assets/Logo2.png")}
          />
        </TouchableOpacity>
        <View style={styles.FEPS}>
          <TextInput
            style={styles.fullName}
            placeholder="Fullname"
            onChangeText={(text) => {
              setfullname(text);
            }}
            value={fullname}
          />
          <TextInput
            style={styles.inputEmail}
            placeholder="Email"
            onChangeText={(text) => {
              setemail(text);
            }}
            value={email}
          />
          <View style={styles.passwordAndHideImg}>
            <TextInput
              style={styles.inputPassword}
              placeholder="Password"
              onChangeText={(text) => {
                setpassword(text);
              }}
              value={password}
            />
            <TouchableOpacity
              style={styles.hidePassImgTouch}
              onPress={() => {}}
            >
              <Image
                style={styles.hidePassImg}
                source={require("../assets/passwordHide.png")}
              />
            </TouchableOpacity>
          </View>
          <TouchableOpacity
            style={styles.signUp}
            activeOpacity={0.6}
            onPress={() => signUpDetails()}
          >
            <Text>sign Up</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.ofg}>
          <View style={styles.rowContainer}>
            <View style={styles.dashLine} />
            <Text style={styles.rowContainerText}>or</Text>
            <View style={styles.dashLine} />
          </View>
          <TouchableOpacity
            style={styles.logInFb}
            activeOpacity={0.6}
            onPress={() => navigation.navigate("tabdashboard")}
          >
            <Image
              source={require("../assets/facebookIcon.png")}
              style={styles.fBLogo}
            />
            <Text style={styles.fBText}>Log in with Facebook</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.gmailLogIn} activeOpacity={0.6}>
            <Image
              source={require("../assets/googleIcon.png")}
              style={styles.gMlogo}
            />
            <Text style={styles.gMText}>Log in with Gmail</Text>
          </TouchableOpacity>
          <View style={styles.ofgEndText}>
            <Text style={styles.theText}>
              by signing up accept the{" "}
              <Text style={styles.TS} onPress={() => {}}>
                terms of Service
              </Text>
              and
              <Text style={styles.PP} onPress={() => {}}>
                privacy Policy
              </Text>
            </Text>
          </View>
        </View>
        <View style={styles.endText}>
          <Text>
            already have an account{" "}
            <Text
              style={styles.LI}
              onPress={() => navigation.navigate("screentwo")}
            >
              Log in
            </Text>
          </Text>
        </View>
      </View>
    </Container>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    flex: 1,
  },
  imgTop: {
    marginTop: 40,
    height: 140,
    width: 140,
    // borderWidth: 1,
  },
  FEPS: {
    width: 342,
  },
  fullName: {
    height: 56,
    borderRadius: 6,
    width: "100%",
    padding: 16,
    backgroundColor: "#E5E5E5",
  },
  inputEmail: {
    height: 56,
    borderRadius: 6,
    width: "100%",
    marginTop: 16,
    padding: 16,
    backgroundColor: "#E5E5E5",
  },
  inputPassword: {
    // flex: 1,
    height: 56,
    width: "100%",
    paddingHorizontal: 16,
    // marginLeft: 16,
  },
  passwordAndHideImg: {
    flexDirection: "row",
    backgroundColor: "#E5E5E5",
    marginTop: 16,
    borderRadius: 6,
    alignItems: "center",
    // paddingHorizontal: 16,
  },

  hidePassImgTouch: { position: "absolute", right: 10 },
  hidePassImg: {
    // right: 3,
    // top: 2,
    height: 24,
    // alignItems: "center",
    width: 24,
    marginRight: 16,
  },
  signUp: {
    alignItems: "center",
    marginTop: 24,
    height: 56,
    borderRadius: 6,
    width: "100%",
    // borderWidth: 0.5,
    padding: 16,
    backgroundColor: "#EC5F5F",
  },
  ofg: {
    alignItems: "center",
    marginTop: 32,
    width: 343,
  },
  or: {
    marginTop: 32,
  },
  logInFb: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 16,
    height: 56,
    borderRadius: 6,
    width: "100%",
    // borderWidth: 0.5,
    padding: 16,
    backgroundColor: "#0082CD",
  },
  fBLogo: {
    marginLeft: 67,
    marginRight: 16,
    height: 24,
    width: 24,
  },
  fBText: {
    fontSize: 16,
    color: "#ffffff",
  },
  gmailLogIn: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 16,
    height: 56,
    borderRadius: 6,
    width: "100%",
    padding: 16,
    backgroundColor: "#E5E5E5",
  },
  gMlogo: {
    height: 24,
    width: 24,
    marginRight: 16,
    marginLeft: 77.5,
  },
  gMText: {
    fontSize: 16,
    color: "#303030",
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
  ofgEndText: {
    textAlign: "center",
    marginTop: 14,
    color: "#F6F7FA",
  },
  theText: {
    fontSize: 14,
  },
  TS: {
    color: "blue",
  },
  PP: {
    color: "blue",
  },
  LI: {
    color: "blue",
  },
  endText: {
    marginTop: 39,
    height: 24,
    width: 256,
    alignItems: "center",
    textShadowColor: "#9D9FA0",
    fontStyle: "normal",
  },
});
