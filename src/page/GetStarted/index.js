import React from 'react';
import {StatusBar, Text, View, StyleSheet, Image} from 'react-native';
import {colors} from '../../utils';
import {ILHero1, ILHero2, ILHero3} from '../../assets';
import AppIntroSlider from 'react-native-app-intro-slider';

const slides = [
  {
    key: 1,
    title: 'Appointment',
    text: 'Selalu jaga kesehatan dimanapun kita berada',
    image: ILHero1,
    backgroundColor: '#59b2ab',
  },
  {
    key: 2,
    title: 'Looking Information',
    text: 'Cari informasi terkini terkait dunia Kesehatan',
    image: ILHero2,
    backgroundColor: '#febe29',
  },
  {
    key: 3,
    title: 'Reading Information',
    text: 'Baca dari sumbernya mengenai informasi terbaru',
    image: ILHero3,
    backgroundColor: '#22bcb5',
  },
];

const GetStarted = ({navigation}) => {
  const contentCarousel = ({item}) => {
    return (
      <View style={styles.content}>
        <StatusBar
          translucent
          barStyle="light-content"
          backgroundColor="transparent"
        />
        <Image source={item.image} style={styles.heroku} />
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.desc}>{item.text}</Text>
      </View>
    );
  };

  return (
    <AppIntroSlider
      renderItem={contentCarousel}
      data={slides}
      onDone={() => navigation.navigate('Login')}
    />
  );
};

export default GetStarted;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  heroku: {
    width: 250,
    maxHeight: 350,
  },
  content: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.primary,
    flex: 1,
  },
  title: {
    color: colors.white,
    fontSize: 20,
    marginTop: 30,
    fontFamily: 'Mukta-Bold',
    textAlign: 'center',
  },
  desc: {
    color: colors.white,
    fontSize: 15,
    fontFamily: 'Mukta-Light',
    textAlign: 'center',
    width: 236,
    marginTop: 10,
  },
});
