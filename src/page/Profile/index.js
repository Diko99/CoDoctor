import React, {useEffect, useState} from 'react';
import {StyleSheet, View} from 'react-native';
import {SecondHeader, AddPhoto, List} from '../../components';
import {colors, getData} from '../../utils';
import {listMenuProfile, DummyUser1} from '../../assets';

const Profile = ({navigation, route}) => {
  const data = route.params;
  console.log(data);
  return (
    <View style={styles.container}>
      <SecondHeader title="Profile" onPress={() => navigation.goBack()} />
      <View style={styles.content}>
        <AddPhoto
          title={profile.fullName}
          desc="{profile.profession}"
          photo="{profile.photo}"
          disabled
          type="profile"
        />
      </View>
      <View style={styles.list}>
        {listMenuProfile.map(item => {
          const goTo = () => {
            item.title === 'Edit Profile' && navigation.navigate('EditProfile');
            item.title === 'Languages' && navigation.navigate('MainScreen');
            item.title === 'Give Us Rated' && navigation.navigate('MainScreen');
            item.title === 'Sign Out' && navigation.navigate('Login');
          };
          return (
            <List
              key={item.id}
              title={item.title}
              desc={item.desc}
              type={item.type}
              onPress={() => goTo()}
            />
          );
        })}
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
    marginTop: -50,
    backgroundColor: colors.white,
  },
});
