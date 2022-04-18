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

const Cadastro = () => {
  return (
    <KeyboardAvoidingView style={styles.background}>
      <View style={styles.containerLogo}>
        <Image
          style={{ height: 150, width: 150 }}
          source={require("../assets/bulssola.png")}
        />
      </View>

      <View style={styles.container}>
        <TextInput
          keyboardType="email-address"
          style={styles.input}
          placeholder="Email"
          placeholderTextColor="#120a8f"
          color="#120a8f"
          autoCorrect={false}
          onChangeText={() => {}}
        />
        <TextInput
          keyboardType="phone-pad"
          style={styles.input}
          placeholder="Telefone"
          placeholderTextColor="#120a8f"
          color="#120a8f"
          autoCorrect={false}
          onChangeText={() => {}}
        />
        <TextInput
          style={styles.input}
          placeholder="Senha"
          placeholderTextColor="#120a8f"
          color="#120a8f"
          autoCorrect={false}
          secureTextEntry={true}
          onChangeText={() => {}}
        />
        <TextInput
          style={styles.input}
          placeholder="Repetir Senha"
          placeholderTextColor="#120a8f"
          color="#120a8f"
          autoCorrect={false}
          secureTextEntry={true}
          onChangeText={() => {}}
        />

        <TouchableOpacity
          style={styles.btnSubmit}
          onPress={() => {
            alert("Conta Criada com Sucesso!");
          }}
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
    backgroundColor: "#fff",
  },
  containerLogo: {
    flex: 1,
    justifyContent: "center",
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
    borderRadius: 5,
    borderWidth: 2,
    borderColor: "#120a8f",
    padding: 10,
  },
  btnSubmit: {
    backgroundColor: "#120a8f",
    width: "90%",
    height: 45,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 5,
  },
  submitText: {
    color: "#fff",
    fontSize: 18,
    letterSpacing: 2,
  },
});

export default Cadastro;
