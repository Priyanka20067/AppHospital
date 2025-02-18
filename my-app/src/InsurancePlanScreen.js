import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

const hospitals = [
  {
    id: '1',
    name: 'ABC Hospital',
    services: 'Emergency/Surgery/Doctors',
    experience: '30+ Years of experience in Cardiovascular surgery',
    rating: '★★★★★',
    reviews: '150+',
    logos: [
      require('../assets/image/icic.png'),
      require('../assets/image/hdfc.png'),
    ],
  },
  {
    id: '2',
    name: 'ABC Hospital',
    services: 'Emergency/Surgery/Doctors',
    experience: '20+ Years of experience in General Surgery',
    rating: '★★★★☆',
    reviews: '100+',
    logos: [
      require('../assets/image/icic.png'),
      require('../assets/image/hdfc.png'),
    ],
  },
  {
    id: '3',
    name: 'ABC Hospital',
    services: 'Emergency/Surgery/Doctors',
    experience: '15+ Years of experience in Pediatric Surgery',
    rating: '★★★★☆',
    reviews: '120+',
    logos: [
      require('../assets/image/icic.png'),
      require('../assets/image/hdfc.png'),
    ],
  },
  {
    id: '4',
    name: 'ABC Hospital',
    services: 'Emergency/Surgery/Doctors',
    experience: '25+ Years of experience in Neurology',
    rating: '★★★★★',
    reviews: '200+',
    logos: [
      require('../assets/image/icic.png'),
      require('../assets/image/hdfc.png'),
    ],
  },
];

const HospitalCard = ({ hospital, navigation }) => (
  <View style={styles.card}>
    <View style={styles.cardContent}>
      <View style={styles.leftSection}>
        <Image
          style={styles.hospitalImage}
          source={require('../assets/image/image1.png')}
        />
        <View style={styles.details}>
          <Text style={styles.hospitalName}>{hospital.name}</Text>
          <Text style={styles.services}>{hospital.services}</Text>
          <Text style={styles.experience}>{hospital.experience}</Text>
          <Text style={styles.rating}>
            <Text style={styles.star}>★</Text>
            <Text style={styles.star}>★</Text>
            <Text style={styles.star}>★</Text>
            <Text style={styles.star}>★</Text>
            <Text style={styles.star}>★</Text>
            <Text style={styles.reviews}> ({hospital.reviews})</Text>
          </Text>
        </View>
      </View>
      <View style={styles.rightSection}>
        <View style={styles.logoRow}>
          {hospital.logos.map((logo, index) => (
            <Image key={index} style={styles.logo} source={logo} />
          ))}
        </View>
        <TouchableOpacity
          style={styles.bookButton}
          onPress={() => navigation.navigate('InsurancePlanStack')}
        >
          <Text style={styles.bookButtonText}>Book Now</Text>
        </TouchableOpacity>
      </View>
    </View>
    <View style={styles.cardActions}>
      <TouchableOpacity style={styles.actionButton}>
        <Text style={styles.actionButtonText}>Get Directions</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.actionButton}>
        <Text style={styles.actionButtonText}>Contact the Place</Text>
      </TouchableOpacity>
    </View>
  </View>
);

const InsurancePlanScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity style={styles.iconButton} onPress={() => navigation.goBack()}>
          <Ionicons name="arrow-back" size={wp(6)} color="#000" />
        </TouchableOpacity>
        <Text style={styles.title}>Insurance Plan</Text>
        <TouchableOpacity style={styles.iconButton}>
          <Ionicons name="search" size={wp(6)} color="#000" />
        </TouchableOpacity>
      </View>

      <Text style={styles.subtitle}>
        Select Hospital according to your Insurance Plan
      </Text>
      <FlatList
        data={hospitals}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <HospitalCard hospital={item} navigation={navigation} />}
        contentContainerStyle={{ paddingBottom: hp(10) }}
      />
      <View style={styles.navBar}>
        <TouchableOpacity style={styles.navButton} onPress={() => navigation.navigate('Home')}>
          <Image
            source={require('../assets/image/house.png')}
            style={styles.navIcon}
          />
          <Text style={styles.navButtonText}>Home</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navButton} onPress={() => navigation.navigate('BookingStack')}>
          <Image
            source={require('../assets/image/books.png')}
            style={styles.navIcon}
          />
          <Text style={styles.navButtonText}>Bookings</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navButton} onPress={() => navigation.navigate('MapStack')}>
          <Image
            source={require('../assets/image/location.png')}
            style={styles.navIcon}
          />
          <Text style={styles.navButtonText}>Map</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navButton} onPress={() => navigation.navigate('Chat')}>
          <Image
            source={require('../assets/image/message.png')}
            style={styles.navIcon}
          />
          <Text style={styles.navButtonText}>Chat</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navButton} onPress={() => navigation.navigate('Profile')}>
          <Image
            source={require('../assets/image/photo.png')}
            style={styles.navIcon}
          />
          <Text style={styles.navButtonText}>Profile</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: hp(6), // Responsive padding
  },
  header: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: wp(4),
    backgroundColor: '#fff',
    zIndex: 1,
    paddingTop: hp(2),
  },
  iconButton: {
    padding: wp(2),
  },
  title: {
    fontSize: wp(8),
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: hp(6),
  },
  subtitle: {
    fontSize: wp(4),
    marginLeft: wp(6),
    marginTop: hp(6),
    marginBottom: hp(6),
    width: wp(90),
    fontWeight: '600',
    color: 'black',
  },
  card: {
    borderWidth: 1,
    borderRadius: wp(2),
    borderColor: '#ccc',
    marginHorizontal: wp(4),
    marginBottom: hp(2),
    backgroundColor: '#f9f9f9',
  },
  cardContent: {
    flexDirection: 'row',
    padding: wp(2),
  },
  leftSection: {
    flex: 2,
    flexDirection: 'row',
  },
  rightSection: {
    flex: 1,
    alignItems: 'center',
  },
  hospitalImage: {
    width: wp(15),
    height: wp(15),
    borderRadius: wp(7.5),
    marginRight: wp(2),
  },
  details: {
    justifyContent: 'space-between',
  },
  hospitalName: {
    fontSize: wp(4),
    fontWeight: 'bold',
  },
  services: {
    fontSize: wp(3),
    color: '#000000',
  },
  experience: {
    fontSize: wp(2.8),
    color: '#000000',
    width: wp(32),
  },
  rating: {
    fontSize: wp(3.5),
    color: '#000',
  },
  reviews: {
    color: '#666',
  },
  star: {
    color: '#E2A01D',
  },
  logoRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: hp(1),
  },
  logo: {
    width: wp(8),
    height: hp(5),
    resizeMode: 'contain',
    marginVertical: hp(0.5),
    marginRight: wp(2),
    marginLeft: wp(2),
  },
  bookButton: {
    marginTop: hp(1),
    backgroundColor: '#679400',
    paddingVertical: hp(1.5),
    paddingHorizontal: wp(4),
    borderRadius: wp(7.5),
  },
  bookButtonText: {
    color: '#fff',
    fontSize: wp(3.5),
    textAlign: 'center',
  },
  cardActions: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: wp(2),
  },
  actionButton: {
    flex: 1,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: wp(5),
    padding: wp(2),
    marginHorizontal: wp(2),
    alignItems: 'center',
    backgroundColor: '#A09E9E',
  },
  actionButtonText: {
    fontSize: wp(3.5),
    textAlign: 'center',
    color: 'white',
  },
  navBar: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: '#fff',
    borderTopWidth: 1,
    borderTopColor: '#ccc',
    paddingVertical: hp(1.5),
  },
  navButton: {
    alignItems: 'center',
  },
  navIcon: {
    width: wp(6),
    height: hp(3),
    resizeMode: 'contain',
  },
  navButtonText: {
    fontSize: wp(3),
    color: '#000',
    marginTop: hp(0.5),
  },
});

export default InsurancePlanScreen;