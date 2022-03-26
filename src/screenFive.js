import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import React from "react";
import Container from "./Container";
import { ImageBackground, ScrollView } from "react-native";

const DesignSprintEpistole = {
  vidPost: require("../assets/BackgroundLand.png"),
  headderText: "step design sprint for biginner",
  bodyText:
    "In this course I'll show the step by step, day by day process to build better products, just as Google, Slack, KLM and manu other do.",
  posterProfile: require("../assets/AvatarRedHead.png"),
  posterName: "Laurel Seilha",
  posterJobDiscription: "product Designer",
};

const MoreVidSection = [
  {
    playImage: require("../assets/PlayBaseBackground.png"),
    playBut: require("../assets/playarrow.png"),
    playbutText: "How to get feedback on their products in just 5 days",
    playbutTextTime: "04:10m",
  },
  {
    playImage: require("../assets/PlayBaseBackground.png"),
    playBut: require("../assets/playarrow.png"),
    playbutText: "How to get feedback on their products in just 5 days",
    playbutTextTime: "04:10m",
  },
  {
    playImage: require("../assets/PlayBaseBackground.png"),
    playBut: require("../assets/playarrow.png"),
    playbutText: "How to get feedback on their products in just 5 days",
    playbutTextTime: "04:10m",
  },
  {
    playImage: require("../assets/PlayBaseBackground.png"),
    playBut: require("../assets/playarrow.png"),
    playbutText: "How to get feedback on their products in just 5 days",
    playbutTextTime: "04:10m",
  },
];
const Thetime = { incomingTime: "5h 21m" };

