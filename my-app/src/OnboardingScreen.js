import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

const OnboardingScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <Text style={styles.title}>Welcome to</Text>
        <View style={styles.flexDirection}>
          <Image source={require('../assets/image/Logo.png')} style={styles.Image} />
          <Text style={styles.brandName}>Niramaya</Text>
        </View>
        <Text style={styles.subtitle}>
          Step into a world where wellness meets convenience.
        </Text>
      </View>
      <View style={styles.position}>
        <View style={styles.pagination}>
          <View style={[styles.dot, styles.activeDot]} />
          <View style={styles.dot} />
          <View style={styles.dot} />
          <View style={styles.dot} />
        </View>
        <TouchableOpacity
          style={styles.arrowButton}
          onPress={() => navigation.navigate('AppScreen')}
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
  },
  card: {
    backgroundColor: '#fff',
    paddingTop: hp(4),
    paddingBottom: hp(4),
    borderRadius: wp(5),
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    width: wp(80),
    height: hp(70),
    position: 'relative',
  },
  position: {
    position: 'absolute',
    bottom: hp(11.8),
  },
  flexDirection: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: hp(0.5),
  },
  title: {
    fontSize: wp(12),
    color: 'black',
    fontFamily: 'Nunito',
    marginTop: hp(-5),
  },
  Image: {
    width: wp(12),
    height: hp(4.5),
  },
  brandName: {
    fontSize: wp(12),
    color: 'black',
    fontFamily: 'Nunito',
    paddingLeft: wp(2),
  },
  subtitle: {
    fontSize: wp(4.5),
    color: '#666',
    textAlign: 'center',
    marginTop: hp(1.5),
    fontFamily: 'Nunito',
    gap: hp(0.5),
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
    marginHorizontal: wp(1),
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

export default OnboardingScreen;