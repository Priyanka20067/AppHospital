import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

const MainScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.topRightContainer}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Image source={require('../assets/image/Icons.png')} style={styles.arrow} />
        </TouchableOpacity>
        <Text style={styles.skip} onPress={() => navigation.navigate('Join')}>Skip</Text>
      </View>
      <View style={styles.card}>
        <Image source={require('../assets/image/Rectangle 13.png')} style={styles.image} />
        <Text style={styles.heading}>Unlock effortless wellbeing</Text>
        <Text style={styles.description}>
          Experience expert care, hassle-free logistics, and a healthier future.
        </Text>
      </View>
      <View style={styles.position}>
        <View style={styles.pagination}>
          <View style={styles.dot} />
          <View style={styles.dot} />
          <View style={[styles.dot, styles.activeDot]} />
          <View style={styles.dot} />
        </View>
        <TouchableOpacity
          style={styles.arrowButton}
          onPress={() => navigation.navigate('Join')}
        >
          <Image source={require('../assets/image/Arrow.png')} style={styles.nextText} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0000001A',
    justifyContent: 'center',
    alignItems: 'center',
    padding: wp(5),
    fontFamily: 'Nunito',
  },
  topRightContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: hp(-10),
    padding: wp(7.5),
  },
  arrow: {
    height: hp(4),
    width: wp(8.5),
    display: 'block',
    marginRight: wp(63),
    marginLeft: wp(-2.5),
  },
  skip: {
    fontSize: wp(4.5),
    color: 'black',
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: wp(5),
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    width: wp(80),
    height: hp(70),
    gap: hp(2),
    position: 'relative',
  },
  position: {
    position: 'absolute',
    bottom: hp(11.4),
  },
  image: {
    width: wp(57.5),
    height: wp(57.5),
    marginBottom: hp(2.5),
  },
  heading: {
    fontSize: wp(7),
    color: '#333',
    textAlign: 'center',
    marginBottom: hp(1.5),
    letterSpacing: wp(0.1),
  },
  description: {
    fontSize: wp(4.5),
    color: '#666',
    textAlign: 'center',
    marginBottom: hp(10),
    width: wp(76),
  },
  pagination: {
    flexDirection: 'row',
    marginTop: hp(2.5),
  },
  dot: {
    height: hp(1),
    width: wp(2.5),
    borderRadius: wp(1),
    backgroundColor: '#CCC',
    marginHorizontal: wp(1.25),
  },
  activeDot: {
    backgroundColor: '#67940069',
    width: wp(12.5),
  },
  arrowButton: {
    marginTop: hp(2.5),
    backgroundColor: '#67940069',
    marginLeft: wp(8.75),
    height: wp(12.5),
    width: wp(12.5),
    borderRadius: wp(6.25),
    justifyContent: 'center',
    alignItems: 'center',
  },
  nextText: {
    height: wp(8),
    width: wp(8),
    color: '#FFFFFF',
    marginBottom: hp(0.5),
  },
});

export default MainScreen;