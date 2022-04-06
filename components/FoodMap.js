import MapView, { Callout, Marker } from "react-native-maps";
import { StyleSheet, Text, Button } from "react-native";
import { useEffect, useState } from "react";

export const FoodMap = (props) => {
  const [resturants, setResturants] = useState([]);

  useEffect(() => {
    fetch("https://greekfoodbackend.herokuapp.com/resturants")
      .then((response) => response.json())
      .then((data) => setResturants(data));
  }, []);

  return (
      <MapView
        initialRegion={{
          latitude: props.latitude,
          longitude: props.longitude,
          latitudeDelta: 0.030733,
          longitudeDelta: 0.014033,
        }}
        style={styles.map}
      >
        {resturants.map((resturant) => (
          <Marker
            key={resturant._id}
            coordinate={{
              latitude: Number(resturant.lat),
              longitude: Number(resturant.lon),
            }}
          >
            <Callout>
              <Text>{resturant.name}</Text>
              <Button 
                title="Menu"
                onPress={() => props.navigation.navigate('Menu', {
                  resturant: resturant,
                })}/>
            </Callout>
          </Marker>
        ))}
      </MapView>
  );
};

const styles = StyleSheet.create({
  map: {
    width: "100%",
    height: "100%",
  },
});
