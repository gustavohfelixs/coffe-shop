import React from "react";

import { ScrollView, View, Text, Image } from "react-native";

import styles from "./styles";

export default function Index({ ...textos }) {
  return (
    <ScrollView style={styles.container}>
      <Image source={textos.logo} style={styles.logo}></Image>
      <Text style={styles.textoSobre}>{textos.historia}</Text>
      <Image source={textos.img_producao} style={styles.fotoCafe}></Image>
      <Text style={styles.textoSobre}>{textos.texto_imagem}</Text>
    </ScrollView>
  );
}
