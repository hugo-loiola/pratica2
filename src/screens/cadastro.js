import React, { useState } from "react";
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

// Validação com o Yup
const schema = yup.object({
  email: yup.string().email("Email Inválido").required("Informe seu Email"),
  phone: yup
    .number()
    .integer("Telefone Inválido")
    .required("Informe o Telefone"),
  password: yup
    .string()
    .min(6, "A senha deve conter pelo menos 6 dígitos")
    .required("Informe a Senha"),
  passwordConfirmation: yup
    .string()
    .oneOf([yup.ref("password"), null], "Senhas tem que ser iguais"),
});

const Cadastro = ({ navigation }) => {
  // O que fazer depois de clicar no botão
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  function handleSingUp(data) {
    alert(`Olá, sua conta foi criada com sucesso!`);
    console.log(data);
    navigation.navigate("Login");
  }

  return (
    <KeyboardAvoidingView style={styles.background}>
      <View style={styles.container}>
        <Controller
          control={control}
          name="email"
          render={({ field: { onChange, onBlur, value } }) => (
            <TextInput
              keyboardType="email-address"
              style={styles.input}
              placeholder="Email"
              placeholderTextColor="#000"
              color="#000"
              value={value}
              autoCorrect={false}
              onChangeText={onChange}
              onBlur={onBlur}
            />
          )}
        />

        {errors.email && (
          <Text style={styles.labelError}>{errors.email?.message}</Text>
        )}

        <Controller
          control={control}
          name="phone"
          render={({ field: { onChange, onBlur, value } }) => (
            <TextInput
              keyboardType="phone-pad"
              style={styles.input}
              placeholder="Telefone"
              placeholderTextColor="#000"
              color="#000"
              autoCorrect={false}
              value={value}
              onChangeText={onChange}
              onBlur={onBlur}
            />
          )}
        />

        {errors.phone && (
          <Text style={styles.labelError}>{errors.phone?.message}</Text>
        )}

        <Controller
          control={control}
          name="password"
          render={({ field: { onChange, onBlur, value } }) => (
            <TextInput
              style={styles.input}
              placeholder="Senha"
              placeholderTextColor="#000"
              color="#000"
              autoCorrect={false}
              value={value}
              onChangeText={onChange}
              onBlur={onBlur}
              secureTextEntry={true}
            />
          )}
        />

        {errors.password && (
          <Text style={styles.labelError}>{errors.password?.message}</Text>
        )}

        <Controller
          control={control}
          name="passwordConfirmation"
          render={({ field: { onChange, onBlur, value } }) => (
            <TextInput
              style={styles.input}
              placeholder="Confirme sua Senha"
              placeholderTextColor="#000"
              color="#000"
              autoCorrect={false}
              value={value}
              onChangeText={onChange}
              onBlur={onBlur}
              secureTextEntry={true}
            />
          )}
        />

        {errors.passwordConfirmation && (
          <Text style={styles.labelError}>
            {errors.passwordConfirmation?.message}
          </Text>
        )}

        <TouchableOpacity
          style={styles.btnSubmit}
          onPress={handleSubmit(handleSingUp)}
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
  labelError: {
    alignSelf: "flex-start",
    color: "red",
    marginBottom: 8,
  },
});

export default Cadastro;
