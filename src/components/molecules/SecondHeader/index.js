import React from 'react';
import {Text, StyleSheet, View, TouchableOpacity} from 'react-native';
import {IconBackDark, IconBackLight} from '../../../assets';
import {colors} from '../../../utils';

const SecondHeader = ({title, type, onPress}) => {
  const IconBack = () => {
    if (type === 'dark') {
      return <IconBackLight />;
    }
    return <IconBackDark />;
  };

  return (
    <View style={styles.container(type)}>
      <TouchableOpacity onPress={onPress} style={styles.button}>
        {IconBack()}
      </TouchableOpacity>
      <Text style={styles.title(type)}>{title}</Text>
    </View>
  );
};

export default SecondHeader;

const styles = StyleSheet.create({
  container: type => ({
    paddingTop: type === 'dark' ? 50 : 40,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 20,
    paddingHorizontal: 16,
    backgroundColor: type === 'dark' ? colors.primary : colors.white,
    borderBottomLeftRadius: type === 'dark' ? 20 : 0,
    borderBottomRightRadius: type === 'dark' ? 20 : 0,
  }),
  title: type => ({
    flex: 1,
    marginLeft: -40,
    fontSize: type === 'dark' ? 18 : 22,
    fontFamily: 'Mukta-SemiBold',
    textAlign: 'center',
    color: type === 'dark' && colors.white,
  }),
  button: {
    padding: 10,
  },
});
