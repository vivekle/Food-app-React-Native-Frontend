

import { useFonts } from "expo-font"; 
const [loaded] = useFonts({
    MontSB: require("./assets/fonts/Montserrat-SemiBold.ttf"),
    MontB: require("./assets/fonts/Montserrat-Bold.ttf"),
    MontReg: require("./assets/fonts/Montserrat-Regular.ttf"),
    MontMed: require("./assets/fonts/Montserrat-Medium.ttf"),
  });

  if (!loaded) {
    return null;
  }

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Profile" component={ProfileScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    fontFamily: "Montserrat-SemiBold",
  },
  textStyle: {
    fontFamily: "MontSB",
    color: colors.secondary,
  },
});