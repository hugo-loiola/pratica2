import React, { useState } from "react";
import {
  FlatList,
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  Linking,
} from "react-native";
import {
  RopaSans_400Regular,
  RopaSans_400Regular_Italic,
} from "@expo-google-fonts/ropa-sans";

const Lista = ({ navigation }) => {
  const lugar = [
    {
      nome: "Paris",
      key: "1",
      link: "https://pt.wikipedia.org/wiki/Paris",
      img: require("../assets/bulssola.png"),
    },
    { nome: "Nova York", key: "2" },
    { nome: "Rio de Janeiro", key: "3" },
    { nome: "Manaus", key: "4" },
    { nome: "Bankok", key: "5" },
    { nome: "Tokyo", key: "6" },
    { nome: "Hong Kong", key: "7" },
    { nome: "Hong Kong", key: "7" },
    { nome: "Hong Kong", key: "7" },
    { nome: "Hong Kong", key: "7" },
  ];

  return (
    <View style={styles.container}>
      <FlatList
        data={lugar}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() => {
              Linking.openURL(item.link);
            }}
          >
            <Text style={styles.lista}>{item.nome}</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  lista: {
    textAlign: "center",
    fontSize: 12,
    fontFamily: "RopaSans_400Regular",
  },
});

export default Lista;
