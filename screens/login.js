import React from "react";
import { View, Text, StyleSheet, TextInput, Button } from "react-native";

export default function Login() {
  return (
    <View style={estilo.container}>
      <Text>🧭</Text>
      <Text>Compasso</Text>
      <Text>Email</Text>
      <TextInput keyboardType="email" placeholder="Coloque seu email" />
      <Text>Senha</Text>
      <TextInput secureTextEntry={true} placeholder="Coloque sua senha" />
      <View>
        <Button title="entrar" />
      </View>
      <Text>
        Crie sua conta <Text style={{ color: "blue" }}>Aqui</Text>{" "}
      </Text>
    </View>
  );
}

const estilo = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    flexDirection: "column",
    padding: 16,
  },
});
