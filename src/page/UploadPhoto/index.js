import React, {useState, useEffect} from 'react';
import {StyleSheet, View, ImageBackground} from 'react-native';
import {ILBackgroundLight, DummyUser1} from '../../assets';
import {AddPhoto, Button, Link, Loading} from '../../components';
import ImagePicker from 'react-native-image-picker';
import {showMessage} from 'react-native-flash-message';
import {Firebase} from '../../config';
import {storeData} from '../../utils';

const UploadPhoto = ({navigation, route}) => {
  const {fullName, profession, uid} = route.params;
  const [photo, setPhoto] = useState(DummyUser1);
  const [hasPhoto, setHasPhoto] = useState(false);
  const [photoForDB, setPhotoForDB] = useState('');
  const [loading, setLoading] = useState(false);

  const getImage = () => {
    ImagePicker.launchImageLibrary({}, response => {
      console.log('getphoto :', response);
      if (response.didCancel || response.error) {
        setLoading(false);
        showMessage({
          message: 'tidak jadi upload foto ?',
          type: 'default',
          backgroundColor: '#cc2d45',
        });
      } else {
        setLoading(false);
        const source = {uri: response.uri};
        setPhoto(source);
        setHasPhoto(true);
        setPhotoForDB(`data:${response.type};base64, ${response.data}`);
      }
    });
  };

  const uploadAndContinue = () => {
    Firebase.database()
      .ref('users/' + uid + '/')
      .update({photo: photoForDB});

    const data = route.params;
    data.photo = photoForDB;

    storeData('user', data);
    navigation.replace('MainScreen');
  };

  return (
    <>
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
            onPress={uploadAndContinue}
          />
          <Link
            title="skip for this"
            type="dark"
            onPress={() => navigation.replace('MainScreen')}
          />
        </View>
      </ImageBackground>
      {loading && <Loading />}
    </>
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
