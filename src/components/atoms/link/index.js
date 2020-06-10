import React from 'react';
import {Text, StyleSheet, TouchableOpacity} from 'react-native';
import {colors} from '../../../utils';

const Link = ({title, type, onPress}) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <Text style={styles.text(type)}> {title} </Text>
    </TouchableOpacity>
  );
};

export default Link;

const styles = StyleSheet.create({
  text: type => ({
    color: type === 'dark' ? colors.primary : colors.white,
    textAlign: 'center',
    marginBottom: 90,
    textTransform: 'capitalize',
  }),
});
