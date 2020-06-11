import React from 'react';
import {Text, StyleSheet, View, Image, TouchableOpacity} from 'react-native';
import {IconStar, IconNext, IconEditProfile} from '../../../assets';
import {colors} from '../../../utils';

const List = ({type, title, desc, photo, onPress}) => {
  const Photo = () => {
    if (type === 'profile') {
      return <IconEditProfile style={styles.avt} />;
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
    <TouchableOpacity style={styles.container(type)} onPress={onPress}>
      <View style={styles.content}>
        {Photo()}
        <View style={styles.wrapText}>
          <Text style={styles.title}>{title}</Text>
          <Text style={styles.desc}> {desc} </Text>
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
    paddingHorizontal: type === 'news' ? 16 : 0,
    borderBottomWidth: type === 'news' ? 1 : 0,
    borderBottomColor: type === 'news' && colors.disabled,
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
  title: {
    fontSize: 16,
    fontFamily: 'Mukta-Medium',
    color: colors.primary,
  },
  desc: {
    fontSize: 14,
    fontFamily: 'Mukta-Light',
    color: colors.border,
  },
  wrapStar: {
    flexDirection: 'row',
  },
  avt: {
    padding: 20,
  },
  icnext: {
    width: 12,
    height: 12,
  }
});
