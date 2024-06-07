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
  TouchableOpacity,
} from "react-native";
import { SimpleLineIcons } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";

const ProductCard = ({ onPressCoffeButton, ...mockCoffe }) => {
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
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Text
            style={{ fontFamily: "Sora_600SemiBold", fontSize: 18, flex: 1 }}
          >
            $ {mockCoffe.price}
          </Text>
          <TouchableOpacity
            style={{
              width: 30,
              height: 30,
              backgroundColor: "#C67C4E",
              borderRadius: 6,
              alignItems: "center",
              justifyContent: "center",
              alignContent: "center",
            }}
            onPress={() => onPressCoffeButton(mockCoffe)}
          >
            <Text style={{ fontSize: 24, color: "#FFFF", textAlign: "center" }}>
              +
            </Text>
          </TouchableOpacity>
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

export default ProductCard;
