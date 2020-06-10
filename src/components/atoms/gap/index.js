import React from 'react';
import {StyleSheet, View} from 'react-native';

const Gap = ({height, width}) => {
  return <View style={styles.gap(height, width)} />;
};

export default Gap;

const styles = StyleSheet.create({
  gap: (height, width) => ({
    height: height,
    width: width,
  }),
});
