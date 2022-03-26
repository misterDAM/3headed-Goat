import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  ScrollView,
  ImageBackground,
  TouchableOpacity,
} from "react-native";

import Container from "./Container";

const Data = [
  require("../assets/AvatarRedHead.png"),
  require("../assets/Avatar.png"),
  require("../assets/AvatarGuy1.png"),
  require("../assets/AvatarRedHead.png"),
  require("../assets/AvatarRedHead.png"),
  require("../assets/AvatarGuy1.png"),
];

const BigData = [
  {
    img: require("../assets/baseBackground.png"),
    postTitle: "set the world on fire or die trying",
    postingTime: "5h 20m",
    postterimage: require("../assets/AvatarAsian.png"),
    postterName: "Laurel Seilha",
    postterjob: "product Designer",
    category: ["UI/UX", "illustration"],
  },
  {
    img: require("../assets/baseBackground2.png"),
    postTitle: "make love to the universe ",
    postingTime: "1h 01m",
    postterimage: require("../assets/profileAvater.png"),
    postterName: "Lucky john",
    postterjob: "lawyer",
    category: ["UI/UX", "3D Animation"],
  },
  {
    img: require("../assets/baseBackground.png"),
    postTitle: "fighting for your belife that can be influenced",
    postingTime: "9h 51m",
    postterimage: require("../assets/profileAvater.png"),
    postterName: "wall balmain",
    postterjob: "product ceo",
    category: ["illustration", "3D Animation"],
  },
];

const workBottin = ["All", "UI/UX", "illustration", "3D Animation"];

export default function ScreenFour({ navigation }) {
  const [selected, setselected] = useState("All");

  return (
    <Container>
      <View style={styles.profileAndRewardAndBell}>
        <View style={styles.AvaterView}>
          <Image
            style={styles.profilePhoto}
            source={require("../assets/profileAvater.png")}
          />

          <View style={styles.userNameAndAwards}>
            <Text style={styles.userName}>Hallo, Samuele!</Text>
            <View style={{ flexDirection: "row" }}>
              <Image
                style={styles.awardlogo}
                source={require("../assets/award.png")}
              />
              <Text style={styles.awardpoints}>
                <Text style={{ fontWeight: "700" }}>+1600</Text> points
              </Text>
            </View>
          </View>

          <TouchableOpacity onPress={() => navigation.navigate("screenfive")}>
            <Image
              style={styles.bellIcon}
              source={require("../assets/bellNotification.png")}
            />
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.outter}>
        <ScrollView
          contentContainerStyle={styles.liveProfileScrollView}
          horizontal={true}
        >
          {Data.map((item) => {
            return (
              <View style={styles.theMappedView}>
                <Image style={styles.imageInMapped} source={item} />
              </View>
            );
          })}
        </ScrollView>
      </View>

      <Text style={styles.upcomingView}>
        <Text style={styles.upCommingText}>Upcoming</Text> course of this week
      </Text>
      {/* this View blow is a set of bottons */}
      <View>
        <ScrollView
          contentContainerStyle={styles.bottonsScrollable}
          horizontal={true}
        >
          {workBottin.map((work) => {
            let isActive = selected === work;
            return (
              <View style={{ marginLeft: 16 }}>
                <TouchableOpacity
                  onPress={() => {
                    setselected(work);
                  }}
                  activeOpacity={0.6}
                  style={[
                    styles.eachBotton,
                    { backgroundColor: isActive ? "#EC5F5F" : "#F6F7FA" },
                  ]}
                >
                  <Text
                    style={{
                      fontWeight: "500",
                      color: isActive ? "#ffffff" : "#9D9FA0",
                    }}
                  >
                    {work}
                  </Text>
                </TouchableOpacity>
              </View>
            );
          })}
        </ScrollView>
      </View>

      <View style={{ height: 390 }}>
        <ScrollView horizontal={true}>
          {BigData.filter((item) =>
            selected === "All" ? item : item.category.includes(selected)
          ).map(
            ({
              img,
              postTitle,
              postterimage,
              postterName,
              postterjob,
              postingTime,
            }) => {
              return (
                <ImageBackground
                  style={styles.bigBackground}
                  resizeMode="contain"
                  source={img}
                >
                  <View style={styles.bigBfrontTextView}>
                    <Text style={styles.bigBfrontText}>{postTitle}</Text>
                  </View>
                  <View style={styles.timewrap}>
                    <Image
                      style={styles.timeIMG}
                      source={require("../assets/stopwatch.png")}
                    />
                    <Text style={styles.timerText}>{postingTime}</Text>
                  </View>
                  <View style={styles.addOns}>
                    <View style={styles.poppings1}>
                      <Text style={styles.poppingsText}>6 lessons</Text>
                    </View>
                    <View style={styles.poppings2}>
                      <Text style={styles.poppings2text}>UI/UX</Text>
                    </View>
                    <View style={styles.poppings}>
                      <Text style={styles.poppingsTextup}>free</Text>
                    </View>
                  </View>
                  <View style={styles.userAndJob}>
                    <Image style={styles.userAndJobImg} source={postterimage} />
                    <View style={{ marginLeft: 10.75 }}>
                      <Text style={styles.userJname}>{postterName}</Text>
                      <Text style={styles.userJob}>{postterjob}</Text>
                    </View>
                  </View>
                </ImageBackground>
              );
            }
          )}
        </ScrollView>
      </View>
      <View></View>

      {/* <View
        style={{
          marginTop: 18,
          height: 64,
          backgroundColor: "aqua",
        }}
      ></View> */}
    </Container>
  );
}

