import React from 'react';
import {StyleSheet, View, ScrollView} from 'react-native';
import {SecondHeader, AddPhoto, Input, Gap, Button} from '../../components';
import {colors} from '../../utils';

const EditProfile = ({navigation, route}) => {
  const data = route.params;
  console.log('edit profile', data);
  return (
    <View style={styles.container}>
      <SecondHeader title="Edit Profile" onPress={() => navigation.goBack()} />
      <ScrollView showsVerticalScrollIndicator={false}>
        <AddPhoto type="edit-profile" photo={data.photo} icon />
        <View style={styles.content}>
          <Input title={data.fullName} light />
          <Gap height={15} />
          <Input title={data.profession} light />
          <Gap height={15} />
          <Input title={data.email} light />
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
    backgroundColor: colors.white,
  },
  content: {
    paddingHorizontal: 20,
    flex: 1,
    marginTop: 30,
  },
});
