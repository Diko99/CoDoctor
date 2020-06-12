import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {colors} from '../../../utils';

const IsMe = () => {
  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.text}>
          Selamat malam dokter, jadi begini dok saya ingin bertanya?
        </Text>
      </View>
      <Text style={styles.time}>15:30 PM</Text>
    </View>
  );
};

export default IsMe;

const styles = StyleSheet.create({
  container: {
    alignItems: 'flex-end',
  },
  content: {
    backgroundColor: colors.isMe,
    borderRadius: 10,
    paddingHorizontal: 16,
    paddingVertical: 10,
    maxWidth: 250,
    borderBottomRightRadius: 0,
    marginBottom: 30,
  },
  text: {
    fontSize: 13,
    color: colors.isMeText,
  },
  time: {
    fontSize: 10,
    color: colors.border,
    position: 'absolute',
    bottom: 10,
    right: 0,
    fontFamily: 'Mukta-Light',
  },
});