const styles = StyleSheet.create({
  parent: {
    flex: 1,
  },
  profileAndRewardAndBell: {
    flexDirection: "row",
  },
  AvaterView: {
    flexDirection: "row",
    marginTop: 60,
    marginLeft: 16,
    alignItems: "center",
  },
  profilePhoto: {
    height: 40,
    width: 40,
    marginRight: 10,
  },
  userNameAndAwards: {
    flexDirection: "column",
  },
  userName: {},
  award: {
    width: 16,
    height: 16,
  },
  awardlogo: {
    height: 16,
    width: 16,
  },
  awardpoints: {
    color: "gold",
  },
  bellIcon: {
    width: 16,
    height: 20,
    marginLeft: 141,
  },
  outter: { height: 80, marginTop: 30, overflow: "hidden" },
  liveProfileScrollView: {
    height: 74,
  },
  theMappedView: {
    height: 75,
    width: 75,
    borderWidth: 3,
    borderColor: "#EC5F5F",
    borderRadius: 24,
    alignItems: "center",
    justifyContent: "center",
    marginLeft: 15,
  },
  imageInMapped: { width: 70, height: 70 },
  bottonsScrollable: {
    // marginLeft: 16,
    marginTop: 16,
    height: 41,
    overflow: "hidden",
    // backgroundColor: "aqua",
  },
  eachBotton: {
    height: 41,
    borderRadius: 8,
    // width: 48,
    paddingHorizontal: 17,
    justifyContent: "center",
    alignItems: "center",
  },
  upcomingView: {
    marginTop: 28,
    marginLeft: 16,
    fontSize: 18,
  },
  upCommingText: { fontWeight: "700" },
  bigScroolScreen: {
    // marginLeft: 16,
  },
  bigBackground: {
    height: 360,
    width: 299,
    borderRadius: 24,
    marginLeft: 20,
    marginVertical: 10,
    // overflow: "hidden",
  },
  bigBfrontTextView: {
    marginTop: 190,
    marginLeft: 16.9,
    height: 48,
    width: 200.19,
    // borderWidth: 2,
  },
  bigBfrontText: { color: "#FFFFFF", fontSize: 18, flexWrap: "wrap" },
  timewrap: {
    marginLeft: 16.9,
    marginTop: 3.84,
    flexDirection: "row",
    justifyContent: "flex-start",
  },
  timeIMG: { height: 15.36, width: 16.9 },
  timerText: {
    color: "#FFFFFF",
    fontSize: 10,
    marginLeft: 8.45,
  },
  addOns: {
    flexDirection: "row",
    marginLeft: 16.9,
    marginTop: 15.36,
  },
  poppings: {
    marginLeft: 16.88,
    height: 18.24,
    backgroundColor: "#8D5EF2",
    borderRadius: 4,
    alignItems: "center",
    justifyContent: "center",
    width: 31.7,
  },
  poppingsTextup: {
    fontWeight: "500",
    fontSize: 10,
    color: "#ffffff",
  },
  poppings2: {
    marginLeft: 8.45,
    height: 18.24,
    width: 37,
    backgroundColor: "#0082CD",
    borderRadius: 4,
    alignItems: "center",
    justifyContent: "center",
  },
  poppings2text: {
    fontWeight: "500",
    fontSize: 10,
    color: "#ffffff",
  },
  poppings1: {
    height: 18.24,
    width: 58.11,
    backgroundColor: "aqua",
    borderRadius: 4,
    alignItems: "center",
    justifyContent: "center",
  },
  poppingsText: {
    fontWeight: "500",
    fontSize: 10,
    color: "#ffffff",
  },
  userAndJob: {
    flexDirection: "row",
    marginLeft: 16,
    marginTop: 8.68,
  },
  userAndJobImg: { height: 40, width: 40 },
  userJname: {
    fontSize: 16,
    fontWeight: "600",
    color: "#ffffff",
  },
  userJob: {
    fontSize: 10,
    fontWeight: "500",
    color: "#ffffff",
  },
});
