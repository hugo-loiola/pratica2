import { View, Text, StyleSheet, Dimensions } from "react-native";
import React, { useEffect } from "react";
import LottieView from "lottie-react-native";
import anima from "../assets/bussola2.json";
import { useNavigation, CommonActions } from "@react-navigation/core";

const size = Dimensions.get("window").width * 0.9;

const Splash = () => {
  const navigation = useNavigation();

  useEffect(() => {
    setTimeout(() => {
      navigation.dispatch(
        CommonActions.reset({
          index: 0,
          routes: [{ name: "Login" }],
        })
      );
    }, 4000);
  });

  return (
    <View style={styles.container}>
      <LottieView
        source={anima}
        style={{ width: size, height: size }}
        loop={false}
        autoPlay
        resizeMode="contain"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default Splash;
