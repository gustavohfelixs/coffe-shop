import React, { useEffect, useState } from "react";
import {
  Pressable,
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  StatusBar,
  FlatList,
  ScrollView,
  SafeAreaView,
} from "react-native";
import OnboardImage from "./assets/onboard.png";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { SimpleLineIcons } from "@expo/vector-icons";
import { Feather, Entypo, AntDesign } from "@expo/vector-icons";
import { Banner } from "./assets/Banner.png";
import { FlatWhite } from "./assets/flat-white.png";
import {
  useFonts,
  Sora_600SemiBold,
  Sora_400Regular,
} from "@expo-google-fonts/dev";

import Ionicons from "react-native-vector-icons/Ionicons";

import Home from "./src/telas/Home";
import Sobre from "./src/telas/Sobre";
import { NavigationContainer } from "@react-navigation/native";

import textos from "./src/mocks/sobre/textos";

const mock = {
  banner: Banner,
};

const buttons = [
  {
    id: "1",
    title: "All Coffes",
    key: "all",
  },
  {
    id: "2",
    title: "Mocha",
    key: "Mocha",
  },
  {
    id: "3",
    title: "Flat",
    key: "Flat",
  },
  {
    id: "4",
    title: "All",
    key: "al",
  },
  {
    id: "5",
    title: "Mocha",
    key: "Moha",
  },
  {
    id: "6",
    title: "Flat",
    key: "Flt",
  },
];

const Stack = createNativeStackNavigator();

const Tab = createBottomTabNavigator();

const CoffeButton = ({ pressed, mock }) => {
  return (
    <Pressable
      style={({ pressed }) => [
        { backgroundColor: "#FFF" },
        {
          backgroundColor: pressed ? "#9E633E" : "#C67C4E",
          width: 87,
          height: 29,
          marginTop: 32,
          alignItems: "center",
          justifyContent: "center",
          borderRadius: 6,
        },
      ]}
      onPress={() => {
        console.log("opa");
      }}
    >
      <Text
        style={{
          fontFamily: "Sora_600SemiBold",
          fontSize: 16,
          color: "#FFFF",
        }}
      >
        {mock.title}
      </Text>
    </Pressable>
  );
};

const mockCoffe = [
  {
    id: 1,
    name: "Caffe Mocha",
    description: "Deep Foam",
    price: 4.53,
    rating: 4.8,
    photo: require("./assets/mocha.png"),
  },
  {
    id: 2,
    name: "Flat White",
    description: "Deep Foam",
    price: 3.53,
    rating: 4.9,
    photo: require("./assets/flat-white.png"),
  },
  {
    id: 3,
    name: "Caffe Mocha",
    description: "Deep Foam",
    price: 4.53,
    rating: 4.8,
    photo: require("./assets/mocha.png"),
  },
  {
    id: 4,
    name: "Flat White",
    description: "Deep Foam",
    price: 3.53,
    rating: 4.9,
    photo: require("./assets/flat-white.png"),
  },
];
const CoffeCard = ({ ...mockCoffe }) => {
  return (
    <View
      style={{
        width: 156,
        height: 238,
        backgroundColor: "#FFF",
        borderRadius: 10,
      }}
      elevation={2}
    >
      <View style={{ padding: 8, position: "absolute" }}>
        <Image
          source={mockCoffe.photo}
          style={{ width: 140, height: 128 }}
        ></Image>
        <Text
          style={{
            paddingTop: 8,
            fontFamily: "Sora_600SemiBold",
            fontSize: 20,
          }}
        >
          {mockCoffe.name}
        </Text>
        <Text
          style={{
            fontFamily: "Sora_400Regular",
            fontSize: 16,
            color: "#A2A2A2",
          }}
        >
          {mockCoffe.description}
        </Text>
        <View style={{ flexDirection: "row", paddingTop: 8 }}>
          <Text style={{ fontFamily: "Sora_600SemiBold", fontSize: 26 }}>
            $ {mockCoffe.price}
          </Text>
          <View style={{ paddingLeft: 40 }}>
            <AntDesign
              name="plus"
              size={12}
              color="white"
              style={{
                backgroundColor: "#C67C4E",
                padding: 10,
                borderRadius: 8,
                alignSelf: "center",
                transform: "rotate(90deg)",
              }}
            />
          </View>
        </View>
      </View>
      <View style={{ top: 16, left: 110, flexDirection: "row" }}>
        <AntDesign name="star" size={12} color="#FBBE21" />
        <Text
          style={{
            color: "#FFFF",
            fontFamily: "Sora_600SemiBold",
            fontSize: 10,
            paddingLeft: 2,
          }}
        >
          {mockCoffe.rating}
        </Text>
      </View>
    </View>
  );
};

