import React from 'react';
import { View, Text, StyleSheet, FlatList, Image, TouchableOpacity } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import Icon from "react-native-vector-icons/Ionicons";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

const hospitals = [
  {
    id: '1',
    name: 'ABC Hospital',
    specialization: 'Emergency/Surgery/Doctors',
    experience: '30+ Years of experience in Cardiovascular surgery',
    rating: '★★★★★',
    reviews: '150+',
    distance: '1 km',
    image: require('../assets/image/image1.png'), // Local image
  },
  {
    id: '2',
    name: 'EFG Hospital',
    specialization: 'Emergency/Surgery/Doctors',
    experience: '30+ Years of experience in Cardiovascular surgery',
    rating: '★★★★★',
    reviews: '150+',
    distance: '1 km',
    image: require('../assets/image/image2.png'), // Local image
  },
  {
    id: '3',
    name: 'Victoria MED Centre',
    specialization: 'Emergency/Surgery/Doctors',
    experience: '30+ Years of experience in Cardiovascular surgery',
    rating: '★★★★★',
    reviews: '150+',
    distance: '1 km',
    image: require('../assets/image/image3.png'), // Local image
  },
];

const NearbyHospitals = ({ navigation }) => {
  const renderHospital = ({ item }) => (
    <View style={styles.hospitalCard}>
      {/* Render local images correctly */}
      <Image source={item.image} style={styles.hospitalImage} />
      <View style={styles.infoContainer}>
        <Text style={styles.name}>{item.name}</Text>
        <Text style={styles.specialty}>{item.specialization}</Text>
        <Text style={styles.experience}>{item.experience}</Text>
        <Text style={styles.rating}>{item.rating} [{item.reviews}]</Text>
      </View>
      <View style={styles.feeContainer}>
        <Text style={styles.distance}>Distance: {item.distance}</Text>
        <Text style={styles.fee}>Fee: Rs. 800/-</Text>
        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('DoctorStack')}>
          <Text style={styles.buttonText}>Book Now</Text>
        </TouchableOpacity>
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      {/* Map Section */}
      <MapView
        style={styles.map}
        initialRegion={{
          latitude: 37.78825,
          longitude: -122.4324,
          latitudeDelta: 0.01,
          longitudeDelta: 0.01,
        }}
      >
        {hospitals.map((hospital, index) => (
          <Marker
            key={index}
            coordinate={{
              latitude: 37.78825 + index * 0.002,
              longitude: -122.4324 + index * 0.002,
            }}
            title={hospital.name}
          />
        ))}
      </MapView>

      {/* List of Hospitals */}
      <FlatList
        data={hospitals}
        renderItem={renderHospital}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.list}
      />

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
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  map: {
    height: hp(40), // 40% of screen height
    width: wp(100), // 100% of screen width
  },
  list: {
    padding: wp(2.5), // 2.5% of screen width
    marginBottom: hp(10), // Add margin to avoid overlap with the fixed footer
  },
  hospitalCard: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    marginBottom: hp(1.5), // 1.5% of screen height
    borderRadius: wp(2.5), // 2.5% of screen width
    padding: wp(2.5), // 2.5% of screen width
    elevation: 3,
  },
  hospitalImage: {
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

export default NearbyHospitals;