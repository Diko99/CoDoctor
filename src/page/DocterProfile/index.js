import React from 'react';
import {StyleSheet, View} from 'react-native';
import {SecondHeader, AddPhoto, List, Button} from '../../components';
import {colors} from '../../utils';
import {dummyProfileDokter} from '../../assets';

const DokterProfile = ({navigation}) => {
  return (
    <View style={styles.container}>
      <SecondHeader light title="Profile Dokter" />
      <AddPhoto type="profile" title="Diko Mahendra" desc="Dokter Umum" />
      <View style={styles.content}>
        {dummyProfileDokter.map(item => (
          <List
            key={item.id}
            type={item.type}
            title={item.title}
            desc={item.desc}
          />
        ))}
      </View>
      <Button
        title="Mulai Konsultasi"
        onPress={() => navigation.navigate('Chatting')}
      />
    </View>
  );
};

export default DokterProfile;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
  content: {},
});
