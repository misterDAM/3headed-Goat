import {
  View,
  Text,
  TextInput,
  StyleSheet,
  Image,
  TouchableOpacity,
  ScrollView,
  ImageBackground,
} from "react-native";
import React from "react";
import Container from "./Container";

const postPeople = [
  {
    profileImg: require("../assets/AvatarGuy1.png"),
    profileDot: require("../assets/bellNotificationBlinker.png"),
    fileName: "ROger Hulg",
    TextArea: "Hey, can i ask something? i need your help please",
    theTime: "15 min",
    messageCount: "",
    showBlinker: false,
    BlueNotificationCont: false,
  },
  {
    profileImg: require("../assets/AvatarRedHead.png"),
    profileDot: require("../assets/bellNotificationBlinker.png"),
    fileName: "emma Hulg",
    TextArea: "Hey, can i ask something? i need your help please",
    theTime: "15 min",
    messageCount: "4",
    showBlinker: true,
    BlueNotificationCont: true,
  },
  {
    profileImg: require("../assets/Avatar.png"),
    profileDot: require("../assets/bellNotificationBlinker.png"),
    fileName: "Aciea boobs",
    TextArea: "Hey, can i ask something? i need your help please",
    theTime: "15 min",
    messageCount: "5",
    showBlinker: false,
    BlueNotificationCont: true,
  },
  {
    profileImg: require("../assets/AvatarGuy1.png"),
    profileDot: require("../assets/bellNotificationBlinker.png"),
    fileName: "alex Ugo",
    TextArea: "Hey, can i ask something? i need your help please",
    theTime: "15 min",
    messageCount: "1",
    showBlinker: true,
    BlueNotificationCont: false,
  },
  {
    profileImg: require("../assets/profileAvater.png"),
    profileDot: require("../assets/bellNotificationBlinker.png"),
    fileName: "Ruwaaa ada",
    TextArea: "Hey, can i ask something? i need your help please",
    theTime: "15 min",
    messageCount: "2",
    showBlinker: true,
    BlueNotificationCont: true,
  },
  {
    profileImg: require("../assets/profileAvater.png"),
    profileDot: require("../assets/bellNotificationBlinker.png"),
    fileName: "Ruwaaa ada",
    TextArea: "Hey, can i ask something? i need your help please",
    theTime: "15 min",
    messageCount: "2",
    showBlinker: true,
    BlueNotificationCont: false,
  },
  {
    profileImg: require("../assets/profileAvater.png"),
    profileDot: require("../assets/bellNotificationBlinker.png"),
    fileName: "Ruwaaa ada",
    TextArea: "Hey, can i ask something? i need your help please",
    theTime: "15 min",
    messageCount: "2",
    showBlinker: true,
    BlueNotificationCont: true, //this is going to be a function which will be ture is once the conut function is set to 1 and above ealse is going to be negative//
  },
];

