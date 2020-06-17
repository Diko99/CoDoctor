import React from 'react';
import {Text, StyleSheet, View, Image, TouchableOpacity} from 'react-native';
import {IconAdd, IconRemove} from '../../../assets';
import {colors} from '../../../utils';

const AddPhoto = ({title, desc, type, onPress, photo, icon, disabled}) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        disabled={disabled}
        style={styles.content(type)}
        onPress={onPress}>
        <Image source={photo} style={styles.avatar} />
        {icon && <IconRemove style={styles.icon} />}
        {/* {!icon && <IconAdd style={styles.icon} />} */}
      </TouchableOpacity>
      {title && (
        <View style={styles.wrapperDesc(type)}>
          <Text style={styles.title}>{title}</Text>
          <Text style={styles.profession}>{desc}</Text>
        </View>
      )}
    </View>
  );
};

export default AddPhoto;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  content: type => ({
    marginTop: type === 'profile' || type === 'edit-profile' ? 10 : 100,
    width: 146,
    height: 146,
    borderWidth: 2,
    borderColor: colors.border,
    borderRadius: 146 / 2,
    alignItems: 'center',
    justifyContent: 'center',
  }),
  avatar: {
    width: 140,
    height: 140,
    borderRadius: 140 / 2,
  },
  icon: {
    position: 'absolute',
    bottom: 0,
    right: 10,
  },
  iconRemove: {
    position: 'absolute',
    bottom: 0,
    right: 10,
    width: 20,
    height: 20,
  },
  wrapperDesc: type => ({
    marginTop: type === 'profile' ? 15 : 35,
  }),
  title: {
    fontSize: 22,
    fontFamily: 'Mukta-SemiBold',
    color: colors.primary,
    textAlign: 'center',
    textTransform: 'capitalize',
  },
  profession: {
    fontSize: 16,
    fontFamily: 'Mukta-Regular',
    color: colors.secondary,
    textTransform: 'capitalize',
    textAlign: 'center',
    marginBottom: 10,
  },
});
