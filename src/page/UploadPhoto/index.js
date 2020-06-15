import React, {useState} from 'react';
import {StyleSheet, View, ImageBackground} from 'react-native';
import {ILBackgroundLight, DummyUser1} from '../../assets';
import {AddPhoto, Button, Link} from '../../components';
import ImagePicker from 'react-native-image-picker';
import {showMessage} from 'react-native-flash-message';

const UploadPhoto = ({navigation, route}) => {
  const {fullName, profession} = route.params;
  const [photo, setPhoto] = useState(DummyUser1);
  const [hasPhoto, setHasPhoto] = useState(false);
  const getImage = () => {
    ImagePicker.launchImageLibrary({}, response => {
      console.log('getphoto :', response);
      if (response.didCancel || response.error) {
        showMessage({
          message: 'tidak jadi upload foto ?',
          type: 'default',
          backgroundColor: '#cc2d45',
        });
      } else {
        const source = {uri: response.uri};
        setPhoto(source);
        setHasPhoto(true);
        console.log('new image', source);
      }
    });
  };
  return (
    <ImageBackground source={ILBackgroundLight} style={styles.container}>
      <AddPhoto
        title={fullName}
        desc={profession}
        icon={hasPhoto}
        onPress={getImage}
        photo={photo}
      />
      <View style={styles.content}>
        <Button
          disable={!hasPhoto}
          title="Upload and Continue"
          onPress={() => navigation.replace('MainScreen')}
        />
        <Link
          title="skip for this"
          type="dark"
          onPress={() => navigation.replace('MainScreen')}
        />
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
