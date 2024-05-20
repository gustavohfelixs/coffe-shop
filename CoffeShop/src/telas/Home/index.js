import React, { useEffect, useState } from "react";
import { Pressable, Text, View, Image, FlatList } from "react-native";
import { SimpleLineIcons } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import ProductCard from "../../componentes/ProductCard";
import SearchBar from "../../componentes/SearchBar";

import mockCoffe from "../../mocks/home/coffe";
import mockButton from "../../mocks/home/button";
import FilterButton from "../../componentes/FilterButton";

export default function Home() {
  const [selectedButtonId, setSelectedButtonId] = useState(null);
  const [filteredCoffes, setFilteredCoffes] = useState([]);

  const onPressFilterButton = ({ ...item }) => {
    setSelectedButtonId(item.id);
    console.log("item.id in onPress: ", item.id);
  };

  useEffect(() => {
    filterSearch();
  }, [selectedButtonId]);

  const filterSearch = () => {
    console.log("selectedButtonId in filterSearch: ", selectedButtonId);

    mockButton.forEach((button) => {
      if (button.id === selectedButtonId) {
        const filteredData = mockCoffe.filter((coffe) => {
          return coffe.name.match(button.key);
        });
        setFilteredCoffes(filteredData);
      }
      if (filteredCoffes.length === 0 || selectedButtonId === "1") {
        setFilteredCoffes(mockCoffe);
      }
    });
  };

  const renderButton = ({ item }) => {
    return (
      <FilterButton
        onPressFilterButton={() => onPressFilterButton({ ...item })}
        {...item}
      ></FilterButton>
    );
  };
  const renderCard = ({ item }) => {
    return <ProductCard {...item}></ProductCard>;
  };
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
          backgroundColor: "rgba(237,237,237, 35%)",
          height: "100%",
          top: 280,
        }}
      >
        <View
          style={{
            alignItems: "center",
            position: "relative",
            top: -40,
            margin: 0,
            padding: 0,
          }}
        >
          <Image
            source={require("../../.../../../assets/Banner.png")}
            style={{ width: 327, height: 140 }}
          ></Image>
        </View>

        <View style={{ alignItems: "center", top: -45 }}>
          <FlatList
            data={mockButton}
            keyExtractor={(item) => item.id}
            renderItem={renderButton}
            style={{ width: 327, paddingBottom: 16 }}
            horizontal={true}
            contentContainerStyle={{ gap: 16 }}
          ></FlatList>
          <FlatList
            data={filteredCoffes}
            key={(item) => item.id}
            renderItem={renderCard}
            numColumns={2}
            contentContainerStyle={{
              gap: 20,
            }}
            columnWrapperStyle={{ gap: 20 }}
            onEndReached={() => console.log("p")}
          ></FlatList>
        </View>
      </View>
    </View>
  );
}
