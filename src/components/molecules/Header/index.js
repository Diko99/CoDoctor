import React from 'react';
import {Text, StyleSheet, View, Image} from 'react-native';
import {DummyUser1, IconIndicator} from '../../../assets';
import {colors} from '../../../utils';

const Header = () => {
  return (
    <View style={styles.container}>
      <View>
        <Image source={IconIndicator} style={styles.iconindicator} />
      </View>
      <View style={styles.wrapperTitle}>
        <Text style={styles.title}>Andiko Mahendra</Text>
        <Text style={styles.desc}>Frontend Developers</Text>
      </View>
      <View>
        <Image source={DummyUser1} style={styles.avatar} />
      </View>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    paddingHorizontal: 16,
    paddingVertical: 20,
    alignItems: 'center',
    backgroundColor: colors.primary,
  },
  iconindicator: {
    width: 10,
    height: 16,
  },
  wrapperTitle: {
    flex: 1,
  },
  title: {
    textAlign: 'center',
    color: colors.white,
    fontSize: 18,
    fontFamily: 'Mukta-SemiBold',
  },
  desc: {
    textAlign: 'center',
    color: colors.border,
    fontFamily: 'Mukta-Light',
  },
  avatar: {
    width: 30,
    height: 30,
  },
});
