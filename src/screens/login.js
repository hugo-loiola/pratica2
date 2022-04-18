import React from "react";
import { View, Text, TextInput, StyleSheet, Image } from "react-native";
import Botao from "../components/botao";

const Login = () => {
  return (
    <View style={estilo.body}>
      <View style={{ alignItems: "center" }}>
        <Image style={estilo.logo} source={require("../assets/bulssola.png")} />
      </View>
      <Text style={estilo.logoTitle}>Búlssola</Text>
      <Text>Email</Text>
      <TextInput
        style={estilo.input}
        keyboardType="email-address"
        placeholder="Coloque seu email"
      />
      <Text>Senha</Text>
      <TextInput
        style={estilo.input}
        secureTextEntry={true}
        placeholder="Coloque sua senha"
      />
      <Botao />
      <Text style={estilo.cadastro}>
        Crie sua conta <Text style={{ color: "yellow" }}>Aqui</Text>{" "}
      </Text>
    </View>
  );
};

const estilo = StyleSheet.create({
  body: {
    flex: 1,
    justifyContent: "center",
    flexDirection: "column",
    padding: 16,
    backgroundColor: "white",
  },
  logo: {
    resizeMode: "contain",
    height: 200,
    color: "yellow",
  },
  logoTitle: {
    textAlign: "center",
    fontSize: 32,
    color: "yellow",
  },
  input: {
    borderWidth: 2,
    borderRadius: 5,
    borderColor: "yellow",
    padding: 16,
  },
  cadastro: {
    marginTop: 30,
    textAlign: "center",
  },
});
export default Login;
