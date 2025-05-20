import React, { useState } from 'react';
import { View, Text, Image, ScrollView, TouchableOpacity, StyleSheet, TextInput } from 'react-native';
import { Icon, Button } from 'react-native-elements';
import { launchImageLibrary } from 'react-native-image-picker';

const ProfileScreen = ({ navigation }) => {
  const [profileImage, setProfileImage] = useState('https://th.bing.com/th?id=OIP.WCKPepSECCx3q_Z7nTiP3QHaE8&w=306&h=204&c=8&rs=1&qlt=90&r=0&o=6&pid=3.1&rm=2');
  const [address, setAddress] = useState('123 Main St, City');
  const [mobileNumber, setMobileNumber] = useState('123-456-7890');
  const [email, setEmail] = useState('naveena@example.com');
  const [isEditing, setIsEditing] = useState(false);

  const handleImagePick = () => {
    launchImageLibrary(
      {
        mediaType: 'photo',
        includeBase64: false,
      },
      (response) => {
        if (response.didCancel) {
          console.log('User cancelled image picker');
        } else if (response.error) {
          console.log('ImagePicker Error: ', response.error);
        } else {
          setProfileImage(response.assets[0].uri); // Update the profile image URI
        }
      }
    );
  };

  const toggleEdit = () => {
    setIsEditing(!isEditing);
  };

  return (
    <ScrollView style={styles.container}>
      {/* Header Section */}
      <View style={styles.header}>
        <View style={styles.profileHeader}>
          <TouchableOpacity onPress={handleImagePick}>
            <Image source={{ uri: profileImage }} style={styles.profileImage} />
          </TouchableOpacity>
          <View style={styles.userInfo}>
            <Text style={styles.userName}>Naveena</Text>
            <Text style={styles.smartCoins}>SmartCoins: 0</Text>
          </View>
        </View>
        <View style={styles.helpLanguage}>
          <Button title="Help Centre" type="outline" buttonStyle={styles.buttonStyle} />
          <Button title="Change Language" type="outline" buttonStyle={styles.buttonStyle} />
        </View>
      </View>

      {/* Editable User Information */}
      <View style={styles.section}>
        <Text style={styles.label}>Address:</Text>
        <TextInput
          style={styles.input}
          value={address}
          onChangeText={setAddress}
          editable={isEditing}
        />
      </View>

      <View style={styles.section}>
        <Text style={styles.label}>Mobile Number:</Text>
        <TextInput
          style={styles.input}
          value={mobileNumber}
          onChangeText={setMobileNumber}
          editable={isEditing}
        />
      </View>

      <View style={styles.section}>
        <Text style={styles.label}>Email ID:</Text>
        <TextInput
          style={styles.input}
          value={email}
          onChangeText={setEmail}
          editable={isEditing}
        />
      </View>

      <TouchableOpacity style={styles.editButton} onPress={toggleEdit}>
        <Text style={styles.editButtonText}>{isEditing ? 'Save' : 'Edit'}</Text>
      </TouchableOpacity>

      {/* Balance and Shared Products */}
      <View style={styles.section}>
        <TouchableOpacity style={styles.listItem}>
          <Icon name="wallet" type="entypo" />
          <Text style={styles.listText}>Balance: ₹0</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.listItem}>
          <Icon name="share" type="entypo" />
          <Text style={styles.listText}>Shared Products</Text>
        </TouchableOpacity>
      </View>

      {/* Other Sections */}
      <View style={styles.section}>
        <TouchableOpacity style={styles.listItem}>
          <Icon name="store" type="material" />
          <Text style={styles.listText}>Followed Shops</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.listItem}>
          <Icon name="settings" type="material" />
          <Text style={styles.listText}>Settings</Text>
        </TouchableOpacity>
      </View>

      {/* Footer - Logout */}
      <View style={styles.footer}>
        <TouchableOpacity style={styles.listItem} onPress={() => navigation.navigate('SignupScreen')}>
          <Icon name="logout" type="material" />
          <Text style={styles.listText}>Logout</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  header: {
    flexDirection: 'column',
    alignItems: 'flex-start',
    padding: 10,
    backgroundColor: '#f8f9fa',
    borderRadius: 10,
    marginBottom: 15,
  },
  profileHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
    marginBottom: 10,
  },
  profileImage: {
    width: 80,
    height: 80,
    borderRadius: 40,
    marginRight: 10,
  },
  userInfo: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  userName: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  smartCoins: {
    fontSize: 14,
    color: '#888',
  },
  helpLanguage: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    marginTop: 10,
  },
  buttonStyle: {
    marginHorizontal: 5,
  },
  section: {
    marginVertical: 10,
    padding: 10,
    backgroundColor: '#fff',
    borderRadius: 10,
  },
  label: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  input: {
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,
    paddingLeft: 10,
  },
  editButton: {
    alignItems: 'center',
    padding: 10,
    backgroundColor: '#007BFF',
    borderRadius: 5,
    marginVertical: 10,
  },
  editButtonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  listItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  listText: {
    marginLeft: 10,
    fontSize: 16,
  },
  footer: {
    marginVertical: 20,
    padding: 10,
    backgroundColor: '#fff',
    borderRadius: 10,
  },
});

export default ProfileScreen;
