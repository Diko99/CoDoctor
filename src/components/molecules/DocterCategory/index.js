import React from 'react';
import {Text, StyleSheet, TouchableOpacity, Image} from 'react-native';
import {colors} from '../../../utils';
import {ILAnak} from '../../../assets';

const DocterCategory = ({title, onPress, type}) => {
  return (
    <TouchableOpacity style={styles.container(type)} onPress={onPress}>
      <Image source={ILAnak} style={styles.ilustration} />
      <Text style={styles['title-content']}> Saya butuh </Text>
      <Text style={styles['desc-content']}> {title} </Text>
    </TouchableOpacity>
  );
};

export default DocterCategory;

const styles = StyleSheet.create({
  container: type => ({
    padding: 12,
    backgroundColor: colors.cardLight,
    alignSelf: 'flex-start',
    borderRadius: 10,
    width: 100,
    marginHorizontal: type === 'seeAll' ? 5 : 5,
    marginBottom: type === 'seeAll' ? 10 : 0,
    height: 130,
  }),
  ilustration: {
    width: 50,
    height: 50,
    marginBottom: 20,
  },
  'title-content': {
    fontSize: 12,
    color: colors.white,
    fontFamily: 'Mukta-Light',
    textTransform: 'capitalize',
  },
  'desc-content': {
    fontSize: 12,
    color: colors.white,
    fontFamily: 'Mukta-SemiBold',
    textTransform: 'capitalize',
  },
});
