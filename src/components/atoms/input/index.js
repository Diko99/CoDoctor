import React from 'react';
import {TextInput, StyleSheet, View} from 'react-native';
import {colors} from '../../../utils';
import {IconSearch} from '../../../assets';

const Input = ({title, secureTextEntry, light, type}) => {
  if (type === 'form-search') {
    return (
      <View style={styles['container-search']}>
        <TextInput
          placeholderTextColor={light ? colors.border : colors.border}
          placeholder={title}
          style={styles['input-search']}
          secureTextEntry={secureTextEntry}
          returnKeyLabel="search"
        />
        <IconSearch style={styles['icon-search']} />
      </View>
    );
  }
  return (
    <View style={styles.container}>
      <TextInput
        placeholderTextColor={light ? colors.primary : colors.white}
        placeholder={title}
        style={styles.input}
        secureTextEntry={secureTextEntry}
      />
    </View>
  );
};
export default Input;

const styles = StyleSheet.create({
  'container-search': {
    flexDirection: 'row',
  },
  'icon-search': {
    position: 'absolute',
    bottom: 15,
    left: 15,
  },
  'input-search': {
    backgroundColor: 'white',
    borderWidth: 1,
    flex: 1,
    borderColor: colors.border,
    borderRadius: 10,
    paddingLeft: 50,
  },
  input: {
    backgroundColor: 'transparent',
    borderWidth: 1,
    borderColor: colors.border,
    borderRadius: 10,
    paddingHorizontal: 20,
  },
});
