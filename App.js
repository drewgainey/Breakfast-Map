import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import MapView, { Callout, Marker } from "react-native-maps";
import resturants from "./resturants";
import * as Location from "expo-location";
import { useState, useEffect } from "react";

export default function App() {
  const [currentLatitude, setCurrentLatitude] = useState(null);
  const [currentLongitude, setCurrentLongitude] = useState(null);
  const [errorMsg, setErrorMsg] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

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
      setIsLoading(false);
    })();
  }, []);

  return (
    <View style={styles.container}>
      {isLoading ? (
        <Text> Waiting...</Text>
      ) : (
        <MapView
          initialRegion={{
            latitude: currentLatitude,
            longitude: currentLongitude,
            latitudeDelta: 0.030733,
            longitudeDelta: 0.014033,
          }}
          style={styles.map}
        >
          {resturants.map((resturant) => (
            <Marker key={resturant.name} coordinate={resturant.location}>
              <Callout>
                <Text>{resturant.name}</Text>
                <Text>{resturant.hours}</Text>
              </Callout>
            </Marker>
          ))}
        </MapView>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  map: {
    width: "100%",
    height: "100%",
  },
});
