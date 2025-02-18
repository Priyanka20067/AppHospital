import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity, Image } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';
import { AntDesign } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

const BookingConfirmedScreen = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.parentView}>
      {/* Back Button */}
      <TouchableOpacity style={styles.backIconContainer} onPress={() => navigation.goBack()}>
        <AntDesign name="arrowleft" size={wp(6)} color="black" />
      </TouchableOpacity>

      {/* Search Button */}
      <TouchableOpacity style={styles.searchIconContainer} onPress={() => navigation.navigate('SearchScreen')}>
        <Ionicons name="search-outline" size={wp(6)} color="#000" />
      </TouchableOpacity>

      {/* Image Section */}
      <View style={styles.imageContainer}>
        <Image source={require('../assets/image/bgimage.png')} style={styles.image} />
      </View>

      {/* Heading */}
      <Text style={styles.heading}>Booking Confirmed</Text>
      <Text style={styles.bookingId}>Booking ID: 234510</Text>

      {/* Booking Options */}
      {["Book Cab to ABC Hospital at", "Book Hotel near ABC Hospital at", "Book Hotel near ABC Hospital at"].map((text, index) => (
        <View style={styles.commonStyle} key={index}>
          <View style={styles.textContainer}>
            <Text style={styles.childTitle}>{text}</Text>
            <TouchableOpacity>
              <Text style={styles.price}>Lowest Price</Text>
            </TouchableOpacity>
          </View>
          <Ionicons name="arrow-forward-outline" size={wp(6)} color="#679400" style={styles.icon} />
        </View>
      ))}

      {/* Go Back Button */}
      <TouchableOpacity onPress={() => navigation.navigate('Home')}>
        <Text style={styles.home}>Go back to home </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  parentView: {
    flex: 1,
    alignItems: 'center',
    paddingTop: hp(5),
    backgroundColor: '#fff',
  },
  backIconContainer: {
    position: 'absolute',
    top: hp(3),
    left: wp(5),
  },
  searchIconContainer: {
    position: 'absolute',
    top: hp(3),
    right: wp(5),
  },
  imageContainer: {
    borderWidth: 2,
    borderColor: '#679400',
    borderRadius: wp(30),
    width: wp(60),
    height: wp(60),
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: hp(7),
  },
  image: {
    width: wp(50),
    height: wp(50),
  },
  heading: {
    fontSize: wp(8),
    fontWeight: 'bold',
    textAlign: 'center',
    marginVertical: hp(2),
    color: '#000',
  },
  bookingId: {
    fontSize: wp(5),
    color: '#333',
  },
  commonStyle: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderWidth: 1,
    borderColor: '#679400',
    borderRadius: wp(4),
    padding: wp(3),
    marginVertical: hp(1),
    width: '90%',
    height: hp(10),
  },
  textContainer: {
    flex: 1,
  },
  childTitle: {
    fontSize: wp(4.5),
    color: '#000',
  },
  price: {
    fontSize: wp(4.5),
    textDecorationLine: 'underline',
    color: '#679400',
  },
  icon: {
    marginRight: wp(3),
  },
  home: {
    fontSize: wp(4.5),
    textDecorationLine: 'underline',
    color: '#000',
    marginTop: hp(3),
  },
});

export default BookingConfirmedScreen;