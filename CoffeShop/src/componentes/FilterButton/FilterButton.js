import React from "react";
import { Text, TouchableOpacity } from "react-native";
import styles from "./style";

export default function FilterButton({
  onPressFilterButton,
  selectedButtonId,
  ...item
}) {
  const isActive = item.id === selectedButtonId;
  return (
    <TouchableOpacity
      style={styles(isActive).button}
      onPress={() => {
        onPressFilterButton({ ...item });
      }}
    >
      <Text style={styles(isActive).buttonTxt}>{item.title}</Text>
    </TouchableOpacity>
  );
}
