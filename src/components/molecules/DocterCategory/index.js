import React from 'react';
import {Text, StyleSheet, TouchableOpacity, Image} from 'react-native';
import {colors} from '../../../utils';
import {ILAnak} from '../../../assets';

const DocterCategory = ({title, onPress}) => {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <Image source={ILAnak} style={styles.ilustration} />
      <Text style={styles['title-content']}> Saya butuh </Text>
      <Text style={styles['desc-content']}> {title} </Text>
    </TouchableOpacity>
  );
};

export default DocterCategory;

const styles = StyleSheet.create({
  container: {
    padding: 12,
    backgroundColor: colors.cardLight,
    alignSelf: 'flex-start',
    borderRadius: 10,
    marginRight: 10,
    width: 110,
    height: 130,
  },
  ilustration: {
    width: 50,
    height: 50,
    marginBottom: 20,
  },
  'title-content': {
    fontSize: 14,
    color: colors.white,
    fontFamily: 'Mukta-Light',
    textTransform: 'capitalize',
  },
  'desc-content': {
    fontSize: 14,
    color: colors.white,
    fontFamily: 'Mukta-SemiBold',
    textTransform: 'capitalize',
  },
});
