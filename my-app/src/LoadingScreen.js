import React, { useEffect, useRef } from 'react';
import { View, StyleSheet, Animated } from 'react-native';
import { Dimensions } from 'react-native';


const { width, height } = Dimensions.get('window');



const LoadingScreen = ({ navigation}) => {
  const rotateValue = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    // Rotate animation
    const rotate = Animated.loop(
      Animated.timing(rotateValue, {
        toValue: 1,
        duration: 2000,
        useNativeDriver: true,
        easing: Animated.Easing.linear,
      })
    );
    rotate.start();

    // Navigate to LoginScreen after 3 seconds
    const timer = setTimeout(() => {
      navigation.replace('Login');  // Navigate to LoginScreen
    }, 3000);  // 3 seconds delay

    // Clean up the timer on component unmount
    return () => clearTimeout(timer);
  }, [rotateValue, navigation]);

  // Interpolate the rotation value to get a degree rotation
  const rotateAnimation = rotateValue.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '360deg'], 
  });

  return (
    <View style={styles.container}>
      <View style={styles.circle}>
        <Animated.Image
          source={require('../assets/image/Next Button.png')}
          style={[styles.icon, { transform: [{ rotate: rotateAnimation }] }]}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f9f6',
    justifyContent: 'center',
    alignItems: 'center',
  },
  circle: {
    width: 100,
    height: 100,
    borderRadius: 50,
    backgroundColor: '#d0e8cf',
    justifyContent: 'center',
    alignItems: 'center',
  },
  icon: {
    width: 40,
    height: 40,
    resizeMode: 'contain',
  },
});

export default LoadingScreen;
