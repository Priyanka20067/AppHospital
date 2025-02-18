import React, { useState } from 'react';
import { ScrollView, View, Text, TextInput, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import Icon from "react-native-vector-icons/Ionicons";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

export default function HomeScreen({ navigation }) {
  const [liked, setLiked] = useState(false);

  return (
    <View style={styles.container}>
      <ScrollView style={styles.scrollView}>
        {/* Header Section */}
        <View style={styles.header}>
          <Image
            source={require('../assets/image/profile.png')}
            style={styles.avatar}
          />
          <View style={styles.headerText}>
            <Text style={styles.greeting}>Hi,</Text>
            <Text style={styles.username}>Person One</Text>
          </View>
          <View style={styles.iconButton}>
            <Image source={require('../assets/image/book.png')} style={styles.iconButtonimage} />
          </View>
        </View>

        {/* Search Bar */}
        <View style={styles.searchBar}>
          <Ionicons name="search-outline" size={wp(4)} color="gray" style={styles.searchIcon} />
          <TextInput placeholder="Search anything" style={styles.searchInput} />
        </View>

        {/* Appointment Banner */}
        <View style={styles.banner}>
          <View style={styles.sub}>
            <Image
              source={require('../assets/image/Mdoc.png')}
              style={styles.bannerImage}
            />
          </View>
          <View style={styles.bannerText}>
            <Text style={styles.headerText}>Looking for desired doctor?</Text>
            <TouchableOpacity>
              <Text style={styles.appointmentButton}>Book an appointment</Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* Categories Section */}
        <View style={styles.sectionHeader}>
          <Text style={styles.username}>Categories</Text>
          <TouchableOpacity onPress={() => navigation.navigate("Categories")} style={styles.flexrow}>
            <Text>See All </Text>
            <Image source={require('../assets/image/graterthan.png')} style={styles.graterImage} />
          </TouchableOpacity>
        </View>

        <View style={styles.categories}>
          {[
            { name: 'Neurologist', image: require('../assets/image/Neurology.png') },
            { name: 'Cardiologist', image: require('../assets/image/Cardiology.png') },
            { name: 'Dermatologist', image: require('../assets/image/Dermatologist.png') },
            { name: 'Dentist', image: require('../assets/image/Dentist.png') },
          ].map((category, index) => (
            <View key={index} style={styles.category}>
              <View style={styles.categoryImage}>
                <Image source={category.image} style={{ width: wp(8), height: wp(8) }} />
              </View>
              <Text style={styles.categoryText}>{category.name}</Text>
            </View>
          ))}
        </View>

        {/* Services Section */}
        <View style={styles.sectionHeader}>
          <Text style={styles.username}>Services</Text>
          <TouchableOpacity onPress={() => navigation.navigate("Services")} style={styles.flexrow}>
            <Text style={styles.seeallText}>See All </Text>
            <Image source={require('../assets/image/graterthan.png')} style={styles.graterImage} />
          </TouchableOpacity>
        </View>

        <View style={styles.services}>
          <TouchableOpacity
            style={styles.likeButton}
            onPress={() => setLiked(!liked)}
          >
            <Icon
              name={liked ? 'heart' : 'heart-outline'}
              size={wp(8)}
              color="#FF0000"
            />
          </TouchableOpacity>
          {[
            { name: ' ⭐ ⭐ ⭐ ⭐ ⭐ Locate & Book Cabs', image: 'https://i.imgur.com/c9WVtb8.png' },
            { name: '⭐ ⭐ ⭐ ⭐ ⭐ Book Your First Appointment', image: 'https://i.imgur.com/8oHwDwY.png' },
          ].map((service, index) => (
            <View key={index} style={styles.service}>
              <Image source={{ uri: service.image }} style={styles.serviceImage} />
              <Text style={styles.serviceText}>{service.name}</Text>
            </View>
          ))}
        </View>
      </ScrollView>

      {/* Bottom Navigation Bar */}
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
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  scrollView: {
    padding: wp(4),
    marginBottom: hp(10), // Add margin to avoid overlap with the fixed footer
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: hp(2),
  },
  avatar: {
    width: wp(12),
    height: wp(12),
    borderRadius: wp(6),
    marginRight: wp(5),
  },
  headerText: {
    flexDirection: 'row',
  },
  greeting: {
    fontSize: wp(4),
  },
  username: {
    fontSize: wp(5),
    fontWeight: 'bold',
    marginLeft: wp(1),
  },
  flexrow: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  graterImage: {
    height: hp(2),
    width: wp(2.5),
  },
  iconButton: {
    marginLeft: 'auto',
    height: wp(16),
    width: wp(16),
    borderWidth: 1,
    borderColor: 'black',
    borderRadius: wp(8),
    backgroundColor: 'transparent',
    justifyContent: 'center',
    alignItems: 'center',
  },
  iconButtonimage: {
    height: wp(7),
    width: wp(7),
  },
  searchBar: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f2f2f2',
    padding: wp(2),
    borderRadius: wp(2.5),
    marginBottom: hp(2),
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 2,
  },
  searchIcon: {
    marginRight: wp(2),
  },
  searchInput: {
    flex: 1,
    borderWidth: 0,
    fontSize: wp(4),
  },
  banner: {
    flexDirection: 'row',
    backgroundColor: '#679400',
    padding: wp(2.5),
    paddingBottom: 0,
    borderRadius: wp(4),
    marginBottom: hp(2),
  },
  sub: {
    position: 'relative',
    marginLeft: wp(-6),
  },
  headerText: {
    width: wp(45),
    fontSize: wp(6),
    fontFamily: 'Duplet',
    color: 'white',
  },
  bannerImage: {
    width: wp(70),
    height: hp(20),
    borderRadius: wp(2),
  },
  bannerText: {
    right: wp(2.5),
    top: hp(4),
    justifyContent: 'center',
    position: 'absolute',
  },
  appointmentButton: {
    backgroundColor: '#fff',
    paddingVertical: hp(1),
    paddingHorizontal: wp(2),
    borderRadius: wp(2),
    marginTop: hp(1),
    textAlign: 'center',
    fontSize: wp(2.5),
    fontFamily: 'Montserrat',
  },
  sectionHeader: {
    fontSize: wp(9),
    fontFamily: 'poppins',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: hp(2),
    marginTop: hp(-1),
  },
  categories: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: hp(-1),
  },
  seeallText: {
    fontFamily: 'Duplet',
  },
  category: {
    alignItems: 'center',
    marginBottom: hp(2),
  },
  categoryImage: {
    height: wp(15),
    width: wp(15),
    backgroundColor: '#D9D9D9',
    borderRadius: wp(7.5),
    justifyContent: 'center',
    alignItems: 'center',
  },
  categoryText: {
    marginTop: hp(0.5),
    fontSize: wp(3),
    fontFamily: 'Duplet',
  },
  services: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    fontFamily: 'Duplet',
  },
  service: {
    backgroundColor: '#f2f2f2',
    borderRadius: wp(2),
    overflow: 'hidden',
    width: wp(45),
    marginBottom: hp(10),
  },
  serviceImage: {
    width: '100%',
    height: hp(15),
  },
  likeButton: {
    position: 'absolute',
    top: hp(1),
    right: wp(2),
    padding: wp(1.5),
    elevation: 3,
    zIndex: 1,
  },
  serviceText: {
    padding: wp(2),
    fontSize: wp(3.5),
    fontWeight: 'bold',
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