export default function screenHome({ navigation }) {
  // const showBlinker = true;
  return (
    <Container>
      <View style={{ alignItems: "center" }}>
        <View>
          <View style={styles.topSection}>
            <View>
              <Image
                style={styles.avater}
                onPress={() => {
                  navigation.navigate("screensix");
                }}
                source={require("../assets/Avatar.png")}
              />
              <Image
                style={styles.blinker}
                source={require("../assets/bellNotificationBlinker.png")}
              />
            </View>

            <View style={styles.profileSideText}>
              <Text style={styles.myMessage}>My Messages</Text>
              <Text style={styles}>2 new messages</Text>
            </View>
            <View>
              <Image
                style={styles.bell}
                onPress={() => {
                  navigation.navigate("screensix");
                }}
                source={require("../assets/bellNotification.png")}
              />
              <Image
                style={styles.blinkerNotification}
                source={require("../assets/bellNotificationBlinker.png")}
              />
            </View>
          </View>

          <View style={styles.searchSec}>
            <TextInput
              style={styles.searchArea}
              placeholder=" Search here"
            ></TextInput>

            <TouchableOpacity
              style={styles.searchbuttParent}
              onPress={() => {
                navigation.navigate("screensix");
              }}
            >
              <Image
                source={require("../assets/searchIcon.png")}
                style={styles.theSearch}
              />
            </TouchableOpacity>
          </View>

          <ScrollView style={{ marginTop: 24, marginLeft: 16, height: 578 }}>
            {postPeople.map(
              ({
                profileImg,
                fileName,
                TextArea,
                theTime,
                messageCount,
                showBlinker,
                BlueNotificationCont,
              }) => {
                return (
                  <View style={styles.everyonr}>
                    <View style={styles.profileListProfileParent}>
                      <Image
                        source={profileImg}
                        style={styles.profileListProfile}
                      />
                      {showBlinker && (
                        <Image
                          style={styles.blinker2}
                          source={require("../assets/bellNotificationBlinker.png")}
                        />
                      )}
                    </View>

                    <TouchableOpacity style={{ marginLeft: 16 }}>
                      <Text style={styles.pLpName}>{fileName}</Text>
                      <Text style={styles.fullTextArea}>{TextArea}</Text>
                    </TouchableOpacity>

                    <View>
                      <Text style={styles.timerSection}>{theTime}</Text>

                      {BlueNotificationCont && (
                        <View style={styles.reading}>
                          <Text style={styles.messCount}>{messageCount}</Text>
                        </View>
                      )}
                    </View>

                    <View style={styles.lowLine} />
                  </View>
                );
              }
            )}
          </ScrollView>
        </View>
        {/* <View style={styles.bottomTab}></View> */}
      </View>
    </Container>
  );
}

const styles = StyleSheet.create({
  topSection: {
    marginLeft: 16,
    flexDirection: "row",
    marginTop: 64,
    alignItems: "center",
  },
  avater: {
    height: 40,
    width: 40,
  },
  blinkerNotification: {
    position: "absolute",
    left: 15,
    // top: 1,
    height: 12,
    width: 12,
  },
  blinker: {
    position: "absolute",
    left: 15,
    top: 32,
    height: 11,
    width: 11,
  },
  blinker2: {
    position: "absolute",
    left: 30,
    top: 30,
    height: 15,
    width: 13,
  },
  profileSideText: {
    marginLeft: 18,
    marginRight: 149,
  },
  myMessage: {
    fontWeight: "700",
    fontSize: 16,
  },
  bell: {
    height: 29,
    width: 24,
  },
  searchSec: {
    justifyContent: "center",
    height: 56,
    width: 343,
    marginTop: 32,
    marginLeft: 16,
  },
  searchArea: {
    paddingLeft: 10,
    height: 56,
    width: 340,
    // borderWidth: 2,
    borderRadius: 6,
    backgroundColor: "#F6F7FA",
  },
  searchbuttParent: {
    position: "absolute",
    left: 285,
    top: 1,
    // justifyContent: "center",
  },
  theSearch: {
    width: 60,
    height: 70,
  },
  everyonr: {
    height: 83,
    width: 343,
    marginBottom: 16,
    flexDirection: "row",
  },
  profileListProfileParent: {
    height: 43,
    width: 46,
  },
  profileListProfile: {
    height: 40,
    width: 40,
  },
  profileListProfileDot: {
    height: 15,
    width: 15,
    position: "absolute",
  },
  pLpName: {
    fontWeight: "600",
    fontSize: 16,
    marginBottom: 1,
  },
  fullTextArea: {
    fontWeight: "400",
    fontSize: 14,
    color: "#8C8C8C",
    flexWrap: "wrap",
    alignContent: "flex-start",
    width: 230,
  },
  timerSection: {
    fontWeight: "400",
    fontSize: 14,
    marginTop: 3,
    color: "#C7C9D9",
  },
  reading: {
    height: 24,
    width: 24,
    borderRadius: 12,
    backgroundColor: "#0082CD",
    marginTop: 20,
    marginLeft: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  messCount: {
    color: "#ffffff",
  },
  lowLine: {
    backgroundColor: "aqua",
    height: 3,
    width: 287,
    marginTop: 16,
    marginLeft: 72,
  },
  bottomTab: {
    height: 64,
    width: 376,
    borderWidth: 2,
    position: "absolute",
    top: 746,
    backgroundColor: "aqua",
  },
});
