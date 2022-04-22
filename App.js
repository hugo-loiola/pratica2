import React from "react";
import Cadastro from "../pratica2/src/screens/Cadastro";
import Login from "./src/screens/Login";
import Lista from "./src/screens/Lista";
import Splash from "./src/screens/Splash";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import AppLoading from "expo-app-loading";
import { useFonts } from "expo-font";
import {
  RopaSans_400Regular,
  RopaSans_400Regular_Italic,
} from "@expo-google-fonts/ropa-sans";
import { Asset } from "expo-asset";

const Stack = createNativeStackNavigator();

const App = () => {
  let [fontsLoaded, error] = useFonts({
    RopaSans_400Regular,
    RopaSans_400Regular_Italic,
  });

  let [isLoaded, setIsLoaded] = React.useState(false);

  let cacheResources = (async = () => {
    const images = [
      require("./src/assets/bangkok.jpg"),
      require("./src/assets/brasilia.jpg"),
      require("./src/assets/bussola.png"),
      require("./src/assets/cairo.jpg"),
      require("./src/assets/nova-york.jpg"),
      require("./src/assets/rio-de-janeiro.jpeg"),
      require("./src/assets/tokyo.webp"),
      require("./src/assets/paris.jpg"),
    ];

    const cacheImages = images.map((image) => {
      return Asset.fromModule(image).downloadAsync();
    });

    return Promise.all(cacheImages);
  });

  React.useEffect(() => {
    const loadResources = async () => {
      await cacheResources();
      setIsLoaded(true);
    };

    loadResources();
  });

  if (!fontsLoaded || !isLoaded) {
    return <AppLoading />;
  }

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Splash">
        <Stack.Screen
          name="Splash"
          component={Splash}
          options={{ headerShown: false }}
        />
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
