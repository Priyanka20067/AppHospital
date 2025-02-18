import React from 'react';
import { View, Text, Image, TextInput, TouchableOpacity, ScrollView, StyleSheet } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Ionicons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Dimensions } from 'react-native';


const { width, height } = Dimensions.get('window');


const Appointment = () => {
  return (
    <ScrollView style={styles.container}>
      {/* Greeting */}
      <View style={styles.header}>
        <Image style={styles.profileImage} source={{ uri: 'https://via.placeholder.com/50' }} />
        <Text style={styles.greeting}>Hi,</Text>
        <Text style={styles.username}>Person One</Text>
        <Icon name="time-outline" size={24} style={styles.icon} />
      </View>

      {/* Search Bar */}
      <View style={styles.searchBar}>
        <Icon name="search-outline" size={20} />
        <TextInput placeholder="Search anything" style={styles.searchInput} />
      </View>

      {/* Appointment Banner */}
      <TouchableOpacity style={styles.banner}>
        <Image style={styles.bannerImage} source={{ uri: 'https://via.placeholder.com/100x100' }} />
        <Text style={styles.bannerText}>Looking for desired doctor?</Text>
        <TouchableOpacity style={styles.bannerButton}>
          <Text style={styles.bannerButtonText}>Book an appointment</Text>
        </TouchableOpacity>
      </TouchableOpacity>

      {/* Categories */}
      <View>
        <Text style={styles.sectionTitle}>Categories</Text>
        <View style={styles.categories}>
          {['Neurologist', 'Cardiologist', 'Dermatologist', 'Dentist'].map((item, index) => (
            <TouchableOpacity key={index} style={styles.categoryItem}>
              <Icon name="heart-outline" size={24} color="green" />
              <Text>{item}</Text>
            </TouchableOpacity>
          ))}
        </View>
      </View>

      {/* Services */}
      <View>
        <Text style={styles.sectionTitle}>Services</Text>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          {['Locate & Book Cabs', 'Book Your First Appointment'].map((item, index) => (
            <TouchableOpacity key={index} style={styles.serviceCard}>
              <Image style={styles.serviceImage} source={{ uri: 'https://via.placeholder.com/100x100' }} />
              <Text>{item}</Text>
            </TouchableOpacity>
          ))}
        </ScrollView>
      </View>
    </ScrollView>
  );
};

const BookingsScreen = () => <View style={styles.screen}><Text>Bookings Screen</Text></View>;
const MapsScreen = () => <View style={styles.screen}><Text>Maps Screen</Text></View>;
const ChatScreen = () => <View style={styles.screen}><Text>Chat Screen</Text></View>;
const ProfileScreen = () => <View style={styles.screen}><Text>Profile Screen</Text></View>;

const Tab = createBottomTabNavigator();

export default function Appointment() {
  return (
    <NavigationContainer>
      <Tab.Navigator screenOptions={{ headerShown: false }}>
        <Tab.Screen name="Home" component={HomeScreen} options={{ tabBarIcon: () => <Icon name="home-outline" size={24} /> }} />
        <Tab.Screen name="Bookings" component={BookingsScreen} options={{ tabBarIcon: () => <Icon name="calendar-outline" size={24} /> }} />
        <Tab.Screen name="Maps" component={MapsScreen} options={{ tabBarIcon: () => <Icon name="map-outline" size={24} /> }} />
        <Tab.Screen name="Chat" component={ChatScreen} options={{ tabBarIcon: () => <Icon name="chatbubble-outline" size={24} /> }} />
        <Tab.Screen name="Profile" component={ProfileScreen} options={{ tabBarIcon: () => <Icon name="person-outline" size={24} /> }} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16, backgroundColor: '#fff' },
  header: { flexDirection: 'row', alignItems: 'center', marginBottom: 20 },
  profileImage: { width: 50, height: 50, borderRadius: 25, marginRight: 10 },
  greeting: { fontSize: 16, color: '#000' },
  username: { fontSize: 16, fontWeight: 'bold', marginLeft: 5 },
  icon: { marginLeft: 'auto' },
  searchBar: { flexDirection: 'row', alignItems: 'center', padding: 10, borderWidth: 1, borderRadius: 10, marginBottom: 20 },
  searchInput: { flex: 1, marginLeft: 10 },
  banner: { backgroundColor: '#d9fdd3', padding: 20, borderRadius: 10, flexDirection: 'row', alignItems: 'center', marginBottom: 20 },
  bannerImage: { width: 50, height: 50, borderRadius: 25, marginRight: 20 },
  bannerText: { fontSize: 16, flex: 1 },
  bannerButton: { backgroundColor: '#4caf50', padding: 10, borderRadius: 5 },
  bannerButtonText: { color: '#fff', textAlign: 'center' },
  sectionTitle: { fontSize: 18, fontWeight: 'bold', marginBottom: 10 },
  categories: { flexDirection: 'row', justifyContent: 'space-around', marginBottom: 20 },
  categoryItem: { alignItems: 'center' },
  serviceCard: { width: 150, padding: 10, backgroundColor: '#f0f0f0', borderRadius: 10, marginRight: 10 },
  serviceImage: { width: '100%', height: 80, borderRadius: 10 },
  screen: { flex: 1, justifyContent: 'center', alignItems: 'center' },
});
