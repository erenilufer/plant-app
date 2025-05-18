import RootNavigator from "./src/navigators/RootNavigator";
import { Provider } from "react-redux";
import { persistor, store } from "./src/store/store";
import { useFonts } from "expo-font";
import { useEffect } from "react";
import * as SplashScreen from "expo-splash-screen";
import { PersistGate } from "redux-persist/integration/react";

SplashScreen.preventAutoHideAsync();

export default function App() {
  const [loaded, error] = useFonts({
    regular: require("./assets/fonts/Rubik-Regular.ttf"),
    bold: require("./assets/fonts/Rubik-Bold.ttf"),
    medium: require("./assets/fonts/Rubik-Medium.ttf"),
    light: require("./assets/fonts/Rubik-Light.ttf"),
    semiBold: require("./assets/fonts/Rubik-SemiBold.ttf"),
    extraBold: require("./assets/fonts/Rubik-ExtraBold.ttf"),
  });

  useEffect(() => {
    if (loaded || error) {
      SplashScreen.hideAsync();
    }
  }, [loaded, error]);

  if (!loaded && !error) {
    return null;
  }

  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <RootNavigator />
      </PersistGate>
    </Provider>
  );
}
