import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Text, TouchableOpacity, ImageBackground } from 'react-native';
import * as Location from 'expo-location';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

export default function LocationScreen({ navigation }) {
  const [userLocation, setUserLocation] = useState(null);
  const [errorMsg, setErrorMsg] = useState(null);

  // Get user's current location
  const getLocation = async () => {
    let { status } = await Location.requestForegroundPermissionsAsync();
    if (status !== 'granted') {
      setErrorMsg('Permission to access location was denied');
      return;
    }
    let location = await Location.getCurrentPositionAsync({ enableHighAccuracy: true });
    setUserLocation(location.coords);
  };

  useEffect(() => {
    getLocation(); // Automatically get location on component mount
  }, []);

  return (
    <View style={styles.container}>
      <ImageBackground 
        source={require('../assets/image/lgbg.png')} 
        style={styles.backgroundImage}
      >
        <View style={styles.locationBox}>
          <Text style={styles.title}>Where are you?</Text>
          <Text style={styles.description}>
            {errorMsg ? errorMsg : 'We are fetching your location...'}
          </Text>
          <TouchableOpacity
            style={styles.locateButton}
            onPress={() => navigation.navigate('LocationStack')}
          >
            <Text style={styles.buttonText}>Locate me</Text>
          </TouchableOpacity>
          <Text 
            style={styles.manualSelect}
            onPress={() => navigation.navigate('LocateMeStack')} 
          >
            Select location manually
          </Text>
        </View>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  backgroundImage: {
    width: wp(100),
    height: hp(100),
    resizeMode: 'cover',
  },
  locationBox: {
    position: 'absolute',
    bottom: hp(35),
    left: wp(5),
    right: wp(5),
    backgroundColor: '#fff',
    borderRadius: wp(3),
    padding: wp(5),
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 5,
    elevation: 5,
  },
  title: {
    fontSize: hp(2.5),
    fontWeight: 'bold',
    marginBottom: hp(1),
  },
  description: {
    fontSize: hp(2),
    color: '#888',
    textAlign: 'center',
    marginBottom: hp(2),
  },
  locateButton: {
    backgroundColor: '#4CAF50',
    paddingVertical: hp(1.5),
    paddingHorizontal: wp(10),
    borderRadius: wp(2),
    marginBottom: hp(1),
  },
  buttonText: {
    color: '#fff',
    fontSize: hp(2.2),
    fontWeight: 'bold',
  },
  manualSelect: {
    color: 'black',
    fontSize: hp(2),
    marginLeft: wp(-2),
  },
});