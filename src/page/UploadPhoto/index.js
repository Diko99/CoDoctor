import React from 'react';
import {StyleSheet, View, ImageBackground} from 'react-native';
import {ILBackgroundLight} from '../../assets';
import {AddPhoto, Button, Link} from '../../components';

const UploadPhoto = () => {
  return (
    <ImageBackground source={ILBackgroundLight} style={styles.container}>
      <AddPhoto />
      <View style={styles.content}>
        <Button title="Upload and Continue" />
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
