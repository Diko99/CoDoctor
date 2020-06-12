import React from 'react';
import {StyleSheet, View, TextInput, TouchableOpacity} from 'react-native';
import {colors} from '../../../utils';
import {IconSend} from '../../../assets';

const SendItem = () => {
  return (
    <View style={styles.container}>
      <TextInput
        placeholder="Kirim pesan untuk Diko Mahendra..."
        style={styles.input}
      />
      <TouchableOpacity style={styles.button}>
        <IconSend />
      </TouchableOpacity>
    </View>
  );
};

export default SendItem;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 16,
    paddingVertical: 12,
    flexDirection: 'row',
  },
  input: {
    borderWidth: 1,
    borderColor: colors.border,
    borderRadius: 10,
    flex: 1,
    paddingHorizontal: 16,
  },
  button: {
    width: 50,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 10,
    backgroundColor: colors.primary,
  },
});
