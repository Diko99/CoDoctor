import React from 'react';
import {StyleSheet, View} from 'react-native';
import {SecondHeader, AddPhoto, List} from '../../components';
import {colors} from '../../utils';
import {listMenuProfile} from '../../assets';

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
        {listMenuProfile.map(item => {
          const slide = () => {
            item.title === 'Edit Profile' && navigation.navigate('EditProfile');
            item.title === 'Languages' && navigation.navigate('MainScreen');
            item.title === 'Give Us Rated' && navigation.navigate('MainScreen');
            item.title === 'Sign Out' && navigation.navigate('GetStarted');
          };
          return (
            <List
              key={item.id}
              title={item.title}
              desc={item.desc}
              type={item.type}
              onPress={() => slide()}
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
    marginTop: -60,
    backgroundColor: colors.white,
  },
});
