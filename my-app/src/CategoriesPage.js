import React from "react";
import { View, Text, FlatList, Image, StyleSheet, TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

const categories = [
  { id: '1', name: 'Neurologist', image: require('../assets/image/Neurology.png') },
  { id: '2', name: 'Cardiologist', image: require('../assets/image/Cardiology.png') },
  { id: '3', name: 'Dermatologist', image: require('../assets/image/Dermatologist.png') },
  { id: '4', name: 'Dentist', image: require('../assets/image/Dentist.png') },
  { id: '5', name: 'Neurologist', image: require('../assets/image/Neurology.png') },
  { id: '6', name: 'Cardiologist', image: require('../assets/image/Cardiology.png') },
  { id: '7', name: 'Dermatologist', image: require('../assets/image/Dermatologist.png') },
  { id: '8', name: 'Dentist', image: require('../assets/image/Dentist.png') },
  { id: '9', name: 'Neurologist', image: require('../assets/image/Neurology.png') },
  { id: '10', name: 'Cardiologist', image: require('../assets/image/Cardiology.png') },
  { id: '11', name: 'Dermatologist', image: require('../assets/image/Dermatologist.png') },
  { id: '12', name: 'Dentist', image: require('../assets/image/Dentist.png') },
  { id: '13', name: 'Neurologist', image: require('../assets/image/Neurology.png') },
  { id: '14', name: 'Cardiologist', image: require('../assets/image/Cardiology.png') },
  { id: '15', name: 'Dermatologist', image: require('../assets/image/Dermatologist.png') },
  { id: '16', name: 'Dentist', image: require('../assets/image/Dentist.png') },
  { id: '17', name: 'Neurologist', image: require('../assets/image/Neurology.png') },
  { id: '18', name: 'Cardiologist', image: require('../assets/image/Cardiology.png') },
  { id: '19', name: 'Dermatologist', image: require('../assets/image/Dermatologist.png') },
  { id: '20', name: 'Dentist', image: require('../assets/image/Dentist.png') },
];

export default function CategoriesPage({ navigation }) {
  const renderCategory = ({ item }) => (
    <TouchableOpacity style={styles.card}>
      <View style={styles.cardBg}>
        <Image source={item.image} style={styles.icon} />
      </View>
      <Text style={styles.text}>{item.name}</Text>
    </TouchableOpacity>
  );

  const handleSearchPress = () => {
    console.log("Search button pressed");
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Icon name="arrow-back-outline" size={wp(6)} color="#333" />
        </TouchableOpacity>
        <TouchableOpacity onPress={handleSearchPress}>
          <Icon name="search-outline" size={wp(6)} color="#333" />
        </TouchableOpacity>
      </View>

      <Text style={styles.textca}>Categories</Text>

      <FlatList
        data={categories}
        numColumns={4}
        keyExtractor={(item) => item.id}
        renderItem={renderCategory}
        contentContainerStyle={styles.grid}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFF",
    paddingHorizontal: wp(4),
    paddingTop: hp(2),
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    padding: wp(4),
    backgroundColor: "#FFF",
  },
  textca: {
    fontSize: wp(10),
    fontFamily: 'Poppins',
    textAlign: 'center',
    marginVertical: hp(2),
  },
  grid: {
    alignItems: "center",
    justifyContent: "center",
  },
  card: {
    width: wp(20),
    height: hp(12),
    margin: wp(2),
    padding: wp(2),
    alignItems: 'center',
  },
  cardBg: {
    backgroundColor: '#D9D9D9',
    borderRadius: wp(15),
    width: wp(15),
    height: wp(15),
    justifyContent: 'center',
    alignItems: 'center',
    padding: wp(2),
  },
  icon: {
    width: wp(10),
    height: wp(10),
    marginBottom: hp(1),
  },
  text: {
    fontSize: wp(2.4),
    fontWeight: "700",
    color: "black",
    textAlign: "center",
  },
});