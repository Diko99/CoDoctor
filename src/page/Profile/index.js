import React from 'react';
import {StyleSheet, View} from 'react-native';
import {SecondHeader, AddPhoto, List} from '../../components';
import {colors} from '../../utils';

const Profile = ({navigation}) => {
  return (
    <View style={styles.container}>
      <SecondHeader title="Profile" />
      <View style={styles.content}>
        <AddPhoto
          title="Andiko Mahendra"
          desc="Frontend Developers"
          type="profile"
        />
      </View>
      <View style={styles.list}>
        <List
          desc="Last Update Yesterday"
          type="profile"
          title="Edit Profile"
          onPress={() => navigation.navigate('EditProfile')}
        />
        <List desc="Last Update Yesterday" type="profile" title="Languages" />
        <List
          desc="Last Update Yesterday"
          type="profile"
          title="Give Us Rated"
        />
        <List
          desc="Last Update Yesterday"
          type="profile"
          title="Sign Out"
          onPress={() => navigation.navigate('GetStarted')}
        />
      </View>
    </View>
  );
};

export default Profile;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
  content: {
    flex: 1,
    marginTop: -10,
  },
  list: {
    flex: 1,
    padding: 16,
    marginTop: -60,
    backgroundColor: colors.white,
  },
});
