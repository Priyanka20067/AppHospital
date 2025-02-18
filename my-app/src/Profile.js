import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView } from 'react-native';
import Icon from "react-native-vector-icons/Ionicons";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

const Profile = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        {/* Header */}
        <View style={styles.header}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Icon name="arrow-back-outline" size={24} color="#333" />
          </TouchableOpacity>
          <TouchableOpacity>
            <Icon name="search-outline" size={24} color="#333" />
          </TouchableOpacity>
        </View>

        {/* Profile Section */}
        <View style={styles.profileContainer}>
          <Image
            source={require('../assets/image/dr.png')}
            style={styles.image}
          />
          <View style={styles.columns}>
            <Text style={styles.name}>Dr. Abcde Fghi</Text>
            <Text style={styles.specialization}>Cardiologist/Therapy</Text>
            <View style={styles.experienceSub}>
              <Text style={styles.experience}>30+ Years of experience in Cardiovascular surgery</Text>
            </View>
            <Text style={styles.rating}>⭐ ⭐ ⭐ ⭐ ⭐ [150+]</Text>
          </View>
        </View>

        {/* Tags Section */}
        <Text style={styles.tags}>Tags:</Text>
        <View style={styles.tagsContainer}>
          <Text style={styles.tag}>Cardiology</Text>
          <Text style={styles.tag}>Surgery</Text>
          <Text style={styles.tag}>Therapy</Text>
        </View>
          

        {/* Biography Section */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>About The Doctor:</Text>
          <Text style={styles.para}>
            A doctor's biography can include their professional experience, achievements, and areas
            of specialization. A doctor’s biography can also include personal information, such as
            their interests and hobbies.
          </Text>
        </View>
        <View style={styles.iconsRow}>
                <TouchableOpacity onPress={() => navigation.navigate('AditionStack')} >
                  <View style={styles.touch}>
                    <Image style={styles.line}  source={require('../assets/image/Line28.png')}/>
                    <Image  style={styles.imagecontent} source={require("../assets/image/education.png")}/>
                  </View>
                  <View style={styles.icontext}>
                    <Text style={styles.icon}> Education</Text>
                  </View>
                </TouchableOpacity>
                <TouchableOpacity >
                  <View style={styles.touch}>
                    <Image style={styles.line}  source={require('../assets/image/Line28.png')}/>
                    <Image  style={styles.imagecontent} source={require("../assets/image/awards.png")}/>
                  </View>
                  <View style={styles.icontext}>
                    <Text style={styles.icon}> Awards</Text>
                  </View>
                </TouchableOpacity>
                <TouchableOpacity >
                  <View style={styles.touch}>
                    <Image style={styles.line}  source={require('../assets/image/Line28.png')}/>
                    <Image  style={styles.imagecontent} source={require("../assets/image/surgeries.png")}/>
                  </View>
                  <View style={styles.icontext}>
                   <Text style={styles.icon}>Surgeries</Text>
                  </View>
                </TouchableOpacity>
               <TouchableOpacity >
                  <View style={styles.touch}>
                    <Image style={styles.line}  source={require('../assets/image/Line28.png')}/>
                    <Image  style={styles.imagecontent} source={require("../assets/image/reviews.png")}/>
                    <Image style={styles.line}  source={require('../assets/image/Line28.png')}/>
                  </View>
                  <View style={styles.icontext}>
                   <Text style={styles.icon}> Reviews</Text>
                  </View>
                </TouchableOpacity>
          </View>

        {/* Working Hours Section */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Working Hours:</Text>
          <View style={styles.innertext}>
             <Text style={styles.text}>Mon-Fri:  </Text>
            <Text style={styles.textline}>8:00 am - 6:00 pm</Text>
          </View> 
          <View style={styles.innertext}>
            <Text style={styles.text}>Sat-Sun:</Text>
            <Text style={styles.textline}> 9:00 am - 5:00 pm</Text>
          </View>
        </View>

        {/* Details Section */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Details:</Text>
          <View style={styles.innertext}>
            <Text style={styles.text}>Hospital/Clinic:</Text>
            <Text style={styles.textline}> ABC Hospital</Text>
          </View>
          <View style={styles.innertext}>
            <Text style={styles.text}>Specialization:</Text>
            <Text style={styles.textline}> Cardiology</Text>
          </View>
          <View style={styles.innertext}>
            <Text style={styles.text}>Years of Experience:</Text>
            <Text style={styles.textline}>30+ in cardio</Text>
          </View>
          <View style={styles.innertext}>
            <Text style={styles.text}>Phone Number:</Text>
            <Text style={styles.textline}> +91 00000 00000</Text>
          </View>
        </View>

        {/* Footer */}
        <View style={styles.footer}>
          <View style={styles.feese}>
            <Text style={styles.fee}>Fee:</Text>
            <Text style={styles.feetext}> Rs. 800/-</Text>
          </View>
          <TouchableOpacity onPress={() => navigation.navigate('ProfileStack')} style={styles.button}>
            <Text style={styles.buttonText}>Book an appointment</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>

       <View style={styles.navBar}>
              <TouchableOpacity style={styles.navButton} onPress={() => navigation.navigate('Home')}>
                <Image
                  source={require('../assets/image/house.png')}
                  style={styles.navIcon}
                />
                <Text style={styles.navButtonText}>Home</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.navButton} onPress={() => navigation.navigate('BookingStack')}>
                <Image
                  source={require('../assets/image/books.png')}
                  style={styles.navIcon}
                />
                <Text style={styles.navButtonText}>Bookings</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.navButton} onPress={() => navigation.navigate('MapStack')}>
                <Image
                  source={require('../assets/image/location.png')}
                  style={styles.navIcon}
                />
                <Text style={styles.navButtonText}>Map</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.navButton} onPress={() => navigation.navigate('Chat')}>
                <Image
                  source={require('../assets/image/message.png')}
                  style={styles.navIcon}
                />
                <Text style={styles.navButtonText}>Chat</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.navButton} onPress={() => navigation.navigate('Profile')}>
                <Image
                  source={require('../assets/image/photo.png')}
                  style={styles.navIcon}
                />
                <Text style={styles.navButtonText}>Profile</Text>
              </TouchableOpacity>
            </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    padding:wp('3%'),
  },
  scrollContent: {
    paddingBottom: hp('10%'),
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: wp('4%'),
    backgroundColor: 'white',
  },
  profileContainer: {
    alignItems: 'center',
    flexDirection: 'row',
    marginLeft: wp('5%'),
    marginTop: hp('2%'),
  },
  image: {
    width: wp('30%'),
    height: wp('30%'),
    borderRadius: wp('15%'),
    marginBottom: hp('1%'),
  },
  name: {
    fontSize: wp('6%'),
    fontWeight: 'bold',
    color: '#333',
    fontFamily: 'Poppins',
  },
  specialization: {
    fontSize: wp('4%'),
    color: '#000000',
    fontFamily: 'Poppins',
  },
  experience: {
    fontSize: wp('3.5%'),
    color: '#666',
    marginVertical: hp('0.5%'),
    fontFamily: 'Poppins',
  },
  rating: {
    fontSize: wp('4%'),
    color: '#FFD700',
  },
  tagsContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: hp('1%'),
  },
  tags:{
    fontWeight:'bold',
  },
  tag: {
    backgroundColor: 'white',
    borderWidth: 1,
    borderColor: 'black',
    padding: hp('1%'),
    borderRadius: wp('5%'),
    marginHorizontal: wp('1.5%'),
    fontSize: wp('3.5%'),
    width: wp('28%'),
    textAlign: 'center',
    fontFamily: 'Montserrat',
  },
  sectionTitle:{
    fontWeight:'bold',
  },
  para:{
   fontSize:hp('1.5%'),
   marginHorizontal:wp(2),
  },
  touch:{
    flexDirection:'row',
    alignItems:'center',
  },
  imagecontent:{
   width:wp('15%'),
   height:wp('15%'),
  },
  line:{
    width:wp('8%'),
  },
  iconsRow: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: hp('2%'),
  },
  icontext:{
    justifyContent:'space-between',
    alignItems:'center',
  },
  button: {
    backgroundColor: '#4CAF50',
    paddingVertical: hp('1.5%'),
    paddingHorizontal: wp('3%'),
    borderRadius: wp('5%'),
    width:wp('50%'),
    justifyContent:'center',
    marginVertical:wp('5%'),
    alignSelf:'center',
  },
  buttonText: {
    color: '#FFF',
    fontSize: wp('4.5%'),
    fontWeight: 'bold',
  },
  innertext:{
  flexDirection:'row',
  justifyContent:'space-between',
  paddingVertical:wp('1%')
  },
  feese:{
    flexDirection:'row',
  justifyContent:'space-between',
  },
  feetext:{
   color:'#4CAF50'
  },
  navBar: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: '#fff',
    borderTopWidth: 1,
    borderTopColor: '#ccc',
    paddingVertical: hp('1.5%'),
  },
  navIcon: {
    width: wp('6%'),
    height: wp('6%'),
    resizeMode: 'contain',
  },
  navButtonText: {
    fontSize: wp('3%'),
    color: '#000',
    marginTop: hp('0.5%'),
  },
});

export default Profile;
