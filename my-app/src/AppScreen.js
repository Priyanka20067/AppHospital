import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image, FlatList } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

const AppScreen = ({ navigation }) => {
  const [selectedOption, setSelectedOption] = useState(null);

  const options = [
    { id: '1', label: 'Flights' },
    { id: '2', label: 'Hospitals' },
    { id: '3', label: 'Doctors' },
    { id: '4', label: 'Cabs' },
  ];

  const handleSelect = (id) => {
    setSelectedOption(id);
  };

  return (
    <View style={styles.container}>
      <View style={styles.topRightContainer}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Image source={require('../assets/image/Icons.png')} style={styles.arrow} />
        </TouchableOpacity>
        <Text style={styles.skip} onPress={() => navigation.navigate('Main')}>Skip</Text>
      </View>
      <View style={styles.card}>
        <Text style={styles.title}>Let’s take the first step together</Text>
        <Text style={styles.subtitle}>What are you looking for?</Text>
        <FlatList
          data={options}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <TouchableOpacity
              style={[
                styles.option,
                selectedOption === item.id && styles.selectedOption,
              ]}
              onPress={() => handleSelect(item.id)}
            >
              <Text
                style={[
                  styles.optionText,
                  selectedOption === item.id && styles.selectedOptionText,
                ]}
              >
                {item.label}
              </Text>
            </TouchableOpacity>
          )}
        />
      </View>
      <View style={styles.position}>
        <View style={styles.pagination}>
          <View style={styles.dot} />
          <View style={[styles.dot, styles.activeDot]} />
          <View style={styles.dot} />
          <View style={styles.dot} />
        </View>
        <TouchableOpacity
          style={styles.arrowButton}
          onPress={() => navigation.navigate('Main')}
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
    paddingTop: hp(10),
    borderRadius: wp(8),
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
    bottom: hp(11.3),
  },
  title: {
    fontSize: wp(4),
    fontWeight: '600',
    color: '#000',
    textAlign: 'center',
    marginBottom: hp(1.5),
    marginTop: hp(-2.5),
  },
  subtitle: {
    fontSize: wp(6),
    fontWeight: 'bold',
    color: '#000',
    textAlign: 'center',
    marginTop: hp(-2.5),
  },
  option: {
    backgroundColor: '#FFF',
    gap: hp(1.5),
    padding: wp(4),
    borderRadius: wp(8),
    marginBottom: hp(2),
    borderWidth: 1,
    width: wp(72),
    borderColor: '#DADADA',
  },
  selectedOption: {
    borderColor: '#8DBF7C',
    backgroundColor: '#EAF4EA',
  },
  optionText: {
    fontSize: wp(4.5),
    textAlign: 'center',
    color: '#000',
  },
  selectedOptionText: {
    color: '#4CAF50',
    fontWeight: 'bold',
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

export default AppScreen;