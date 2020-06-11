import React from 'react';
import {
  Text,
  StyleSheet,
  View,
  ImageBackground,
  ScrollView,
} from 'react-native';
import {ILBackgroundLight} from '../../assets';
import {Input, Button, Gap, Link} from '../../components';

const Registered = ({navigation}) => {
  return (
    <ImageBackground source={ILBackgroundLight} style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.title}>Create new account</Text>
        <ScrollView showsVerticalScrollIndicator={false}>
          <Input title="Nama Lengkap" light />
          <Gap height={15} />
          <Input title="Email" light />
          <Gap height={15} />
          <Input title="Pekerjaan" light />
          <Gap height={15} />
          <Input title="Password" light secureTextEntry />
          <Button
            title="Mendaftar"
            type="register"
            onPress={() => navigation.navigate('UploadPhoto')}
          />
        </ScrollView>
      </View>
      <Link
        title="Sudah memiliki akun ?  Masuk"
        type="dark"
        onPress={() => navigation.navigate('Login')}
      />
    </ImageBackground>
  );
};

export default Registered;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 40,
  },
  content: {
    marginTop: 50,
  },
  title: {
    fontSize: 24,
    width: 150,
    fontFamily: 'Mukta-SemiBold',
    marginBottom: 30,
  },
});
