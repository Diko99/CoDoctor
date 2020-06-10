import React from 'react';
import {Text, StyleSheet, View, TouchableOpacity} from 'react-native';
import {colors} from '../../../utils';

const Button = ({title, type, onPress}) => {
  if (type === 'disabled') {
    return (
      <View style={styles.container(type)}>
        <Text style={styles.button(type)}>{title}</Text>
      </View>
    );
  }
  return (
    <TouchableOpacity style={styles.container(type)} onPress={onPress}>
      <Text style={styles.button(type)}>{title}</Text>
    </TouchableOpacity>
  );
};

export default Button;

const styles = StyleSheet.create({
  container: type => ({
    backgroundColor: type === 'light' ? colors.white : colors.primary,
    marginHorizontal: type === 'light' ? 0 : type === 'register' ? 0 : 16,
    borderRadius: 5,
    marginTop: 20,
    marginBottom: 20,
  }),
  button: type => ({
    color: type === 'light' ? colors.primary : colors.white,
    textAlign: 'center',
    padding: 10,
    fontFamily: 'Mukta-SemiBold',
    fontSize: 18,
  }),
});
