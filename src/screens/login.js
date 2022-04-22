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
import { useForm, Controller } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

const schema = yup.object({
  email: yup.string().email("Email Inválido").required("Informe seu Email"),
  password: yup
    .string()
    .min(6, "A senha deve conter pelo menos 6 dígitos")
    .required("Informe a Senha"),
});

const Login = ({ navigation }) => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  function handleSingIn(data) {
    alert('Bem vindo à Bussola !');
    console.log(data);
    navigation.navigate("Login");
  }

  return (
    <KeyboardAvoidingView style={styles.background}>
      <View style={styles.containerLogo}>
        <Image
          style={{ height: 150, width: 150 }}
          source={require("../assets/bulssola.png")}
        />
      </View>

      <View style={styles.container}>
        <Controller
          control={control}
          name="email"
          render={({ field: { onChange, onBLur, value } }) => (
            <TextInput
              value={value}
              keyboardType="email-address"
              style={styles.input}
              placeholder="Email"
              placeholderTextColor="#000"
              color="#000"
              autoCorrect={false}
              onChangeText={onChange}
              onBlur={onBlur}
            />
          )}
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

        <TouchableOpacity
          style={styles.btnSubmit}
          onPress={() => navigation.navigate("Lista")}
        >
          <Text style={styles.submitText}>Acessar</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.btnRegister}
          onPress={handleSubmit(handleSingIn)}
        >
          <Text style={styles.registerText}>Criar Conta</Text>
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
  containerLogo: {
    flex: 1,
    justifyContent: "center",
  },
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    width: "90%",
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
    letterSpacing: 2,
    fontFamily: "RopaSans_400Regular",
  },
  btnRegister: {
    marginTop: 50,
  },
  registerText: {
    color: "#fff",
    fontFamily: "RopaSans_400Regular",
  },
});

export default Login;
