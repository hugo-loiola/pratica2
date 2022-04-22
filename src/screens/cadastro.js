import React from "react";
import {
  View,
  KeyboardAvoidingView,
  Image,
  TextInput,
  Text,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import {
  RopaSans_400Regular,
  RopaSans_400Regular_Italic,
} from "@expo-google-fonts/ropa-sans";
import { useFonts } from "expo-font";
import AppLoading from "expo-app-loading";

const Cadastro = ({ navigation }) => {
  return (
    <KeyboardAvoidingView style={styles.background}>
      <View style={styles.container}>
        <TextInput
          keyboardType="email-address"
          style={styles.input}
          placeholder="Email"
          placeholderTextColor="#000"
          color="#000"
          autoCorrect={false}
          onChangeText={() => {}}
        />
        <TextInput
          keyboardType="phone-pad"
          style={styles.input}
          placeholder="Telefone"
          placeholderTextColor="#000"
          color="#000"
          autoCorrect={false}
          onChangeText={() => {}}
        />
        <TextInput
          style={styles.input}
          placeholder="Senha"
          placeholderTextColor="#000"
          color="#000"
          autoCorrect={false}
          secureTextEntry={true}
          onChangeText={() => {}}
        />
        <TextInput
          style={styles.input}
          placeholder="Repetir Senha"
          placeholderTextColor="#000"
          color="#000"
          autoCorrect={false}
          secureTextEntry={true}
          onChangeText={() => {}}
        />

        <TouchableOpacity
          style={styles.btnSubmit}
          onPress={() => navigation.navigate("Login")}
        >
          <Text style={styles.submitText}>Criar Conta</Text>
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#009E9D",
  },
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    width: "90%",
    paddingBottom: 50,
  },
  input: {
    width: "90%",
    marginBottom: 15,
    fontSize: 17,
    fontFamily: "RopaSans_400Regular",
    borderRadius: 5,
    borderWidth: 2,
    borderColor: "#EB5600",
    backgroundColor: "#fff",
    padding: 10,
  },
  btnSubmit: {
    backgroundColor: "#EB5600",
    width: "90%",
    height: 45,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 5,
  },
  submitText: {
    color: "#fff",
    fontSize: 18,
    fontFamily: "RopaSans_400Regular",
  },
});

export default Cadastro;
