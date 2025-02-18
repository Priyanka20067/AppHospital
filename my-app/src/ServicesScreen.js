import React, { useState } from 'react';
import { View, Text, StyleSheet, FlatList, Image, TouchableOpacity } from 'react-native';
import Icon from "react-native-vector-icons/Ionicons";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

const services = [
  { id: '1', title: 'Locate & Book Cabs', image: 'https://i.imgur.com/c9WVtb8.png', icon: 'car', rating: 5 },
  { id: '2', title: 'Book An Appointment', image: 'https://i.imgur.com/8oHwDwY.png', icon: 'medical', rating: 4 },
  { id: '3', title: 'Find Doctors', image: 'https://i.imgur.com/c9WVtb8.png', icon: 'search', rating: 4.5 },
  { id: '4', title: 'Order Medicines', image: 'https://i.imgur.com/8oHwDwY.png', icon: 'medkit', rating: 4.2 },
];

const ServiceCard = ({ service }) => {
  const [liked, setLiked] = useState(false);

  return (
    <View style={styles.card}>
      <View style={styles.imageContainer}>
        <TouchableOpacity style={styles.likeButton} onPress={() => setLiked(!liked)}>
          <Icon name={liked ? 'heart' : 'heart-outline'} size={hp(3)} color="#FF0000" />
        </TouchableOpacity>
        <Image source={{ uri: service.image }} style={styles.image} />
      </View>

      <View style={styles.ratingContainer}>
        {[...Array(5)].map((_, index) => (
          <Icon
            key={index}
            name="star"
            size={hp(2.5)}
            color={index < Math.floor(service.rating) ? '#FFD700' : '#E0E0E0'}
          />
        ))}
      </View>

      <View style={styles.cardContent}>
        <Text style={styles.title}>{service.title}</Text>
        <TouchableOpacity style={styles.iconButton}>
          <Icon name={service.icon} size={hp(3)} color="white" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const ServicesScreen = ({ navigation }) => {
  const handleSearchPress = () => {
    console.log('Search button pressed');
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Icon name="arrow-back" size={hp(3)} color="#333" />
        </TouchableOpacity>
        <TouchableOpacity onPress={handleSearchPress}>
          <Icon name="search" size={hp(3)} color="#333" />
        </TouchableOpacity>
      </View>

      <Text style={styles.textca}>Services</Text>

      <FlatList
        data={services}
        renderItem={({ item }) => <ServiceCard service={item} />}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.list}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
    padding: wp(4),
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: wp(4),
    backgroundColor: '#FFF',
  },
  textca: {
    fontSize: hp(4),
    fontWeight: 'bold',
    textAlign: 'center',
    marginVertical: hp(2),
  },
  list: {
    paddingBottom: hp(2),
  },
  card: {
    backgroundColor: 'white',
    borderRadius: wp(2),
    marginBottom: hp(2),
    overflow: 'hidden',
    elevation: 4,
  },
  imageContainer: {
    position: 'relative',
  },
  image: {
    width: '100%',
    height: hp(20),
  },
  likeButton: {
    position: 'absolute',
    top: hp(1.5),
    right: wp(3),
    padding: wp(2),
    elevation: 3,
    zIndex: 1,
  },
  ratingContainer: {
    flexDirection: 'row',
    marginTop: hp(1),
    paddingLeft: wp(4),
  },
  cardContent: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: wp(4),
  },
  title: {
    fontSize: hp(2.5),
    fontWeight: 'bold',
  },
  iconButton: {
    backgroundColor: '#4CAF50',
    padding: hp(1),
    borderRadius: wp(4),
  },
});

export default ServicesScreen;