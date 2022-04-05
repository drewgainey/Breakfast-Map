import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import * as Location from "expo-location";
import { useState, useEffect } from "react";
import { FoodMap } from "./FoodMap";
import { NavigationContainer } from "@react-navigation/native";

export default function App() {
  const [currentLatitude, setCurrentLatitude] = useState(null);
  const [currentLongitude, setCurrentLongitude] = useState(null);
  const [errorMsg, setErrorMsg] = useState(null);
  const [locationLoading, setLocationLoading] = useState(true);

  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") {
        setErrorMsg("Permission to access location was denied");
        return;
      }
      let location = await Location.getCurrentPositionAsync({});
      let curLatitude = location.coords.latitude;
      let curLongitude = location.coords.longitude;
      setCurrentLatitude(curLatitude);
      setCurrentLongitude(curLongitude);
      setLocationLoading(false);
    })();
  }, []);

  return (
    <NavigationContainer>
      <View style={styles.container}>
        {locationLoading ? (
          <Text> Waiting...</Text>
        ) : (
          <FoodMap latitude={currentLatitude} longitude={currentLongitude} />
        )}
      </View>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
