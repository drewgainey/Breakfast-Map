import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import MapView, { Callout, Marker } from "react-native-maps";
import resturants from "./resturants";

export default function App() {
  return (
    <View style={styles.container}>
      <MapView
        initialRegion={{
          latitude: 40.72422,
          longitude: -73.98317,
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
