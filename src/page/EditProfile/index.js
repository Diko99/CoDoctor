import React from 'react';
import {StyleSheet, View} from 'react-native';
import {SecondHeader, AddPhoto, Input, Gap, Button} from '../../components';
import { ScrollView } from 'react-native-gesture-handler';

const EditProfile = ({navigation}) => {
  return (
    <View style={styles.container}>
      <SecondHeader title="Edit Profile" />
      <ScrollView>
        <AddPhoto type="edit-profile" />
        <View style={styles.content}>
          <Input title="Nama Lengkap" light />
          <Gap height={15} />
          <Input title="Pekerjaan" light />
          <Gap height={15} />
          <Input title="Email" light />
          <Gap height={15} />
          <Input title="Password" light />
        </View>
        <Button
          title="Simpan Perubahan"
          onPress={() => navigation.replace('MainScreen')}
        />
      </ScrollView>
    </View>
  );
};

export default EditProfile;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    padding: 20,
    flex: 1,
  },
});
