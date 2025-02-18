import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  FlatList,
  ScrollView,
} from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from "react-native-responsive-screen";

const doctors = Array(7).fill({
  id: 1,
  name: "Dr. Abcde Fghi",
  specialization: "Cardiologist/Therapy",
  experience: "30+ Years of experience in Cardiovascular surgery",
  rating: "⭐ ⭐ ⭐ ⭐ ⭐ [150+]",
  fee: "Rs. 800/-",
});

const DoctorList = ({ navigation }) => {
  const renderDoctor = ({ item }) => (
    <View style={styles.card}>
      <Image source={require("../assets/image/dr.png")} style={styles.image} />
      <View style={styles.info}>
        <Text style={styles.name}>{item.name}</Text>
        <Text style={styles.specialization}>{item.specialization}</Text>
        <Text style={styles.experience}>{item.experience}</Text>
        <Text style={styles.rating}>{item.rating}</Text>
      </View>
      <View style={styles.action}>
        <Text style={styles.fee}>{item.fee}</Text>
        <TouchableOpacity onPress={() => navigation.navigate('DoctorStack')}>
          <Text style={styles.bookButtonText}>Book Now</Text>
        </TouchableOpacity>
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      <ScrollView style={styles.scrollContainer}>
        {/* Header */}
        <View style={styles.header}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Icon name="arrow-back-outline" size={hp(3)} color="#333" />
          </TouchableOpacity>
          <TouchableOpacity>
            <Icon name="search-outline" size={hp(3)} color="#333" />
          </TouchableOpacity>
        </View>
        <Text style={styles.title}>Find Your Doctor</Text>

        {/* Filters */}
        <View style={styles.filters}>
          <TouchableOpacity style={styles.filterButtonActive}>
            <Text style={styles.filterTextActive}>Experience</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.filterButton}>
            <Text style={styles.filterText}>Most Qualified</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.filterButtonFee}>
            <Text style={styles.filterText}>Fee</Text>
          </TouchableOpacity>
        </View>

        {/* Selected Category */}
        <View style={styles.selectedCategory}>
          <Text style={styles.selectedText}>Selected Cardiologist:</Text>
          <Image source={require('../assets/image/Group12.png')} style={styles.groupImage} />
        </View>

        {/* Doctor List */}
        <FlatList
          data={doctors}
          renderItem={renderDoctor}
          keyExtractor={(item, index) => index.toString()}
          style={styles.list}
          showsVerticalScrollIndicator={false}
        />
      </ScrollView>
        {/* Bottom Navigation */}
               <View style={styles.navBar}>
                 {[
                   { name: 'Home', icon: require('../assets/image/house.png'), route: 'Home' },
                   { name: 'Bookings', icon: require('../assets/image/books.png'), route: 'BookingStack' },
                   { name: 'Map', icon: require('../assets/image/location.png'), route: 'MapStack' },
                   { name: 'Chat', icon: require('../assets/image/message.png'), route: 'Chat' },
                   { name: 'Profile', icon: require('../assets/image/photo.png'), route: 'Profile' },
                 ].map((item, index) => (
                   <TouchableOpacity key={index} style={styles.navButton} onPress={() => navigation.navigate(item.route)}>
                     <Image source={item.icon} style={styles.navIcon} />
                     <Text style={styles.navButtonText}>{item.name}</Text>
                   </TouchableOpacity>
                 ))}
               </View>
      
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#FFF" },
  scrollContainer: { flex: 1 },

  // Header
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    padding: wp(4),
    backgroundColor: "#FFF",
  },
  title: {
    fontSize: hp(3),
    fontWeight: "bold",
    color: "#333",
    textAlign: "center",
    marginVertical: hp(1.5),
  },

  // Filters
  filters: {
    flexDirection: "row",
    justifyContent: "center",
    padding: hp(1.5),
    alignItems: "center",
  },
  filterButton: {
    backgroundColor: "#E0E0E0",
    padding: hp(1),
    borderRadius: wp(6),
    width: wp(30),
    marginHorizontal: wp(2),
    alignItems: "center",
  },
  filterButtonFee: {
    backgroundColor: "#E0E0E0",
    padding: hp(1),
    borderRadius: wp(6),
    width: wp(18),
    marginHorizontal: wp(2),
    alignItems: "center",
  },
  filterButtonActive: {
    backgroundColor: "#4CAF50",
    padding: hp(1),
    borderRadius: wp(6),
    marginHorizontal: wp(2),
    alignItems: "center",
    width: wp(30),
  },
  filterText: { color: "#666", fontSize: hp(1.5) },
  filterTextActive: { color: "#FFF", fontSize: hp(1.5) },

  // Selected Category
  selectedCategory: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    width: wp(65),
    alignSelf: "center",
    marginVertical: hp(1),
  },
  selectedText: { fontSize: hp(2.3), fontWeight: "bold", color: "#333" },
  groupImage: { height: hp(4.8), width: wp(8) },

  // Doctor List
  list: { padding: wp(4) },
  card: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#FFF",
    padding: wp(4),
    borderWidth: 1,
    borderColor: "#E0E0E0",
    width: wp(92),
    alignSelf: "center",
    marginBottom: hp(1),
  },
  image: { width: wp(15), height: wp(15), borderRadius: wp(7.5), marginRight: wp(3) },
  info: { flex: 1 },
  name: { fontSize: hp(2.2), fontWeight: "bold", color: "#333" },
  specialization: { fontSize: hp(1.8), color: "#666" },
  experience: { fontSize: hp(1.6), color: "#666" },
  rating: { fontSize: hp(1.6), color: "#FFD700" },
  action: { alignItems: "flex-end" },
  fee: { fontSize: hp(2.2), fontWeight: "bold", color: "green", marginBottom: hp(0.5) },
  bookButtonText: {
    backgroundColor: "#4CAF50",
    paddingVertical: hp(1.5),
    paddingHorizontal: wp(5),
    borderRadius: hp(5),
    color: "#FFF",
    fontSize: hp(2),
    fontWeight: "bold",
  },

  // Navigation Bar
  navBar: {
    flexDirection: "row",
    justifyContent: "space-around",
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: "#fff",
    borderTopWidth: 1,
    borderTopColor: "#ccc",
    paddingVertical: hp(1.5),
  },
  navButton: { alignItems: "center" },
  navIcon: { width: hp(3), height: hp(3), resizeMode: "contain" },
  navButtonText: { fontSize: hp(1.6), color: "#000", marginTop: hp(0.5) },
});

export default DoctorList;