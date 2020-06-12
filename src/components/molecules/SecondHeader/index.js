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
      <TouchableOpacity onPress={onPress}>
        <IconBack />
      </TouchableOpacity>
      <Text style={styles.title(type)}>{title}</Text>
    </View>
  );
};

export default SecondHeader;

const styles = StyleSheet.create({
  container: type => ({
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 30,
    paddingHorizontal: 16,
    backgroundColor: type === 'dark' ? colors.primary : colors.white,
    borderBottomLeftRadius: type === 'dark' ? 20 : 0,
    borderBottomRightRadius: type === 'dark' ? 20 : 0,
  }),
  title: type => ({
    flex: 1,
    marginLeft: -20,
    fontSize: 22,
    fontFamily: 'Mukta-SemiBold',
    textAlign: 'center',
    color: type === 'dark' && colors.white,
  }),
});
