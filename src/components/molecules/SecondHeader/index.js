import React from 'react';
import {Text, StyleSheet, View} from 'react-native';
import {IconBackDark} from '../../../assets';

const SecondHeader = ({title}) => {
  return (
    <View style={styles.container}>
      <IconBackDark />
      <Text style={styles.title}>{title}</Text>
    </View>
  );
};

export default SecondHeader;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 30,
    paddingHorizontal: 16,
  },
  title: {
    flex: 1,
    marginLeft: -20,
    fontSize: 22,
    fontFamily: 'Mukta-SemiBold',
    textAlign: 'center',
  },
});
