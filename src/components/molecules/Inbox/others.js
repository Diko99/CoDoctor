import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import {colors} from '../../../utils';
import {DummyDokter1} from '../../../assets';

const Others = () => {
  return (
    <View style={styles.container}>
      <Image source={DummyDokter1} style={styles.avatar} />
      <View>
        <View style={styles.content}>
          <Text style={styles.text}>Iyaa silahkan mau bertanya apa ?</Text>
        </View>
        <Text style={styles.time}>15:30 PM</Text>
      </View>
    </View>
  );
};

export default Others;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'flex-start',
  },
  content: {
    backgroundColor: colors.primary,
    maxWidth: 200,
    borderRadius: 10,
    paddingHorizontal: 16,
    paddingVertical: 10,
    borderBottomLeftRadius: 0,
    marginBottom: 30,
  },
  text: {
    fontSize: 12,
    color: colors.white,
  },
  time: {
    fontSize: 10,
    color: colors.border,
    position: 'absolute',
    bottom: 10,
    left: 0,
    fontFamily: 'Mukta-Light',
  },
  avatar: {
    width: 30,
    height: 30,
    borderRadius: 40 / 2,
    marginTop: 20,
    marginRight: 10,
  },
});
