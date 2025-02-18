import React, { useEffect, useState } from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet, ScrollView, PermissionsAndroid } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import Icon from "react-native-vector-icons/Ionicons";
import Geolocation from 'react-native-geolocation-service';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

// DoctorCard Component
const DoctorCard = ({ navigation, name, specialty, experience, fee, distance }) => {
  return (
    <View style={styles.card}>
      <Image
        source={require("../assets/image/dr.png")}
        style={styles.image}
      />
      <View style={styles.infoContainer}>
        <Text style={styles.name}>{name}</Text>
        <Text style={styles.specialty}>{specialty}</Text>
        <Text style={styles.experience}>{experience} Years of experience in Cardiovascular surgery</Text>
        <Text style={styles.rating}>★★★★★ [150+]</Text>
      </View>
      <View style={styles.feeContainer}>
        <Text style={styles.distance}>Distance: {distance}km</Text>
        <Text style={styles.fee}>Fee: Rs. {fee}/-</Text>
        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('DoctorStack')}>
          <Text style={styles.buttonText}>Book Now</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default function App({ navigation }) {
  const [userLocation, setUserLocation] = useState({
    latitude: 28.6139, // Default location (Delhi)
    longitude: 77.2090,
  });

  // Fetch live location
  useEffect(() => {
    const requestLocationPermission = async () => {
      try {
        const granted = await PermissionsAndroid.request(
          PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
          {
            title: 'Location Permission',
            message: 'This app needs access to your location.',
            buttonNeutral: 'Ask Me Later',
            buttonNegative: 'Cancel',
            buttonPositive: 'OK',
          },
        );
        if (granted === PermissionsAndroid.RESULTS.GRANTED) {
          Geolocation.getCurrentPosition(
            (position) => {
              const { latitude, longitude } = position.coords;
              setUserLocation({ latitude, longitude });
            },
            (error) => {
              console.log(error.code, error.message);
            },
            { enableHighAccuracy: true, timeout: 15000, maximumAge: 10000 },
          );
        } else {
          console.log('Location permission denied');
        }
      } catch (err) {
        console.warn(err);
      }
    };

    requestLocationPermission();
  }, []);

  return (
    <View style={styles.container}>
      {/* Map View */}
      <MapView
        style={styles.map}
        initialRegion={{
          latitude: userLocation.latitude,
          longitude: userLocation.longitude,
          latitudeDelta: 0.01,
          longitudeDelta: 0.01,
        }}
      >
        {/* Marker for User's Live Location */}
        <Marker
          coordinate={{
            latitude: userLocation.latitude,
            longitude: userLocation.longitude,
          }}
          title="Your Location"
          pinColor="blue" // Custom marker color
        />
      </MapView>

      {/* Doctors List */}
      <ScrollView style={styles.scrollView}>
        <DoctorCard
          name="Dr. Abcde Fghi"
          specialty="Cardiologist/Therapy"
          experience="30+"
          fee="800"
          distance="1"
          navigation={navigation}
        />
        <DoctorCard
          name="Dr. John Doe"
          specialty="Neurologist"
          experience="25+"
          fee="1000"
          distance="3"
          navigation={navigation}
        />
        <DoctorCard
          name="Dr. Jane Smith"
          specialty="Orthopedic"
          experience="15+"
          fee="700"
          distance="2"
          navigation={navigation}
        />
      </ScrollView>

      {/* Bottom Navigation Bar */}
      <View style={styles.navbar}>
        <TouchableOpacity style={styles.navItem} onPress={() => navigation.navigate('Home')}>
          <Icon name="home-outline" size={wp(6)} color="#333" />
          <Text style={styles.navLabel}>Home</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem} onPress={() => navigation.navigate('BookingStack')}>
          <Icon name="bookmark-outline" size={wp(6)} color="#333" />
          <Text style={styles.navLabel}>Bookings</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem} onPress={() => navigation.navigate('MapStack')}>
          <Icon name="map-outline" size={wp(6)} color="#333" />
          <Text style={styles.navLabel}>Maps</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem} onPress={() => navigation.navigate('Chat')}>
          <Icon name="chatbubble-outline" size={wp(6)} color="#333" />
          <Text style={styles.navLabel}>Chat</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem} onPress={() => navigation.navigate('Profile')}>
          <Icon name="person-outline" size={wp(6)} color="#333" />
          <Text style={styles.navLabel}>Profile</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  map: {
    height: hp(30), // 30% of screen height
    width: wp(100), // 100% of screen width
  },
  scrollView: {
    marginBottom: hp(10), // Add margin to avoid overlap with the fixed footer
  },
  card: {
    flexDirection: 'row',
    padding: wp(2.5), // 2.5% of screen width
    margin: wp(2.5), // 2.5% of screen width
    backgroundColor: '#f9f9f9',
    borderRadius: wp(2.5), // 2.5% of screen width
    elevation: 2,
  },
  image: {
    width: wp(17.5), // 17.5% of screen width
    height: wp(17.5), // 17.5% of screen width
    borderRadius: wp(8.75), // 8.75% of screen width
  },
  infoContainer: {
    flex: 1,
    marginLeft: wp(2.5), // 2.5% of screen width
  },
  name: {
    fontWeight: 'bold',
    fontSize: wp(4), // 4% of screen width
  },
  specialty: {
    fontStyle: 'italic',
    color: 'gray',
    fontSize: wp(3.5), // 3.5% of screen width
  },
  experience: {
    fontSize: wp(3), // 3% of screen width
    color: 'gray',
  },
  rating: {
    color: '#f39c12',
    fontSize: wp(3), // 3% of screen width
  },
  feeContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  distance: {
    fontSize: wp(3), // 3% of screen width
    color: 'gray',
  },
  fee: {
    color: 'green',
    fontWeight: 'bold',
    fontSize: wp(3.5), // 3.5% of screen width
  },
  button: {
    marginTop: hp(0.5), // 0.5% of screen height
    backgroundColor: 'green',
    paddingVertical: hp(0.5), // 0.5% of screen height
    paddingHorizontal: wp(2.5), // 2.5% of screen width
    borderRadius: wp(1.25), // 1.25% of screen width
  },
  buttonText: {
    color: 'white',
    fontSize: wp(3.5), // 3.5% of screen width
  },
  navbar: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: '#FFF',
    borderTopWidth: 1,
    borderTopColor: '#E0E0E0',
    paddingVertical: hp(1.5), // 1.5% of screen height
  },
  navItem: {
    alignItems: 'center',
  },
  navLabel: {
    fontSize: wp(3), // 3% of screen width
    color: '#333',
  },
});