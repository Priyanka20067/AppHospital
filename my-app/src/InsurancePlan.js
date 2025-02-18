import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Alert } from 'react-native';
import Icon from "react-native-vector-icons/Ionicons";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

const InsurancePlan = ({ navigation }) => {
  const [selectedPlan, setSelectedPlan] = useState('');

  const insurancePlans = [
    'HDFC ERGO ',
    'Care Health Insurance ',
    'Aditya Birla Health Insurance  ',
    'ICICI Lombard  ',
    'Others ',
    'None ',
  ];

  const handleSubmit = () => {
    if (selectedPlan) {
      Alert.alert('Selected Plan',` You have selected: ${selectedPlan}`);
      navigation.navigate("InsurancePlanStack");

    } else {
      Alert.alert('Error', 'Please select an insurance plan.');
    }
  };

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Icon name="arrow-back-outline" size={hp(3)} color="#333" />
        </TouchableOpacity>
        <TouchableOpacity>
          <Icon name="search-outline" size={hp(3)} color="#333" />
        </TouchableOpacity>
      </View>

      <Text style={styles.title}>Insurance Plan</Text>
      <Text style={styles.subtitle}>Select your Insurance Plan</Text>

      {insurancePlans.map((plan, index) => (
        <TouchableOpacity
          key={index}
          style={[
            styles.option,
            selectedPlan === plan && styles.selectedOption,
          ]}
          onPress={() => setSelectedPlan(plan)}
        >
          <View
            style={[
              styles.radioCircle,
              selectedPlan === plan && styles.selectedRadioCircle,
            ]}
          />
          <Text style={styles.optionText}>{plan}</Text>
        </TouchableOpacity>
      ))}

      <TouchableOpacity style={styles.submitButton} onPress={handleSubmit}>
        <Text style={styles.submitButtonText}>Submit</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: wp(5),
    paddingTop: hp(2),
  },
  // Header Styles
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: wp(4),
    paddingTop: hp(3),
    paddingBottom: hp(2),
    backgroundColor: "#FFF",
  },
  title: {
    fontSize: hp(4.5),
    fontWeight: 'bold',
    marginBottom: hp(2),
    textAlign: 'center',
  },
  subtitle: {
    fontSize: hp(2.9),
    color: '#555',
    marginBottom: hp(2),
    textAlign: 'center',
  },
  option: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f9f9f9',
    borderRadius: wp(10),
    paddingVertical: hp(2),
    paddingHorizontal: wp(4),
    marginBottom: hp(1.5),
    borderWidth: 1,
    borderColor: '#ddd',
  },
  selectedOption: {
    borderColor: '#28a745',
    backgroundColor: '#f0fff0',
  },
  radioCircle: {
    width: wp(5),
    height: wp(5),
    borderRadius: wp(2.5),
    borderWidth: 1,
    borderColor: '#28a745',
    marginRight: wp(3),
  },
  selectedRadioCircle: {
    backgroundColor: '#28a745',
  },
  optionText: {
    fontSize: hp(2.2),
  },
  submitButton: {
    backgroundColor: '#28a745',
    paddingVertical: hp(2),
    borderRadius: wp(6),
    alignItems: 'center',
    marginTop: hp(2),
    alignSelf: 'center',
    width: wp(70),
  },
  submitButtonText: {
    color: '#fff',
    fontSize: hp(2.2),
    fontWeight: 'bold',
  },
});

export default InsurancePlan;