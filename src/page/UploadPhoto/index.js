import React from 'react';
import {StyleSheet, View, ImageBackground} from 'react-native';
import {ILBackgroundLight} from '../../assets';
import {AddPhoto, Button, Link} from '../../components';

const UploadPhoto = ({navigation}) => {
  return (
    <ImageBackground source={ILBackgroundLight} style={styles.container}>
      <AddPhoto title="Andiko Mahendra" desc="Frontend Developer" />
      <View style={styles.content}>
        <Button
          title="Upload and Continue"
          onPress={() => navigation.replace('MainScreen')}
        />
        <Link title="skip for this" type="dark" />
      </View>
    </ImageBackground>
  );
};

export default UploadPhoto;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 40,
  },
  content: {
    flex: 1,
    marginTop: 200,
  },
});
