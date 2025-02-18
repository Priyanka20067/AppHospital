import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

const JoinScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.topRightContainer}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Image source={require('../assets/image/Icons.png')} style={styles.arrow} />
        </TouchableOpacity>
        <Text style={styles.skip} onPress={() => navigation.navigate('LoginStack')}>Skip</Text>
      </View>
      <View style={styles.card}>
        <Image source={require('../assets/image/Rectangle 12.png')} style={styles.image} />
        <Text style={styles.heading}>Kickstart Your Journey</Text>
        <Text style={styles.headingsub}>with Us</Text>
        <Text style={styles.text}>
          New to Niramaya? <Text style={styles.link}>Join Now</Text>
        </Text>
        <Text style={styles.textsub}>
          Already a user? <Text style={styles.link} onPress={() => navigation.navigate('Home')}>Sign In</Text>
        </Text>
      </View>
      <View style={styles.position}>
        <View style={styles.pagination}>
          <View style={styles.dot} />
          <View style={styles.dot} />
          <View style={styles.dot} />
          <View style={[styles.dot, styles.activeDot]} />
        </View>
        <TouchableOpacity
          style={styles.arrowButton}
          onPress={() => navigation.navigate('LoginStack')}
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
    marginTop: hp(-15),
  },
  heading: {
    fontSize: wp(6),
    marginBottom: hp(0.5),
    letterSpacing: wp(0.1),
  },
  headingsub: {
    fontSize: wp(6),
    marginTop: hp(-2.5),
    letterSpacing: wp(0.1),
  },
  text: {
    fontSize: wp(3.5),
    color: '#555',
    marginBottom: hp(0.5),
  },
  textsub: {
    fontSize: wp(3.5),
    color: '#555',
    marginTop: hp(-2.5),
  },
  link: {
    color: '#007BFF',
    textDecorationLine: 'underline',
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

export default JoinScreen;