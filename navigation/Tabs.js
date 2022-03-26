import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import ScreenFour from "../src/ScreenFour";
import screenHome from "../src/screenHome";
import screenFive from "../src/screenFive";
import screenSix from "../src/screenSix";

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

const Tab = createBottomTabNavigator();

export const Tabs = () => {
  return (
    // <Container>
    <Tab.Navigator
      tabBarOptions={{
        showLabel: false,
        // style: {
        //   position: "absolute",
        //   bottom: 25,
        //   left: 20,
        //   right: 20,
        //   elevation: 0,
        //   backgroundColor: "aqua",
        //   borderRadius: 20,
        //   height: 20,
        // },
      }}
    >
      <Tab.Screen
        name="screenfour"
        component={ScreenFour}
        options={{
          tabBarStyle: [
            {
              display: "flex",
            },
            null,
          ],

          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <View style={{ alignItems: "center", justifyContent: "center" }}>
              <Image
                source={require("../assets/menuIcon.png")}
                resizeMode="contain"
                style={{
                  width: 25,
                  height: 25,
                  tintColor: focused ? "tomato" : "aqua",
                }}
              />
              <Text style={{ color: focused ? "red" : "aqua", fontSize: 12 }}>
                home
              </Text>
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="screensix"
        component={screenSix}
        options={{
          tabBarStyle: [
            {
              display: "flex",
            },
            null,
          ],

          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <View style={{ alignItems: "center", justifyContent: "center" }}>
              <Image
                source={require("../assets/DisableFooterIcon.png")}
                resizeMode="contain"
                style={{
                  width: 25,
                  height: 25,
                  tintColor: focused ? "tomato" : "aqua",
                }}
              />
              <Text style={{ color: focused ? "red" : "aqua", fontSize: 12 }}>
                Explor
              </Text>
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="screenfive"
        component={screenFive}
        options={{
          tabBarStyle: [
            {
              display: "flex",
            },
            null,
          ],

          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <View style={{ alignItems: "center", justifyContent: "center" }}>
              <Image
                source={require("../assets/DisableProfileFooter.png")}
                resizeMode="contain"
                style={{
                  width: 25,
                  height: 25,
                  tintColor: focused ? "tomato" : "aqua",
                }}
              />
              <Text style={{ color: focused ? "red" : "aqua", fontSize: 12 }}>
                user
              </Text>
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="screenhome"
        component={screenHome}
        options={{
          tabBarStyle: [
            {
              display: "flex",
            },
            null,
          ],

          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <View style={{ alignItems: "center", justifyContent: "center" }}>
              <Image
                source={require("../assets/messageFooter.png")}
                resizeMode="contain"
                style={{
                  width: 25,
                  height: 25,
                  tintColor: focused ? "tomato" : "aqua",
                }}
              />
              <Text style={{ color: focused ? "red" : "aqua", fontSize: 12 }}>
                message
              </Text>
            </View>
          ),
        }}
      />
    </Tab.Navigator>
    // </Container>
  );
};
const styles = StyleSheet.create({});
