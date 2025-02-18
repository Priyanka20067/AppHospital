import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image, ImageBackground } from 'react-native';
import { Checkbox } from 'react-native-paper'; 
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

const SignupScreen = ({ navigation }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isSelected, setSelection] = useState(false);

  return (
    <View style={styles.container}>
      {/* Background Image */}
      <ImageBackground source={require('../assets/image/bg1.png')} style={styles.ImageBackground} />
      
      {/* Back Button */}
      <TouchableOpacity onPress={() => navigation.goBack()} style={styles.arrow}>
        <Image source={require('../assets/image/Icons.png')} style={styles.arrowImage} />
      </TouchableOpacity> 

      {/* Logo */}
      <Image source={require('../assets/image/Niramaya.png')} style={styles.logo} />

      {/* Name Input */}
      <Text style={styles.inputText}>Name:</Text>
      <TextInput style={styles.input} placeholder="Enter your name" value={name} onChangeText={setName} />

      {/* Email Input */}
      <Text style={styles.inputText}>Email address:</Text>
      <TextInput style={styles.input} placeholder="Enter your email" value={email} onChangeText={setEmail} />

      {/* Password Input */}
      <Text style={styles.inputText}>Password:</Text>
      <TextInput style={styles.input} placeholder="Enter your password" value={password} secureTextEntry onChangeText={setPassword} />

      {/* Terms & Conditions Checkbox */}
      <View style={styles.checkboxContainer}>
        <Checkbox status={isSelected ? 'checked' : 'unchecked'} onPress={() => setSelection(!isSelected)} />
        <Text style={styles.label}>I agree to the <Text style={styles.link}>terms & policy </Text></Text>
      </View>

      {/* Sign Up Button */}
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Home')}>
        <Text style={styles.buttonText}>Signup </Text>
      </TouchableOpacity>

      {/* OR Section */}
      <View style={styles.orContainer}>
        <View style={styles.line} />
        <Text style={styles.orText}>Or </Text>
        <View style={styles.line} />
      </View>

      {/* Social Login Buttons */}
      <View style={styles.socialButtonsContainer}>
        <TouchableOpacity style={styles.socialButton}>
          <Image source={require('../assets/image/googlelogo.png')} style={styles.icons} />
          <Text style={styles.socialButtonText}>Sign in with Google </Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.socialButton}>
          <Image source={require('../assets/image/applelogo.png')} style={styles.icons} />
          <Text style={styles.socialButtonText}>Sign in with Apple  </Text>
        </TouchableOpacity>
      </View>

      {/* Background Bottom Image */}
      <ImageBackground source={require('../assets/image/bg2.png')} style={styles.ImageBackground1} />

      {/* Sign In Navigation */}
      <TouchableOpacity onPress={() => navigation.navigate('LoginStack')} style={styles.signInContainer}>
        <Text style={styles.signInText}>Have an account? <Text style={styles.changeText}>Sign In</Text></Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: wp(5),
    backgroundColor: '#f7f7f7',
  },
  ImageBackground: {
    width: wp(100),
    height: hp(30),
    position: 'absolute',
    top: 0,
  },
  arrow: {
    position: 'absolute',
    top: hp(5),
    left: wp(5),
  },
  arrowImage: {
    width: wp(8),
    height: hp(4),
  },
  logo: {
    width: wp(50),
    height: hp(15),
    alignSelf: 'center',
    marginTop: hp(5),
  },
  inputText: {
    fontSize: wp(4),
    marginBottom: hp(1),
  },
  input: {
    height: hp(6),
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,
    marginBottom: hp(2),
    paddingHorizontal: wp(3),
    backgroundColor: '#fff',
    fontSize: wp(4),
  },
  checkboxContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: hp(3),
  },
  label: {
    marginLeft: wp(2),
    fontSize: wp(3.5),
  },
  link: {
    color: '#2e64e5',
  },
  button: {
    backgroundColor: '#679400',
    padding: hp(2),
    borderRadius: 20,
    alignSelf: 'center',
    width: wp(50),
    alignItems: 'center',
    marginBottom: hp(3),
  },
  buttonText: {
    color: '#fff',
    fontSize: wp(4),
    textAlign: 'center',
  },
  orContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: hp(3),
  },
  line: {
    flex: 1,
    height: 1.5,
    backgroundColor: 'black',
  },
  orText: {
    marginHorizontal: wp(3),
    color: 'black',
    fontSize: wp(3.5),
  },
  socialButtonsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: hp(3),
  },
  socialButton: {
    padding: hp(1),
    borderRadius: 20,
    alignItems: 'center',
    flexDirection: 'row',
    borderWidth: 1,
    borderColor: '#ccc',
    width: wp(40),
  },
  icons: {
    width: wp(6),
    height: wp(6),
  },
  socialButtonText: {
    color: '#000',
    fontSize: wp(3.5),
    marginLeft: wp(2),
  },
  ImageBackground1: {
    position: 'absolute',
    width: wp(100),
    height: hp(30),
    bottom: 0,
  },
  signInContainer: {
    alignSelf: 'center',
    marginTop: hp(5),
  },
  signInText: {
    color: 'black',
    fontSize: wp(4),
  },
  changeText: {
    color: '#2e64e5',
  },
});

export default SignupScreen;