import React from 'react';
import {Text, StyleSheet, View, Image, TouchableOpacity} from 'react-native';
import {DummyUser1, IconIndicator, IconBackLight} from '../../../assets';
import {colors} from '../../../utils';

const Header = ({title, desc, onPress, type}) => {
  const IconLeft = () => {
    if (type === 'mainApp') {
      return <Image source={IconIndicator} style={styles.iconindicator} />;
    }
    if (type === 'chat') {
      return <IconBackLight style={styles.iconindicator} />;
    }
    return <Image source={IconIndicator} style={styles.iconindicator} />;
  };
  if (type === 'mainApp') {
    return (
      <View style={styles.containerMain}>
        <TouchableOpacity onPress={onPress}>
          <Image source={DummyUser1} style={styles.avatarMain} />
        </TouchableOpacity>
        <View style={styles.wrapper}>
          <Text style={styles.titleProfile}>{title}</Text>
          <Text style={styles.profession}>{desc}</Text>
        </View>
      </View>
    );
  }
  return (
    <View style={styles.container(type)}>
      {IconLeft()}
      <View style={styles.wrapperTitle(type)}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.desc}>{desc}</Text>
      </View>
      <TouchableOpacity onPress={onPress}>
        <Image source={DummyUser1} style={styles.avatar} />
      </TouchableOpacity>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: type => ({
    paddingTop: 40,
    flexDirection: 'row',
    paddingHorizontal: 16,
    paddingBottom: type === 'chat' ? 16 : 0,
    alignItems: 'center',
    backgroundColor: colors.primary,
    borderBottomLeftRadius: type === 'chat' ? 10 : 0,
    borderBottomRightRadius: type === 'chat' ? 10 : 0,
  }),
  containerMain: {
    paddingTop: 40,
    flexDirection: 'row',
    paddingHorizontal: 16,
    alignItems: 'center',
    backgroundColor: colors.white,
  },
  avatarMain: {
    marginTop: 10,
    alignItems: 'center',
    width: 40,
    height: 40,
    borderRadius: 50 / 2,
  },
  wrapper: {
    paddingTop: 10,
    marginLeft: 20,
  },
  titleProfile: {
    fontSize: 18,
    fontFamily: 'Mukta-SemiBold',
    color: colors.primary,
  },
  profession: {
    marginTop: -3,
    fontSize: 14,
    fontFamily: 'Mukta-Light',
    color: colors.border,
  },
  iconindicator: {
    width: 10,
    height: 16,
  },
  wrapperTitle: type => ({
    flex: 1,
    paddingLeft: type === 'chat' ? 10 : 0,
  }),
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
