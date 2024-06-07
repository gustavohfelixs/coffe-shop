import React from "react";

import { View, FlatList } from "react-native";
import FilterButton from "../FilterButton/FilterButton";
import ProductCard from "../ProductCard";
import styles from "./styles";

const ProductSection = ({
  filters,
  products,
  onPressFilterButton,
  selectedButtonId,
}) => {
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
    <View>
      <View style={styles.filterButtonsSection}>
        <FlatList
          data={filters}
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
            data={products}
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
};

export default ProductSection;
