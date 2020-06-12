import React from 'react';
import {Text, StyleSheet, View, Image, TouchableOpacity} from 'react-native';
import {IconStar, IconNext, IconEditProfile} from '../../../assets';
import {colors} from '../../../utils';

const List = ({type, title, desc, photo, onPress}) => {
  const Photo = () => {
    if (type === 'profile') {
      return <IconEditProfile style={styles.avt} />;
    }
    if (type === 'docter-profile') {
      return null;
    }
    return <Image source={photo} style={styles.photo} />;
  };

  const Icon = () => {
    if (type === 'all') {
      return (
        <View style={styles.wrapStar}>
          {[1, 2, 3, 4, 5].map(() => (
            <IconStar />
          ))}
        </View>
      );
    }
    if (type === 'profile') {
      return <Image source={IconNext} style={styles.icnext} />;
    }
  };

  return (
    <TouchableOpacity
      style={styles.container(type)}
      onPress={onPress}
      disabled={type === 'docter-profile'}>
      <View style={styles.content}>
        {Photo()}
        <View style={styles.wrapText}>
          <Text style={styles.title(type)}>{title}</Text>
          <Text style={styles.desc(type)}> {desc} </Text>
        </View>
      </View>
      {Icon()}
    </TouchableOpacity>
  );
};

export default List;

const styles = StyleSheet.create({
  container: type => ({
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 10,
    paddingHorizontal: type === 'news' || type === 'docter-profile' ? 16 : 0,
    borderBottomWidth:
      type === 'news' ||
      type === 'profile' ||
      type === 'docter' ||
      type === 'docter-profile'
        ? 1
        : 0,
    borderBottomColor:
      type === 'news'
        ? colors.disabled
        : type === 'profile'
        ? colors.disabled
        : type === 'docter'
        ? colors.disabled
        : colors.disabled,
  }),
  content: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  wrapText: {
    marginLeft: 10,
  },
  photo: {
    width: 50,
    height: 50,
    borderRadius: 50 / 2,
    borderWidth: 2,
    borderColor: colors.disabled,
  },
  title: type => ({
    fontSize: type === 'docter-profile' ? 14 : 16,
    fontFamily: 'Mukta-Medium',
    color: type === 'docter-profile' ? colors.border : colors.primary,
  }),
  desc: type => ({
    fontSize: type === 'docter-profile' ? 16 : 14,
    fontFamily: type === 'docter-profile' ? 'Mukta-SemiBold' : 'Mukta-Light',
    color: type === 'docter-profile' ? colors.primary : colors.border,
  }),
  wrapStar: {
    flexDirection: 'row',
  },
  avt: {
    padding: 20,
  },
  icnext: {
    width: 12,
    height: 12,
  },
});
