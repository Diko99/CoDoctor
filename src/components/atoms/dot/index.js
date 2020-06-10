import React from 'react';
import {StyleSheet, View} from 'react-native';
import {colors} from '../../../utils';

const Dot = ({status}) => {
  return <View style={styles.dot(status)} />;
};

export default Dot;

const styles = StyleSheet.create({
  dot: status => ({
    width: 10,
    height: 10,
    backgroundColor: status === 'active' ? colors.secondary : colors.white,
    borderRadius: 10 / 2,
    marginHorizontal: 2,
  }),
});
