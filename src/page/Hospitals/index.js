import React from 'react';
import {Text, StyleSheet, View, ImageBackground, Image} from 'react-native';
import {ILHospital1, dataHospitals} from '../../assets';
import {colors} from '../../utils';
import { ScrollView } from 'react-native-gesture-handler';

const Hospitals = () => {
  return (
    <View style={styles.container}>
      <ImageBackground source={ILHospital1} style={styles.imageHeader}>
        <Text style={styles.title}>Nearby Hospital</Text>
        <Text style={styles.desc}>4 Tersedia</Text>
      </ImageBackground>
      <View style={styles.content}>
        <ScrollView showsVerticalScrollIndicator={false}>
          {dataHospitals.map(item => (
            <View key={item.id} style={styles['list-content']}>
              <Image source={item.photo} style={styles['image-content']} />
              <View style={styles['title-content']}>
                <Text style={styles['title-content']}>{item.title}</Text>
                <Text style={styles['subtitle-content']}>{item.subtitle}</Text>
                <Text style={styles['desc-content']}>{item.desc}</Text>
              </View>
            </View>
          ))}
        </ScrollView>
      </View>
    </View>
  );
};

export default Hospitals;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
  imageHeader: {
    width: '100%',
    height: 197,
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 20,
  },
  title: {
    fontSize: 24,
    color: colors.white,
    fontFamily: 'Mukta-SemiBold',
  },
  desc: {
    fontSize: 18,
    color: colors.white,
    fontFamily: 'Mukta-Medium',
  },
  content: {
    flex: 1,
    backgroundColor: colors.white,
    marginTop: -40,
    padding: 20,
    borderTopRightRadius: 30,
    borderTopLeftRadius: 30,
  },
  'image-content': {
    width: 77,
    height: 50,
    marginRight: 17,
  },
  'list-content': {
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: colors.disabled,
    padding: 10,
  },
  'title-content': {
    fontSize: 14,
    color: colors.primary,
    fontFamily: 'Mukta-Medium',
    backgroundColor: colors.white,
  },
  'subtitle-content': {
    fontSize: 14,
    color: colors.primary,
    fontFamily: 'Mukta-Medium',
    lineHeight: 20,
  },
  'desc-content': {
    fontSize: 12,
    color: colors.disabled,
    fontFamily: 'Mukta-Light',
  },
});
