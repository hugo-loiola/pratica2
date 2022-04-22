import React, { useState } from "react";
import {
  FlatList,
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  Linking,
  Image,
} from "react-native";

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
  ];

  return (
    <View style={{ backgroundColor: "#009E9D" }}>
      <FlatList
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}
        data={lugar}
        renderItem={({ item }) => (
          <View style={styles.container}>
            <TouchableOpacity
              style={styles.card}
              onPress={() => {
                Linking.openURL(item.link);
              }}
            >
              <Text style={styles.lista}>{item.nome}</Text>
              <View>
                <Image
                  style={{ height: 100, width: 100, resizeMode: "contain" }}
                  source={item.img}
                />
              </View>
            </TouchableOpacity>
          </View>
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
    fontSize: 16,
    fontFamily: "RopaSans_400Regular",
    color: "#fff",
    paddingBottom: 10,
  },
  card: {
    backgroundColor: "#EB5600",
    width: "90%",
    height: "90%",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 5,
    padding: 16,
    marginBottom: 20,
    elevation: 15,
  },
});

export default Lista;
