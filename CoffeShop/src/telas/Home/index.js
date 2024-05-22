import React, { useEffect, useState } from "react";
import {
  Pressable,
  Text,
  View,
  Image,
  FlatList,
  ScrollView,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import { SimpleLineIcons } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import ProductCard from "../../componentes/ProductCard";
import SearchBar from "../../componentes/SearchBar";

import mockCoffe from "../../mocks/home/coffe";
import mockButton from "../../mocks/home/button";
import FilterButton from "../../componentes/FilterButton/FilterButton";

import styles from "./styles";
import ProductSection from "../../componentes/ProductSection";

export default function Home() {
  const [selectedButtonId, setSelectedButtonId] = useState("1");
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
        selectedButtonId={selectedButtonId}
        {...item}
      ></FilterButton>
    );
  };
  const renderCard = ({ item }) => {
    return <ProductCard {...item}></ProductCard>;
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.locationTxt}>Location</Text>

        <View style={styles.searchContainer}>
          <Text style={styles.countryTxt}>Brazil, Sao Paulo</Text>
          <AntDesign
            name="down"
            size={12}
            color="white"
            style={styles.downIcon}
          />
        </View>
        <View style={styles.searchSection}>
          <SearchBar></SearchBar>
          <SimpleLineIcons
            name="equalizer"
            size={24}
            color="white"
            style={styles.options}
          />
        </View>
      </View>
      <View style={styles.body}>
        <View style={styles.bannerSection}>
          <Image
            source={require("../../.../../../assets/Banner.png")}
            style={styles.banner}
          ></Image>
        </View>
      </View>
      <View style={styles.filterButtonsSection}>
        <FlatList
          data={mockButton}
          keyExtractor={(item) => item.id}
          renderItem={renderButton}
          style={styles.filterButtons}
          horizontal={true}
          contentContainerStyle={{ gap: 16 }}
          showsHorizontalScrollIndicator={true}
        ></FlatList>
      </View>
      <View style={styles.coffeSection}>
        <View>
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
