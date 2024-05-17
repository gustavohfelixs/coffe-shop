import React from "react";
import {
  Pressable,
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
} from "react-native";
import OnboardImage from "./assets/onboard.png";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { SimpleLineIcons } from "@expo/vector-icons";
import { Feather, Entypo, AntDesign } from "@expo/vector-icons";
import { Banner } from "./assets/Banner.png";
import { FlatWhite } from "./assets/flat-white.png";
import {
  useFonts,
  Sora_600SemiBold,
  Sora_400Regular,
} from "@expo-google-fonts/dev";

const mock = {
  banner: Banner,
};

const Stack = createNativeStackNavigator();

const styles = StyleSheet.create({
  container: {
    margin: 15,
    justifyContent: "flex-start",
    alignItems: "center",
    flexDirection: "row",
    width: 270,
  },
  searchBar__unclicked: {
    padding: 15,
    flexDirection: "row",
    width: "95%",
    backgroundColor: "#2A2A2A",
    borderRadius: 15,
    alignItems: "center",
  },
  searchBar__clicked: {
    padding: 10,
    flexDirection: "row",
    width: "80%",
    backgroundColor: "#2A2A2A",
    borderRadius: 15,
    alignItems: "center",
    justifyContent: "space-evenly",
  },
  input: {
    fontSize: 18,
    marginLeft: 10,
    width: "90%",
    fontFamily: "Sora_400Regular",
    color: "#A2A2A2",
  },
});

const CoffeButton = ({ pressed }) => {
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
        All Coffe
      </Text>
    </Pressable>
  );
};

const mockCoffe = [
  {
    name: "Caffe Mocha",
    description: "Deep Foam",
    price: 4.53,
    rating: 4.8,
    photo: require("./assets/mocha.png"),
  },
  {
    name: "Flat White",
    description: "Deep Foam",
    price: 3.53,
    rating: 4.9,
    photo: require("./assets/flat-white.png"),
  },
  {
    name: "Caffe Mocha",
    description: "Deep Foam",
    price: 4.53,
    rating: 4.8,
    photo: require("./assets/mocha.png"),
  },
  {
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
const SearchBar = ({ clicked, searchPhrase, setSearchPhrase, setClicked }) => {
  return (
    <View style={styles.container}>
      <View
        style={
          clicked ? styles.searchBar__clicked : styles.searchBar__unclicked
        }
      >
        {/* search Icon */}
        <Feather
          name="search"
          size={20}
          color="white"
          style={{ marginLeft: 1 }}
        />
        {/* Input field */}
        <TextInput
          style={styles.input}
          placeholder="Search coffee"
          placeholderTextColor={"#A2A2A2"}
          value={searchPhrase}
          onChangeText={setSearchPhrase}
          onFocus={() => {
            setClicked(true);
          }}
        />
        {/* cross Icon, depending on whether the search bar is clicked or not */}
        {clicked && (
          <Entypo
            name="cross"
            size={20}
            color="black"
            style={{ padding: 1 }}
            onPress={() => {
              setSearchPhrase("");
            }}
          />
        )}
      </View>
      {/* cancel button, depending on whether the search bar is clicked or not */}
      {clicked && (
        <View>
          <Button
            title="Cancel"
            onPress={() => {
              Keyboard.dismiss();
              setClicked(false);
            }}
          ></Button>
        </View>
      )}
    </View>
  );
};

export default function App() {
  let [fontsLoaded] = useFonts({
    Sora_600SemiBold,
    Sora_400Regular,
  });

  return (
    <View style={{ width: "100%", height: "100%" }}>
      <View
        style={{
          width: "100%",
          height: 280,
          backgroundColor: "#313131",
          left: 0,
          right: 0,
          position: "absolute",
        }}
      >
        <Text
          style={{
            position: "relative",
            top: 68,
            left: 24,
            color: "#A2A2A2",
            fontFamily: "Sora_400Regular",
            fontSize: 16,
          }}
        >
          Location
        </Text>

        <View style={{ flexDirection: "row", top: 76, left: 24 }}>
          <Text
            style={{
              fontFamily: "Sora_600SemiBold",
              fontSize: 20,
              color: "#D8D8D8",
            }}
          >
            Brazil, Sao Paulo
          </Text>
          <AntDesign
            name="down"
            size={12}
            color="white"
            style={{ padding: 7 }}
          />
        </View>
        <View style={{ position: "relative", top: 100, flexDirection: "row" }}>
          <SearchBar></SearchBar>
          <SimpleLineIcons
            name="equalizer"
            size={24}
            color="white"
            style={{
              backgroundColor: "#C67C4E",
              padding: 15,
              borderRadius: 12,
              alignSelf: "center",
              transform: "rotate(90deg)",
            }}
          />
        </View>
      </View>
      <View
        style={{
          width: "100%",
          backgroundColor: "red",
          height: "100%",
          top: 280,
        }}
      >
        <View style={{ alignItems: "center", position: "relative", top: -40 }}>
          <Image
            source={require("./assets/Banner.png")}
            style={{ width: 327, height: 140 }}
          ></Image>
        </View>
        <View style={{ flexDirection: "row", top: -50, left: 24 }}>
          <CoffeButton></CoffeButton>
          <CoffeButton></CoffeButton>

          <CoffeButton></CoffeButton>
        </View>
        <View
          style={{
            flex: 1,
            flexDirection: "row",
            flexWrap: "wrap",
            alignItems: "flex-start",
            rowGap: 24,
            columnGap: 15,
            left: 24,
            alignSelf: "center",
          }}
        >
          {mockCoffe.map((coffe) => (
            <CoffeCard {...coffe}></CoffeCard>
          ))}
        </View>
      </View>
    </View>
    // <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
    //   <Text>Details Screen</Text>
    // </View>
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

function DetailsScreen() {
  return (
    <View
      style={{
        width: 375,
        height: "100%",
        backgroundColor: "#313131",
        margin: 0,
      }}
    ></View>
    // <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
    //   <Text>Details Screen</Text>
    // </View>
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

// const styles = StyleSheet.create({
//   onboard_image: {
//     width: "100%",
//     height: 536,
//     margin: 0,
//     padding: 0,
//     position: "absolute",
//     top: 0,
//     left: 0,
//     right: 0,
//   },
//   info_section: {
//     zIndex: 100,
//     position: "absolute",
//     top: 485,
//     paddingHorizontal: 24,
//   },
//   top_text: {
//     textAlign: "center",
//     color: "#FFFF",
//     fontSize: 40,
//     fontFamily: "Sora_600SemiBold",
//   },
//   subtitle: {
//     color: "#A2A2A2",
//     fontFamily: "Sora_400Regular",
//     fontSize: 18,
//     textAlign: "center",
//     margin: 0,
//     paddingTop: 8,
//   },
//   container: {
//     flex: 1,
//     backgroundColor: "#fff",
//     alignItems: "center",
//     justifyContent: "center",
//   },
// });
