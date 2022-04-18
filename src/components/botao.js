import React from "react";
import { Text, View, StyleSheet, Pressable } from "react-native";

const Botao = (props) => {
  const { title = "Entrar" } = props;
  return (
    <Pressable
      style={styles.button}
      onPress={() => {
        alert("Entrou na Bússola !");
      }}
    >
      <Text style={styles.text}>{title}</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  button: {
    marginTop: 16,
    marginBottom: 16,
    paddingBottom: 16,
    paddingTop: 16,
    borderRadius: 4,
    elevation: 3,
    backgroundColor: "yellow",
  },
  text: {
    textAlign: "center",
    fontSize: 16,
    lineHeight: 21,
    fontWeight: "bold",
    letterSpacing: 0.25,
    color: "black",
  },
});
export default Botao;
