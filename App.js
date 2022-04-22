import React from "react";
import Cadastro from "../pratica2/src/screens/cadastro";
import Login from "./src/screens/login";
import Lista from "./src/screens/lista";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import AppLoading from "expo-app-loading";
import { useFonts } from "expo-font";
import {
  RopaSans_400Regular,
  RopaSans_400Regular_Italic,
} from "@expo-google-fonts/ropa-sans";

const Stack = createNativeStackNavigator();

const App = () => {
  let [fontsLoaded, error] = useFonts({
    RopaSans_400Regular,
    RopaSans_400Regular_Italic,
  });
  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen
          name="Login"
          component={Login}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Cadastro"
          component={Cadastro}
          options={{
            title: "Cadastro",
            headerStyle: { backgroundColor: "#009E9D" },
            headerTitleAlign: "center",
            headerTintColor: "#fff",
            headerTitleStyle: {
              fontFamily: "RopaSans_400Regular",
            },
          }}
        />
        <Stack.Screen
          name="Lista"
          component={Lista}
          options={{
            title: "Viagens",
            headerStyle: { backgroundColor: "#009E9D" },
            headerTitleAlign: "center",
            headerTintColor: "#fff",
            headerTitleStyle: {
              fontFamily: "RopaSans_400Regular",
            },
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