export default function screenFive({ navigation }) {
  return (
    <Container>
      <ScrollView>
        <View style={styles.backCourseHeart}>
          <TouchableOpacity onPress={() => navigation.navigate("screenfour")}>
            <Image
              style={styles.backArrow}
              source={require("../assets/backArrow.png")}
            />
          </TouchableOpacity>

          <Text style={styles.course}>Course Details</Text>

          <TouchableOpacity
            onPress={() => {
              navigation.navigate("screensix");
            }}
          >
            <Image
              style={styles.lovveIcon}
              source={require("../assets/heartoutline.png")}
            />
          </TouchableOpacity>
        </View>

        <ImageBackground
          style={styles.videoInStyl}
          source={DesignSprintEpistole.vidPost}
        >
          <TouchableOpacity style={styles.playBottonTouc}>
            <Image
              style={styles.playBotton}
              source={require("../assets/videoPlayIcon.png")}
            />
          </TouchableOpacity>
        </ImageBackground>

        <View style={styles.bigVid}> </View>

        <Text style={styles.videoTitle}>
          {DesignSprintEpistole.headderText}
        </Text>

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

        <View style={styles.EpistleSide}>
          <Text style={styles.epistleStyle}>
            {DesignSprintEpistole.bodyText}
          </Text>
        </View>

        <View style={styles.userProfile}>
          <View style={styles.profilAndName}>
            <Image
              style={styles.profilePhoto}
              source={DesignSprintEpistole.posterProfile}
            />
            <View style={{ marginLeft: 10 }}>
              <Text style={styles.posterNameTxt}>
                {DesignSprintEpistole.posterName}
              </Text>
              <Text style={styles.posterJobDisTxt}>
                {DesignSprintEpistole.posterJobDiscription}
              </Text>
            </View>
            <View style={{ marginLeft: 96 }}>
              <View style={styles.timetime}>
                <Image
                  style={styles.theTimeImage}
                  source={require("../assets/stopwatch.png")}
                />
                <Text style={styles.theTime}>{Thetime.incomingTime}</Text>
              </View>
              <View style={styles.belowBotton}>
                <Text style={styles.eBook}>free e-book</Text>
              </View>
            </View>
          </View>
        </View>

        <View style={styles.parentotherVidSec}>
          {MoreVidSection.map(
            ({ playImage, playBut, playbutText, playbutTextTime }) => {
              return (
                <TouchableOpacity onPress={""} style={styles.otherVideos}>
                  <ImageBackground
                    style={styles.backgroudVidsScroll}
                    source={playImage}
                  >
                    <Image style={styles.playme} source={playBut} />
                  </ImageBackground>
                  <View style={styles.buttTextParent}>
                    <Text style={styles.buttText}>{playbutText}</Text>
                    <Text style={styles.ButTime}>{playbutTextTime}</Text>
                  </View>
                </TouchableOpacity>
              );
            }
          )}
        </View>
      </ScrollView>

      <View style={styles.fButtonParent}>
        <TouchableOpacity onPress={""}>
          <View style={styles.FclassButtpn}>
            <Text style={styles.Fclass}>Follow class</Text>
          </View>
        </TouchableOpacity>
      </View>
    </Container>
  );
}
const styles = StyleSheet.create({
  backCourseHeart: {
    flexDirection: "row",
    alignItems: "center",
  },
  backArrow: {
    marginLeft: 26,
    marginTop: 72,
    width: 30,
    height: 40,
  },
  course: {
    marginLeft: 61,
    marginRight: 81,
    fontSize: 15,
    fontWeight: "600",
    marginTop: 72,
  },
  lovveIcon: {
    // marginLeft: 83,
    marginTop: 72,
    height: 40,
    width: 45,
  },
  videoInStyl: {
    width: 343,
    height: 230,
    marginLeft: 16,
    marginTop: 32,
  },
  playBottonTouc: {
    marginLeft: 136,
    marginTop: 79,
  },
  playBotton: {
    height: 72,
    width: 72,
  },
  videoTitle: {
    marginLeft: 17,
    marginTop: 22,
    fontSize: 24,
    fontWeight: "600",
  },
  addOns: {
    flexDirection: "row",
    marginLeft: 17,
    marginTop: 16,
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
  EpistleSide: {
    height: 63,
    width: 343,
    marginTop: 8,
    marginLeft: 16,
    marginBottom: 23,
  },
  epistleStyle: {
    fontWeight: "400",
    fontSize: 14,
  },
  userProfile: {
    flexDirection: "row",
    marginLeft: 17,
  },
  profilAndName: {
    flexDirection: "row",
  },
  profilePhoto: {
    borderRadius: 20,
    height: 40,
    width: 40,
  },
  posterNameTxt: {
    fontSize: 16,
    fontWeight: "600",
  },
  posterJobDisTxt: {
    fontWeight: "500",
    fontSize: 10,
    color: "#9D9FA0",
  },
  timetime: {
    flexDirection: "row",
    alignItems: "center",
    marginLeft: 7,
  },
  theTimeImage: {
    height: 16,
    width: 16,
  },
  theTime: {
    marginLeft: 8,
    fontWeight: "500",
    fontSize: 10,
    color: "#8C8C8C",
  },
  belowBotton: {
    height: 23,
    width: 86,
    borderRadius: 20,
    backgroundColor: "#FCCC75",
    alignItems: "center",
    justifyContent: "center",
  },
  eBook: {
    color: "#ffffff",
    fontWeight: "500",
    fontSize: 10,
  },
  parentotherVidSec: {
    marginHorizontal: 16,
    marginTop: 31,
  },
  otherVideos: {
    flexDirection: "row",
    marginBottom: 9,
  },
  backgroudVidsScroll: {
    height: 67,
    width: 67,
    marginRight: 16,
    justifyContent: "center",
    alignItems: "center",
  },
  playme: {
    height: 16.75,
    width: 13.16,
  },
  buttTextParent: {
    marginLeft: 10,
    height: 42,
    width: 236,
  },
  buttText: {
    fontSize: 14,
    fontWeight: "600",
    marginTop: 8,
  },
  ButTime: {
    marginTop: 4,
    fontSize: 14,
    fontWeight: "400",
    color: "#8C8C8C",
  },
  fButtonParent: {
    // marginHorizontal: 16,
    alignItems: "center",
    position: "absolute",
    bottom: 80,
  },
  FclassButtpn: {
    width: 343,
    height: 56,
    borderRadius: 8,
    backgroundColor: "#EC5F5F",
    justifyContent: "center",
    alignItems: "center",
  },
  Fclass: {
    fontSize: 16,
    fontWeight: "500",
    color: "#ffffff",
  },
});
