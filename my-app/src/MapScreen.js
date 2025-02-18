import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  View,
  ActivityIndicator,
  TextInput,
  Alert,
  TouchableOpacity,
  Text,
} from "react-native";
import MapView, { Marker } from "react-native-maps";
import * as Location from "expo-location";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from "react-native-responsive-screen";

export default function App({ navigation }) {
  const [location, setLocation] = useState(null); // User's live location (red marker)
  const [searchQuery, setSearchQuery] = useState(""); // Search bar input
  const [loading, setLoading] = useState(true); // Loading spinner state
  const [searchedLocation, setSearchedLocation] = useState(null); // Searched location (blue marker)

  useEffect(() => {
    (async () => {
      const { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") {
        Alert.alert("Permission Denied", "We need location permissions to show your location.");
        setLoading(false);
        return;
      }

      const userLocation = await Location.getCurrentPositionAsync({});
      setLocation({
        latitude: userLocation.coords.latitude,
        longitude: userLocation.coords.longitude,
        latitudeDelta: 0.01,
        longitudeDelta: 0.01,
      });
      setLoading(false);
    })();
  }, []);

  const handleSearch = async () => {
    if (!searchQuery.trim()) {
      Alert.alert("Empty Search", "Please enter a location.");
      return;
    }

    try {
      const apiKey = "YOUR_GOOGLE_MAPS_API_KEY"; // Replace with your API key
      const url = `https://maps.googleapis.com/maps/api/geocode/json?address=${encodeURIComponent(searchQuery)}&key=${apiKey}`;
      const response = await fetch(url);
      const data = await response.json();

      if (data.status === "OK" && data.results.length > 0) {
        const { lat, lng } = data.results[0].geometry.location;
        setSearchedLocation({
          latitude: lat,
          longitude: lng,
          latitudeDelta: 0.01,
          longitudeDelta: 0.01,
        });

        setLocation({
          latitude: lat,
          longitude: lng,
          latitudeDelta: 0.01,
          longitudeDelta: 0.01,
        });
      } else {
        Alert.alert("Location Not Found", "Please try another search.");
        setSearchedLocation(null);
      }
    } catch (error) {
      console.error("Error fetching location:", error);
      Alert.alert("Error", "An error occurred while searching for the location.");
    }
  };

  if (loading) {
    return (
      <View style={styles.loader}>
        <ActivityIndicator size="large" color="#0000ff" />
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.searchBar}
        placeholder="Search for a location"
        value={searchQuery}
        onChangeText={setSearchQuery}
        onSubmitEditing={handleSearch}
      />

      <MapView style={styles.map} region={location} showsUserLocation={true}>
        {location && <Marker coordinate={location} pinColor="red" title="Your Live Location" />}
        {searchedLocation && <Marker coordinate={searchedLocation} pinColor="blue" title="Searched Location" />}
      </MapView>

      <View style={styles.bottomContainer}>
        <View style={styles.buttonsContainer}>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>Nearby Clinics</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>Nearby Homestays</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>Cabs</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>Nearby Hospitals</Text>
          </TouchableOpacity>
        </View>

        <Text style={styles.locationText}>
          {`location ? Lat: ${location.latitude.toFixed(4)}, Lng: ${location.longitude.toFixed(4)} : "Location not available"`}
        </Text>

        <TouchableOpacity style={styles.confirmButton} onPress={() => navigation.navigate("MapCardStack")}>
          <Text style={styles.confirmText}>Tap to Confirm</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    flex: 1,
  },
  loader: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  searchBar: {
    position: "absolute",
    top: hp("3%"),
    left: wp("5%"),
    right: wp("5%"),
    backgroundColor: "white",
    borderRadius: wp("2%"),
    paddingVertical: hp("1%"),
    paddingHorizontal: wp("4%"),
    fontSize: wp("4%"),
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 5,
  },
  bottomContainer: {
    backgroundColor: "white",
    paddingVertical: hp("2%"),
    borderTopLeftRadius: wp("4%"),
    borderTopRightRadius: wp("4%"),
    alignItems: "center",
  },
  buttonsContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
    marginBottom: hp("1%"),
  },
  button: {
    backgroundColor: "#f0f0f0",
    borderRadius: wp("4%"),
    paddingVertical: hp("1%"),
    paddingHorizontal: wp("4%"),
    margin: wp("1%"),
  },
  buttonText: {
    fontSize: wp("3.5%"),
  },
  locationText: {
    fontSize: wp("4%"),
    marginVertical: hp("1%"),
    textAlign: "center",
  },
  confirmButton: {
    backgroundColor: "#4CAF50",
    borderRadius: wp("2%"),
    paddingVertical: hp("1.5%"),
    paddingHorizontal: wp("5%"),
  },
  confirmText: {
    color: "white",
    fontSize: wp("4%"),
  },
});