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
      key: "1",
      nome: "Paris",
      link: "https://www.youtube.com/watch?v=Y5TNhAMEm5g",
      img: require("../assets/paris.jpg"),
    },
    {
      key: "2",
      nome: "Nova York",
      link: "https://www.youtube.com/watch?v=FjU_x1106pg",
      img: require("../assets/nova-york.jpg"),
    },
    {
      key: "3",
      nome: "Rio de Janeiro",
      link: "https://www.youtube.com/watch?v=fA7kQn-l6T4",
      img: require("../assets/rio-de-janeiro.jpeg"),
    },
    {
      key: "4",
      nome: "Brasília",
      link: "https://www.youtube.com/watch?v=KO5uWcITVlI",
      img: require("../assets/brasilia.jpg"),
    },
    {
      key: "5",
      nome: "Bangkok",
      link: "https://www.youtube.com/watch?v=KpYbH8NSXYY",
      img: require("../assets/bangkok.jpg"),
    },
    {
      key: "6",
      nome: "Tokyo",
      link: "https://www.youtube.com/watch?v=0nTO4zSEpOs",
      img: require("../assets/tokyo.webp"),
    },
    {
      key: "7",
      nome: "Cairo",
      link: "https://www.youtube.com/watch?v=6OhdZ9TurMs",
      img: require("../assets/cairo.jpg"),
    },
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
              <Text style={styles.textCard}>{item.nome}</Text>
              <View>
                <Image
                  style={{ height: 200, width: 200, resizeMode: "contain" }}
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
  textCard: {
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
    marginTop: 20,
    elevation: 15,
  },
});

export default Lista;
