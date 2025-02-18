import React, { useState } from "react";
   import { View, Text, Image, TouchableOpacity, StyleSheet, ScrollView, Dimensions } from "react-native";
   import { Calendar } from "react-native-calendars";
   import Icon from "react-native-vector-icons/Ionicons";
   import { widthPercentageToDP as wp, heightPercentageToDP as hp } from "react-native-responsive-screen";

   const BookingAppointment = ({ navigation }) => {
     const [selectedDay, setSelectedDay] = useState(null);
     const [selectedTime, setSelectedTime] = useState(null);
     const [selectedPeriod, setSelectedPeriod] = useState("Afternoon");

     const timeSlots = {
       Morning: ["8:00 am", "9:00 am", "10:00 am", "11:00 am"],
       Afternoon: ["1:00 pm", "2:00 pm", "3:00 pm", "4:00 pm", "5:00 pm"],
       Evening: ["6:00 pm", "7:00 pm", "8:00 pm"],
     };

     const handleConfirmation = () => {
       if (selectedDay && selectedTime) {
         alert(`Appointment confirmed on ${selectedDay} at ${selectedTime}`);
         navigation.navigate("AppointmentStack");
       } else {
         alert("Please select a date and time!");
       }
     };

     return (
       <ScrollView style={styles.container}>
         <View style={styles.header}>
           <TouchableOpacity onPress={() => navigation.goBack()}>
             <Icon name="arrow-back-outline" size={wp(6)} color="#333" />
           </TouchableOpacity>
           <TouchableOpacity>
             <Icon name="search-outline" size={wp(6)} color="#333" />
           </TouchableOpacity>
         </View>

         <View style={styles.profileContainer}>
           <Image
             source={require('../assets/image/dr.png')}
             style={styles.image}
           />
           <View style={styles.colmns}>
             <Text style={styles.name}>Dr. Abcde Fghi</Text>
             <Text style={styles.specialization}>Cardiologist/Therapy</Text>
             <View style={styles.experiencesub}>
               <Text style={styles.experience}>30+ Years of experience in Cardiovascular surgery</Text>
             </View>
             <Text style={styles.rating}>⭐ ⭐ ⭐ ⭐ ⭐ [150+]</Text>
           </View>
         </View>

         <Text style={styles.sectionTitle}>Make an Appointment:</Text>
         <View style={styles.calendar}>
           <Calendar
             markedDates={{
               [selectedDay]: { selected: true, marked: true, selectedColor: "#6c9d08" },
             }}
             onDayPress={(day) => setSelectedDay(day.dateString)}
             theme={{
               selectedDayBackgroundColor: "#6c9d08",
               selectedDayTextColor: "#ffffff",
             }}
           />
         </View>

         <Text style={styles.sectionTitle}>Choose Time:</Text>
         <View style={styles.timePeriods}>
           {Object.keys(timeSlots).map((period) => (
             <TouchableOpacity
               key={period}
               style={[
                 styles.periodButton,
                 selectedPeriod === period && styles.selectedPeriod,
               ]}
               onPress={() => setSelectedPeriod(period)}
             >
               <Text style={styles.periodText}>{period}</Text>
             </TouchableOpacity>
           ))}
         </View>

         <View style={styles.timeSlots}>
           {timeSlots[selectedPeriod].map((time, index) => (
             <TouchableOpacity
               key={index}
               style={[
                 styles.timeSlot,
                 selectedTime === time && styles.selectedTime,
               ]}
               onPress={() => setSelectedTime(time)}
             >
               <Text style={styles.timeText}>{time}</Text>
             </TouchableOpacity>
           ))}
         </View>

         <TouchableOpacity style={styles.confirmButton} onPress={handleConfirmation}>
           <Text style={styles.confirmText}>Confirm Booking</Text>
         </TouchableOpacity>
       </ScrollView>
     );
   };

   const styles = StyleSheet.create({
     container: {
       flex: 1,
       backgroundColor: "#fff",
       padding: wp(4),
     },
     header: {
       flexDirection: "row",
       alignItems: "center",
       justifyContent: "space-between",
       padding: wp(4),
       backgroundColor: "#FFF",
       marginTop: hp(2),
     },
     profileContainer: {
       alignItems: 'center',
       marginBottom: hp(2),
       flexDirection: 'row',
       marginTop: hp(3),
       backgroundColor: '#fff',
     },
     colmns: {
       marginLeft: wp(5),
     },
     image: {
       width: wp(30),
       height: wp(30),
       borderRadius: wp(15),
       marginBottom: hp(1),
     },
     name: {
       fontSize: wp(7),
       fontWeight: 'bold',
       color: '#333',
     },
     specialization: {
       fontSize: wp(4),
       color: '#666',
     },
     experience: {
       fontSize: wp(3.5),
       color: '#666',
       marginVertical: hp(0.5),
     },
     experiencesub: {
       width: wp(50),
     },
     rating: {
       fontSize: wp(3.5),
       color: '#FFD700',
     },
     sectionTitle: {
       fontSize: wp(5),
       fontWeight: "bold",
       marginVertical: hp(1),
     },
     calendar: {
       marginBottom: hp(2),
     },
     timePeriods: {
       flexDirection: "row",
       justifyContent: "center",
       marginBottom: hp(1),
     },
     periodButton: {
       padding: wp(2),
       marginHorizontal: wp(1),
       backgroundColor: "#f0f0f0",
       borderRadius: wp(1),
     },
     selectedPeriod: {
       backgroundColor: "#6c9d08",
     },
     periodText: {
       color: "black",
       fontSize: wp(3.5),
     },
     timeSlots: {
       flexDirection: "row",
       flexWrap: "wrap",
       justifyContent: "center",
       marginBottom: hp(2),
     },
     timeSlot: {
       padding: wp(2),
       margin: wp(1),
       backgroundColor: "#f0f0f0",
       borderRadius: wp(1),
     },
     selectedTime: {
       backgroundColor: "#6c9d08",
     },
     timeText: {
       color: "black",
       fontSize: wp(3.5),
     },
     confirmButton: {
       backgroundColor: "#6c9d08",
       padding: hp(2),
       borderRadius: wp(5),
       alignItems: "center",
       marginVertical: hp(2),
     },
     confirmText: {
       color: "white",
       fontSize: wp(4),
       fontWeight: "bold",
     },
   });

   export default BookingAppointment;