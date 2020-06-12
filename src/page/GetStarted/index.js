import React from 'react';
import {Text, View, StyleSheet, Image} from 'react-native';
import {colors} from '../../utils';
import {Button, Dot} from '../../components';
import {ILHero1} from '../../assets/illustration';

const GetStarted = ({navigation}) => {
  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Image source={ILHero1} style={styles.heroku} />
        <View>
          <View style={styles.dot}>
            <Dot status="active" />
            <Dot />
            <Dot />
          </View>
          <Text style={styles.title}>Appointment</Text>
          <Text style={styles.desc}>
            For any health questions, our doctors are ready to help Doctorfinder
            is now to largest website where people can get answer from Doctors
          </Text>
        </View>
      </View>
      <Button
        title="Get Started"
        onPress={() => navigation.navigate('Login')}
      />
    </View>
  );
};

export default GetStarted;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
  heroku: {
    width: 210,
    height: 310,
  },
  dot: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 20,
    marginBottom: 20,
  },
  content: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.primary,
    flex: 1,
    borderBottomLeftRadius: 44,
    borderBottomRightRadius: 44,
  },
  title: {
    color: colors.white,
    fontSize: 24,
    fontFamily: 'Mukta-Bold',
    textAlign: 'center',
    marginBottom: 20,
  },
  desc: {
    color: colors.white,
    fontSize: 12,
    fontFamily: 'Mukta-Light',
    textAlign: 'center',
    width: 236,
  },
});