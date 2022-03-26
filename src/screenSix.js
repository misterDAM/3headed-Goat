import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  TextInput,
} from "react-native";
import React, { useState } from "react";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import Container from "./Container";

const theClick = [require("../assets/CheckBox.png")];

const calenderSection = [
  "all",
  "all",
  "all",
  "all",
  "all",
  "all",
  "all",
  "all",
  "all",
];

export default function screenSix({ navigation }) {
  // const [ checkBoxCheck, setcheckBoxCheck] useState ={""};
  return (
    <Container>
      <KeyboardAwareScrollView>
        <View style={{ flexDirection: "row" }}>
          <View style={styles.TopSection}>
            <View style={styles.chevronleft}>
              <TouchableOpacity
                onPress={() => navigation.navigate("screenfive")}
              >
                <Image
                  style={styles.chevro}
                  source={require("../assets/chevronSix.png")}
                />
              </TouchableOpacity>
            </View>
          </View>
          <Text style={styles.TopText}>Course Details</Text>
          <View style={styles.Tophrt}>
            <View style={styles.hert}>
              <TouchableOpacity
                onPress={() => navigation.navigate("screenone")}
              >
                <Image
                  style={styles.heartt}
                  source={require("../assets/heartSix.png")}
                />
              </TouchableOpacity>
            </View>
          </View>
        </View>
        <View style={styles.jumper}>
          <View style={styles.draggerParent}>
            <TouchableOpacity style={styles.dragger} />
          </View>
          <View style={styles.AAandCalender}>
            <View style={styles.AAandAdjust}>
              <Text style={styles.Atime}>Available time</Text>
              <Text style={styles.Adjust}>Adjust to your schedule</Text>
            </View>
            <TouchableOpacity style={styles.calenderparent}>
              <Image
                style={styles.calenderImg}
                source={require("../assets/calendar.png")}
              />
            </TouchableOpacity>
          </View>
          <View style={styles.schedulParent}>
            {calenderSection.map((passer) => {
              return (
                <View style={styles.schedulChild}>
                  <Text style={styles.scheduleText}>{passer}</Text>
                </View>
              );
            })}
          </View>
          <View style={styles.emailandNum}>
            <Text style={styles.emailTet}>Email</Text>
            <TextInput
              style={styles.emailSection}
              placeholder="   Email"
            ></TextInput>
          </View>
          <View style={styles.tellPhonAndSdul}>
            <Text style={styles.emailTet}>Telp number</Text>
            <TextInput
              style={styles.emailSection}
              placeholder="   Tell"
            ></TextInput>
          </View>
          <View style={styles.lastb4button}>
            <Text style={styles.schudulandTime}> Schedule date and Time </Text>
            <View style={{ flexDirection: "row", marginTop: 8 }}>
              <Image
                style={styles.checkbox}
                // source={} onPress={()=>{       // i need to fix and add onPress
                // set( );
                // }}  //  let checkBoxCheck = isActive === work;      // .................................................................
              />
              <Text>12 October, 2020 at 09.45 AM</Text>
            </View>
          </View>
          <View style={styles.parentButton}>
            <TouchableOpacity activeOpacity={0.6} style={styles.Login}>
              <Text>Log in</Text>
            </TouchableOpacity>
          </View>
        </View>
      </KeyboardAwareScrollView>
    </Container>
  );
}

const styles = StyleSheet.create({
  TopSection: {
    marginLeft: 16,
    marginTop: 62,
  },
  chevronleft: {
    height: 44,
    width: 44,
  },
  chevro: {
    height: 24,
    width: 24,
    marginVertical: 10,
    marginHorizontal: 10,
  },
  TopText: {
    marginLeft: 61,
    marginTop: 72,
    marginRight: 81,
    fontSize: 18,
    fontWeight: "600",
  },
  Tophrt: {
    marginTop: 72,
  },
  hert: {
    height: 24,
  },
  heartt: {
    height: 26,
    width: 28,
  },
  jumper: {
    height: 660,
    width: "100%",
    borderTopLeftRadius: 24,
    borderTopRightRadius: 24,
    backgroundColor: "#ffffff",
    marginTop: 40,
    overflow: "hidden",
  },
  draggerParent: {
    marginLeft: 148,
    height: 10,
    width: 100,
  },
  dragger: {
    width: 80,
    height: 8,
    borderRadius: 8,
    backgroundColor: "#9D9FA0",
    marginTop: 12,
  },
  AAandCalender: {
    flexDirection: "row",
  },
  AAandAdjust: {
    marginTop: 44,
    marginLeft: 32,
    marginRight: 85,
  },
  Atime: {
    fontSize: 18,
    fontWeight: "600",
  },
  Adjust: {
    fontWeight: "400",
    fontSize: 16,
    color: "#8C8C8C",
  },
  calenderparent: {
    marginTop: 48,
    height: 44,
    width: 44,
    borderRadius: 8,
    backgroundColor: "#8C8C8C",
    justifyContent: "center",
    alignItems: "center",
  },
  calenderImg: {
    height: 24,
    width: 24,
  },
  schedulParent: {
    display: "flex",
    marginLeft: 32,
    marginTop: 32,
    height: 160,
    width: 176,
    justifyContent: "flex-start",
    flexDirection: "row",
    flexWrap: "wrap",
    overflow: "hidden",
  },
  schedulChild: {
    width: 48,
    height: 41,
    borderRadius: 8,
    backgroundColor: "#EC5F5F",
    justifyContent: "center",
    alignItems: "center",
    marginRight: 10,
    marginBottom: 10,
  },
  emailandNum: {
    marginLeft: 16,
    marginTop: 24,
  },
  scheduleText: {
    fontWeight: "500",
    fontSize: 14,
    color: "#ffffff",
  },
  emailTet: {
    fontWeight: "600",
    fontSize: 14,
    marginBottom: 4,
  },
  emailSection: {
    paddingLeft: 20,
    height: 56,
    width: 343,
    backgroundColor: "#F6F7FA",
  },
  lastb4button: {
    marginLeft: 16,
    marginTop: 16,
  },
  tellPhonAndSdul: {
    marginTop: 16,
    marginLeft: 16,
  },
  schudulandTime: {
    fontSize: 14,
    fontWeight: "600",
  },
  checkbox: {
    height: 20,
    width: 20,
    marginRight: 8,
  },
  parentButton: {
    // marginLeft: 16,
    marginTop: 32,
    alignItems: "center",
  },
  Login: {
    alignItems: "center",
    justifyContent: "center",
    height: 56,
    width: 343,
    backgroundColor: "#EC5F5F",
    borderRadius: 8,
  },
});
