import React from "react";
import { TextInput, StyleSheet } from "react-native";

const MeuInput = ({
  value,
  keyboardType,
  placeholder,
  onChangeText,
  secureTextEntry,
  maxLength,
}) => {
  return (
    <TextInput
      value={value}
      keyboardType={keyboardType}
      style={styles.input}
      placeholder={placeholder}
      placeholderTextColor="#000"
      color="#000"
      autoCorrect={false}
      onChangeText={onChangeText}
      secureTextEntry={secureTextEntry}
      maxLength={maxLength}
    />
  );
};

const styles = StyleSheet.create({
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
    elevation: 15,
  },
});

export default MeuInput;
