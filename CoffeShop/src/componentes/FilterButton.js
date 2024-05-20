import React, { Component, useState } from "react";
import { Pressable, Text } from "react-native";

export default function FilterButton({ onPressFilterButton, ...item }) {
  return (
    <Pressable
      style={{
        backgroundColor: "#C67C4E",
        width: 87,
        height: 29,
        marginTop: 32,
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 6,
      }}
      onPress={() => onPressFilterButton({ ...item })}
    >
      <Text
        style={{
          fontFamily: "Sora_600SemiBold",
          fontSize: 16,
          color: "#FFFF",
        }}
      >
        {item.title}
      </Text>
    </Pressable>
  );
}
