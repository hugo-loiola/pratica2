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
import MeuInput from "../components/MeuInput";

// Validação com o Yup
const schema = yup.object({
  email: yup.string().email("Email Inválido").required("Informe seu Email"),
  phone: yup
    .number()
    .integer("Telefone Inválido")
    .min(11, "Telefone Pequeno")
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
          control={control}
          name="phone"
          render={({ field: { onChange, value } }) => (
            <MeuInput
              placeholder="Telefone"
              value={value}
              onChangeText={onChange}
              keyboardType="phone-pad"
              maxLength={13}
            />
          )}
        />

        {errors.phone && (
          <Text style={styles.labelError}>{errors.phone?.message}</Text>
        )}

        <Controller
          control={control}
          name="password"
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

        <Controller
          control={control}
          name="passwordConfirmation"
          render={({ field: { onChange, value } }) => (
            <MeuInput
              placeholder="Confirme sua Senha"
              value={value}
              onChangeText={onChange}
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
    fontFamily: "RopaSans_400Regular",
  },
  labelError: {
    alignSelf: "flex-start",
    color: "#fff",
    marginBottom: 8,
  },
});

export default Cadastro;
