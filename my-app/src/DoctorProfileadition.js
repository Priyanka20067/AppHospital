import React from 'react';
import { View, Text, StyleSheet, Image, ScrollView, TouchableOpacity } from 'react-native';
import Icon from "react-native-vector-icons/Ionicons";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

const DoctorProfileadition = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <ScrollView style={styles.container}>
        {/* Header Section */}
        <View style={styles.header}>
          <Image
            source={require('../assets/image/dr.png')}
            style={styles.profileImage}
          />
          <View>
            <Text style={styles.name}>Dr. Abcde Fghi</Text>
            <Text style={styles.specialization}>Cardiologist/Therapy</Text>
            <Text style={styles.experience}>30+ Years of experience in Cardiovascular surgery</Text>
            <Text style={styles.rating}>⭐ 150+ Reviews</Text>
          </View>
        </View>

        {/* Tags Section */}
        <View style={styles.tags}>
          <Text style={styles.tag}>Cardiology</Text>
          <Text style={styles.tag}>Surgery</Text>
          <Text style={styles.tag}>Therapy</Text>
        </View>

        {/* About Section */}
        <Text style={styles.sectionTitle}>About The Doctor:</Text>
        <Text style={styles.description}>
          A doctor's biography can include their professional experience, achievements, and areas of specialization. A doctor's biography can also include personal information, such as their interests and hobbies.
        </Text>

        {/* Icons Section */}
        <View style={styles.iconsRow}>
          <View>
            <Image style={styles.image} source={require("../assets/image/education2.png")} />
            <Text style={styles.icon}> Education</Text>
          </View>
          <View>
            <Image style={styles.image} source={require("../assets/image/awards.png")} />
            <Text style={styles.icon}> Awards</Text>
          </View>
          <View>
            <Image style={styles.image} source={require("../assets/image/surgeries.png")} />
            <Text style={styles.icon}>Surgeries</Text>
          </View>
          <View>
            <Image style={styles.image} source={require("../assets/image/reviews.png")} />
            <Text style={styles.icon}> Reviews</Text>
          </View>
        </View>

        {/* Education Section */}
        <Text style={styles.sectionTitle}>Education:</Text>
        <View style={styles.education}>
          <Text>RTS Medical College & Research Center</Text>
          <Text>MD Cardiology</Text>
          <Text>20XX-20XX</Text>
        </View>
        <View style={styles.education}>
          <Text>RTS Medical College & Research Center</Text>
          <Text>MBBS</Text>
          <Text>20XX-20XX</Text>
        </View>

        {/* Awards Section */}
        <Text style={styles.sectionTitle}>Awards:</Text>
        <View style={styles.awards}>
          <Text>• Award for best intern at XYZ Hospital, Dehradun</Text>
          <Text>• Gold Medal for Heart Surgery at XYZ Hospital</Text>
          <Text>• MD Cardiology Gold Medalist</Text>
        </View>

        {/* Procedures Section */}
        <Text style={styles.sectionTitle}>Procedures:</Text>
        <View style={styles.procedures}>
          <Text>✔️ Coronary angioplasty and stent implantation</Text>
          <Text>✔️ Thrombolytic Therapy</Text>
          <Text>✔️ Artificial pacemaker surgery</Text>
          <Text>✔️ Heart valve surgery</Text>
        </View>

        {/* Working Hours Section */}
        <Text style={styles.sectionTitle}>Working Hours:</Text>
        <Text>Mon-Fri: 8:00 am - 6:00 pm</Text>
        <Text>Sat-Sun: 9:00 am - 5:00 pm</Text>

        {/* Details Section */}
        <Text style={styles.sectionTitle}>Details:</Text>
        <Text>Hospital/Clinic: <Text style={styles.inner}>ABC Hospital</Text></Text>
        <Text>Specialization: <Text style={styles.inner}> Cardiology</Text></Text>
        <Text>Years of Experience: <Text style={styles.inner}>30+ in cardio</Text></Text>
        <Text>Phone Number: <Text style={styles.inner}>+91 00000 00000</Text></Text>

        {/* Fee Section */}
        <Text style={styles.fee}>Fee: Rs. 800/-</Text>

        {/* Book Appointment Button */}
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Book an appointment</Text>
        </TouchableOpacity>
      </ScrollView>

      {/* Bottom Navigation Bar */}
      <View style={styles.navbar}>
        <TouchableOpacity style={styles.navItem} onPress={() => navigation.navigate('Home')}>
          <Icon name="home-outline" size={wp(6)} color="#333" />
          <Text style={styles.navLabel}>Home</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem} onPress={() => navigation.navigate('BookingStack')}>
          <Icon name="bookmark-outline" size={wp(6)} color="#333" />
          <Text style={styles.navLabel}>Bookings</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem} onPress={() => navigation.navigate('MapStack')}>
          <Icon name="map-outline" size={wp(6)} color="#333" />
          <Text style={styles.navLabel}>Maps</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem} onPress={() => navigation.navigate('Chat')}>
          <Icon name="chatbubble-outline" size={wp(6)} color="#333" />
          <Text style={styles.navLabel}>Chat</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem} onPress={() => navigation.navigate('Profile')}>
          <Icon name="person-outline" size={wp(6)} color="#333" />
          <Text style={styles.navLabel}>Profile</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: wp(4),
  },
  header: {
    flexDirection: 'row',
    marginBottom: hp(2),
  },
  profileImage: {
    width: wp(25),
    height: wp(25),
    borderRadius: wp(12.5),
    marginRight: wp(4),
  },
  name: {
    fontSize: wp(5),
    fontWeight: 'bold',
  },
  specialization: {
    fontSize: wp(4),
    color: 'gray',
  },
  experience: {
    fontSize: wp(3.5),
    marginTop: hp(0.5),
  },
  rating: {
    fontSize: wp(3.5),
    marginTop: hp(0.5),
  },
  tags: {
    flexDirection: 'row',
    marginBottom: hp(2),
  },
  tag: {
    backgroundColor: '#e0e0e0',
    paddingHorizontal: wp(2.5),
    paddingVertical: hp(0.5),
    borderRadius: wp(7.5),
    marginRight: wp(2),
    fontSize: wp(3.5),
  },
  sectionTitle: {
    fontSize: wp(4.5),
    fontWeight: 'bold',
    marginBottom: hp(1),
  },
  inner: {
    textAlign: 'right',
  },
  description: {
    fontSize: wp(3.5),
    color: 'gray',
    marginBottom: hp(2),
  },
  iconsRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: hp(2),
  },
  image: {
    height: wp(10),
    width: wp(10),
  },
  icon: {
    fontSize: wp(3.5),
    color: 'gray',
  },
  education: {
    marginBottom: hp(1),
  },
  awards: {
    marginBottom: hp(2),
  },
  procedures: {
    marginBottom: hp(2),
  },
  fee: {
    fontSize: wp(4.5),
    fontWeight: 'bold',
    marginVertical: hp(2),
  },
  button: {
    backgroundColor: '#4caf50',
    paddingVertical: hp(1.5),
    borderRadius: wp(2),
    alignItems: 'center',
    marginBottom: hp(10),
  },
  buttonText: {
    color: '#fff',
    fontSize: wp(4),
    fontWeight: 'bold',
  },
  navbar: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    paddingVertical: hp(1.5),
    backgroundColor: '#FFF',
    borderTopWidth: 1,
    borderTopColor: '#E0E0E0',
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
  },
  navItem: {
    alignItems: 'center',
  },
  navLabel: {
    fontSize: wp(3),
    color: '#333',
  },
});

export default DoctorProfileadition;