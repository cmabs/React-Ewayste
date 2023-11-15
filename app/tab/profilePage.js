import * as React from 'react';
import { StyleSheet, View, Text, TextInput, TouchableOpacity, ScrollView, SafeAreaView, Image } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { useState, useEffect } from 'react';
import { db } from '../../firebase_config';
import { doc, getDoc } from 'firebase/firestore';

export default function Profile({ navigation }) {
  const [residentInfo, setResidentInfo] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchUserInfo = async () => {
      try {
        const userId = ' id: doc.id';

        const userDocRef = doc(db, 'users', userId);
        const userDocSnapshot = await getDoc(userDocRef);

        if (userDocSnapshot.exists()) {
          const data = userDocSnapshot.data();

          if (data.accountType === 'Resident') {
            const info = {
              username: data.username,
              name: `${data.firstname} ${data.lastname}`,
              province: data.province,
              municipality: data.municipality,
              phoneNumber: data.contactNo,
            };
            setResidentInfo(info);
          } else {
            console.log('User data not found.');
          }
        } else {
          console.log('User document not found.');
        }
      } catch (error) {
        console.error('Error fetching user info:', error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchUserInfo();
  }, []);

  return (
    <>
      <TouchableOpacity
        style={{ position: 'absolute', right: 20, top: 31, zIndex: 99 }}
        onPress={() => {
          navigation.navigate('home');
        }}
      >
        <Ionicons name="home" style={{ fontSize: 35, color: 'rgb(81,175,91)' }} />
      </TouchableOpacity>
      <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
        <SafeAreaView style={styles.container}>
          <Text style={styles.title}>PROFILE</Text>
          <View style={styles.containerPfp}>
            <Ionicons name="person-outline" style={styles.placeholderPfp} />
          </View>
          <Text style={styles.usernamePfp}>
            {isLoading ? 'Loading...' : residentInfo?.username}
          </Text>
          <TouchableOpacity style={styles.editProfile}>
            <Text style={{ color: 'rgb(81,175,91)' }}>Edit Profile</Text>
            <Ionicons name="create-outline" style={{ color: 'rgb(81,175,91)' }} />
          </TouchableOpacity>
          <View style={styles.containerFrm}>
            <View style={styles.containerInfoDisplay}>
              <Text style={styles.containerInfoTxt}>Username </Text>
              <Text style={styles.containerInfoTxt}>Name </Text>
              <Text style={styles.containerInfoTxt}>Province </Text>
              <Text style={styles.containerInfoTxt}>Municipality </Text>
              <Text style={styles.containerInfoTxt}>
                Phone Number </Text>
            </View>
            <View style={styles.containerInfoDisplay}>
  <TextInput
    style={styles.input}
    placeholder="Username"
    editable={false}
    value={isLoading ? '' : residentInfo?.username}
  />
  <TextInput
    style={styles.input}
    placeholder="Name"
    editable={false}
    value={isLoading ? '' : residentInfo?.name}
  />
  <TextInput
    style={styles.input}
    placeholder="Province"
    editable={false}
    value={isLoading ? '' : residentInfo?.province}
  />
  <TextInput
    style={styles.input}
    placeholder="Municipality"
    editable={false}
    value={isLoading ? '' : residentInfo?.municipality}
  />
  <TextInput
    style={styles.input}
    placeholder="Phone Number"
    editable={false}
    value={isLoading ? '' : residentInfo?.phoneNumber}
  />
</View>
          </View>
        </SafeAreaView>
      </ScrollView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: 'white',
    justifyContent: 'flex-start',
    alignItems: 'center',
    paddingBottom: 60,
  },
  containerBtn: {
    top: 210,
    gap: 10,
  },
  containerFrm: {
    position: 'absolute',
    width: 330,
    justifyContent: 'center',
    alignItems: 'flex-start',
    top: 290,
    overflow: 'hidden',
    flexDirection: 'row',
    gap: 20,
  },
  containerInfoTxt: {
    height: 40,
    marginVertical: 5,
    textAlignVertical: 'center',
    textAlign: 'right',
    color: 'rgba(113, 112, 108, 1)',
  },
  containerInfoDisplay: {
    gap: 10,
  },
  title: {
    position: 'absolute',
    top: 30,
    fontWeight: '700',
    fontSize: 25,
    color: 'rgba(113, 112, 108, 1)',
  },
  input: {
    height: 40,
    width: 200,
    paddingVertical: 0,
    paddingLeft: 10,
    backgroundColor: 'rgb(189,227,124)',
    borderRadius: 10,
    marginVertical: 5,
    color: 'rgba(45, 105, 35, 1)',
  },

  containerPfp: {
    position: 'absolute',
    top: 100,
    width: 110,
    height: 110,
    backgroundColor: '#D6D6D8',
    borderRadius: 55,
    borderWidth: 2,
    borderColor: 'rgb(81,175,91)',
    overflow: 'hidden',
    justifyContent: 'center',
    alignItems: 'center',
  },
  placeholderPfp: {
    fontSize: 70,
    color: 'white',
  },
  usernamePfp: {
    position: 'absolute',
    top: 215,
    fontSize: 20,
    fontWeight: '500',
    color: 'rgba(113, 112, 108, 1)',
  },
  editProfile: {
    position: 'absolute',
    top: 245,
    flexDirection: 'row',
    gap: 5,
    alignItems: 'center',
  },
});
