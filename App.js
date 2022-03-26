import React from "react";
import ScreenOne from "./src/screen1";
import ScreenTwo from "./src/ScreenTwo";
import ScreenThree from "./src/screenThree";
import ScreenFour from "./src/ScreenFour";
import ScreenFive from "./src/screenFive";
import screenSix from "./src/screenSix";
import screenHome from "./src/screenHome";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
// import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Tabs } from "./navigation/Tabs";
import { View } from "react-native";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <View style={{ display: "flex", flex: 1 }}>
      <NavigationContainer>
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          <Stack.Screen name="splashScreen" component={ScreenOne} />
          <Stack.Screen name="screentwo" component={ScreenTwo} />
          <Stack.Screen name="screenthree" component={ScreenThree} />
          <Stack.Screen name="screenfour" component={ScreenFour} />
          <Stack.Screen name="screenhome" component={screenHome} />
          <Stack.Screen
            options={{ headerShown: false }}
            name="tabdashboard"
            component={Tabs}
          />
          <Stack.Screen name="screenfive" component={ScreenFive} />
          <Stack.Screen name="screensix" component={screenSix} />

          {/* <Stack.Screen name="screenone" component={ScreenOne} /> */}
        </Stack.Navigator>
      </NavigationContainer>
    </View>
  );
}
