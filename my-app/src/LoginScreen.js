import React, { useState } from 'react';
import { View, Text, TextInput, Image, TouchableOpacity, StyleSheet, ImageBackground } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

const LoginScreen = () => {
  const navigation = useNavigation();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  return (
    <View style={styles.container}>
      {/* Background Image */}
      <ImageBackground source={require('../assets/image/bg1.png')} style={styles.imageBackground} />

      {/* Back Button */}
      <TouchableOpacity style={styles.arrowContainer} onPress={() => navigation.goBack()}>
        <Image source={require('../assets/image/Icons.png')} style={styles.arrow} />
      </TouchableOpacity>

      {/* Logo */}
      <Image source={require('../assets/image/Niramaya.png')} style={styles.logo} />

      {/* Username Input */}
      <Text style={styles.inputText}>Username : </Text>
      <View style={styles.inputFlex}>
        <Image source={require('../assets/image/graterthan.png')} style={styles.inputImage} />
        <TextInput
          style={styles.input}
          placeholder="Sample1_00"
          placeholderTextColor="#777"
          value={username}
          onChangeText={setUsername}
        />
      </View>

      {/* Password Input */}
      <Text style={styles.inputText}>Password : </Text>
      <View style={styles.inputFlex}>
        <Image source={require('../assets/image/graterthan.png')} style={styles.inputImage} />
        <TextInput
          style={styles.input}
          placeholder="****"
          placeholderTextColor="#777"
          secureTextEntry
          value={password}
          onChangeText={setPassword}
        />
      </View>

      {/* Forgot Password */}
      <TouchableOpacity style={styles.boxForgotPassword}>
        <Text style={styles.forgotPassword}>Forgot Password?  </Text>
      </TouchableOpacity>

      {/* Login Button */}
      <TouchableOpacity style={styles.loginButton} onPress={() => navigation.navigate('SignupStack')}>
        <Text style={styles.loginText}>Login</Text>
      </TouchableOpacity>

      {/* Bottom Background Image */}
      <ImageBackground source={require('../assets/image/bg2.png')} style={styles.imageBackground1} />

      {/* Signup Link */}
      <TouchableOpacity style={styles.boxSignupText}>
        <Text style={styles.signupText}>
          Don’t have an account?{' '}
          <Text style={styles.signupLink} onPress={() => navigation.navigate('SignupStack')}>
            Sign Up
          </Text>
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F9FAF8',
    padding: wp(5),
  },
  imageBackground: {
    width: wp(100),
    height: hp(30),
    position: 'absolute',
    top: 0,
  },
  arrowContainer: {
    position: 'absolute',
    top: hp(5),
    left: wp(5),
  },
  arrow: {
    width: wp(8),
    height: hp(4),
  },
  logo: {
    width: wp(50),
    height: hp(15),
    marginBottom: hp(3),
  },
  inputText: {
    fontSize: wp(4),
    alignSelf: 'flex-start',
    marginBottom: hp(1),
  },
  inputFlex: {
    flexDirection: 'row',
    alignItems: 'center',
    width: wp(90),
    marginBottom: hp(2),
  },
  inputImage: {
    width: wp(4),
    height: hp(2),
  },
  input: {
    flex: 1,
    height: hp(6),
    borderColor: '#DDD',
    borderWidth: 1,
    borderRadius: wp(2),
    paddingLeft: wp(3),
    color: '#333',
    fontSize: wp(4),
  },
  boxForgotPassword: {
    alignSelf: 'flex-end',
    marginRight: wp(5),
  },
  forgotPassword: {
    color: '#0C2A92',
    fontSize: wp(3),
    marginBottom: hp(2),
  },
  loginButton: {
    backgroundColor: '#679400',
    width: wp(50),
    paddingVertical: hp(2),
    borderRadius: wp(5),
    alignItems: 'center',
    marginBottom: hp(3),
  },
  loginText: {
    color: '#FFF',
    fontSize: wp(4.5),
    fontWeight: 'bold',
  },
  imageBackground1: {
    width: wp(100),
    height: hp(30),
    position: 'absolute',
    bottom: 0,
  },
  boxSignupText: {
    position: 'absolute',
    bottom: hp(5),
  },
  signupText: {
    color: '#777',
    fontSize: wp(3.5),
  },
  signupLink: {
    color: '#2C6E49',
    fontWeight: 'bold',
  },
});

export default LoginScreen;