export default function App() {
  let [fontsLoaded] = useFonts({
    Sora_600SemiBold,
    Sora_400Regular,
  });

  if (!fontsLoaded) {
    return <View />;
  }

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          options={{ headerShown: false }}
          name="HomeScreen"
          component={HomeScreen}
        ></Stack.Screen>
        <Stack.Screen
          options={{ headerShown: false }}
          name="Details"
          component={TabsMenu}
        ></Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );

  // export default SearchBar;
  // return (

  // <NavigationContainer>
  //   <Stack.Navigator>
  //     <Stack.Screen
  //       options={{ headerShown: false }}
  //       name="Home"
  //       component={HomeScreen}
  //     />

  //     <Stack.Screen name="Details" component={DetailsScreen}></Stack.Screen>
  //   </Stack.Navigator>
  // </NavigationContainer>

  // <View style={styles.container}>
  //   <Text>Open up App.js to start working on your app!</Text>
  //   <StatusBar style="auto" />
  // </View>
  // );
}

function TabsMenu() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === "Home") {
            iconName = focused ? "home" : "home-outline";
          } else if (route.name === "Sobre Nós") {
            iconName = focused ? "question" : "question-outline";
          } else if (route.name === "Carrinho") {
            iconName = focused ? "cart" : "cart-outline";
          } else if (route.name === "Lista de Desejos") {
            iconName = focused ? "heart" : "heart-outline";
          }

          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: "#C67C4E",
        tabBarInactiveTintColor: "gray",
        tabBarHideOnKeyboard: true,
        headerShown: false,
      })}
    >
      <Tab.Screen name="Home" component={DetailsScreen}></Tab.Screen>
      <Tab.Screen name="Sobre Nós" component={SobreNos}></Tab.Screen>
      <Tab.Screen name="Carrinho" component={DetailsScreen}></Tab.Screen>
      <Tab.Screen
        name="Lista de Desejos"
        component={DetailsScreen}
      ></Tab.Screen>
    </Tab.Navigator>
  );
}
function DetailsScreen() {
  return (
    <View>
      <Home></Home>
    </View>
    // <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
    //   <Text>Details Screen</Text>
    // </View>
  );
}

function SobreNos() {
  return (
    <View>
      <Sobre {...textos}></Sobre>
    </View>
  );
}

function HomeScreen({ navigation }) {
  return (
    <View style={{ backgroundColor: "#050505", width: "100%", height: "100%" }}>
      <Image
        // blurRadius={10}
        resizeMode="cover"
        style={styles.onboard_image}
        source={OnboardImage}
      />
      <View style={styles.info_section}>
        <Text style={styles.top_text}>
          Fall in Love with Coffe in Blissful Deligth!
        </Text>

        <Text style={styles.subtitle}>
          Welcome to our coxy coffe corner, where every cyp is a delightful for
          you.
        </Text>
        <Pressable
          style={({ pressed }) => [
            { backgroundColor: "#FFF" },
            {
              backgroundColor: pressed ? "#9E633E" : "#C67C4E",
              width: 327,
              height: 56,
              marginTop: 32,
              alignItems: "center",
              justifyContent: "center",
              borderRadius: 16,
              alignSelf: "center",
            },
          ]}
          onPress={() => {
            console.log("opa");
            navigation.reset({ index: 0, routes: [{ name: "Details" }] });
          }}
        >
          <Text
            style={{
              fontFamily: "Sora_600SemiBold",
              fontSize: 18,
              color: "#FFFF",
            }}
          >
            Get Started
          </Text>
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  onboard_image: {
    width: "100%",
    margin: 0,
    padding: 0,
    top: 0,
    left: 0,
    right: 0,
  },
  info_section: {
    zIndex: 100,
    top: -30,
  },
  top_text: {
    textAlign: "center",
    color: "#FFFF",
    fontSize: 40,
    fontFamily: "Sora_600SemiBold",
  },
  subtitle: {
    color: "#A2A2A2",
    fontFamily: "Sora_400Regular",
    fontSize: 16,
    textAlign: "center",
    margin: 0,
    paddingTop: 8,
    paddingHorizontal: 24,
  },
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
