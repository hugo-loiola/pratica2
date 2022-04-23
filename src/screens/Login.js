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
import MeuInput from "../components/MeuInput";

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
    alert("Bem vindo !");
    navigation.navigate("Lista");
    console.log(data);
  }

  return (
    <KeyboardAvoidingView style={styles.background}>
      <View style={styles.containerLogo}>
        <Image
          style={{ height: 150, width: 150 }}
          source={require("../assets/bussola.png")}
        />
      </View>

      <View style={styles.container}>
        <Controller
          control={control}
          name="email"
          render={({ field: { onChange, value } }) => (
            <MeuInput
              placeholder="Email"
              value={value}
              onChangeText={onChange}
            />
          )}
        />

        {errors.email && (
          <Text style={styles.labelError}>{errors.email?.message}</Text>
        )}

        <Controller
          name="password"
          control={control}
          render={({ field: { onChange, value } }) => (
            <MeuInput
              placeholder="Senha"
              value={value}
              onChangeText={onChange}
              secureTextEntry={true}
            />
          )}
        />

        {errors.password && (
          <Text style={styles.labelError}>{errors.password?.message}</Text>
        )}

        <TouchableOpacity
          style={styles.btnSubmit}
          onPress={handleSubmit(handleSingIn)}
        >
          <Text style={styles.submitText}>Acessar</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.btnRegister}
          onPress={() => navigation.navigate("Cadastro")}
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
  btnSubmit: {
    backgroundColor: "#EB5600",
    width: "90%",
    height: 45,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 5,
    elevation: 15,
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
  labelError: {
    alignSelf: "flex-start",
    color: "#fff",
    marginBottom: 8,
  },
});

export default Login;
