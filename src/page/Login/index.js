import React from 'react';
import {Text, StyleSheet, ImageBackground, ScrollView} from 'react-native';
import {Input, Button, Gap, Link} from '../../components';
import {colors} from '../../utils';
import {ILBackgroundDark} from '../../assets';

const Login = ({navigation}) => {
  return (
    <ImageBackground source={ILBackgroundDark} style={styles.container}>
      <Text style={styles.title}>Mulai Konsultasi Sekarang</Text>
      <Text style={styles.desc}>
        Silahkan login atau registrasi untuk mendapatkan sesuatu yang menarik
      </Text>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Input title="Email Address" />
        <Gap height={24} />
        <Input title="Password" secureTextEntry />
        <Gap height={30} />
        <Button
          title="Sign In"
          type="light"
          onPress={() => navigation.navigate('MainScreen')}
        />
        <Gap height={20} />
        <Link
          title="Belum memiliki akun ? Mendaftar"
          onPress={() => navigation.navigate('Registered')}
        />
      </ScrollView>
    </ImageBackground>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 40,
  },
  title: {
    color: colors.white,
    fontSize: 30,
    fontFamily: 'Mukta-Bold',
    marginBottom: 50,
    marginTop: 40,
  },
  desc: {
    color: colors.secondary,
    fontSize: 14,
    marginTop: -30,
    marginBottom: 27,
    textAlign: 'left',
    fontFamily: 'Mukta-Light',
  },
  content: {
    padding: 40,
    flex: 1,
  },
});
