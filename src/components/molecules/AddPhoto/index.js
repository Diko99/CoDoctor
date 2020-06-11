import React from 'react';
import {Text, StyleSheet, View, Image} from 'react-native';
import {DummyUser1, IconAdd} from '../../../assets';
import {colors} from '../../../utils';

const AddPhoto = ({title, desc, type}) => {
  const Icon = () => {
    if (type === 'profile') {
      return null;
    }
    if (type === 'edit-profile') {
      return <IconAdd style={styles.icon} />;
    }
    return <IconAdd style={styles.icon} />;
  };
  return (
    <View style={styles.container}>
      <View style={styles.content(type)}>
        <Image source={DummyUser1} style={styles.avatar} />
        {Icon()}
      </View>
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
  wrapperDesc: type => ({
    marginTop: type === 'profile' ? 15 : 35,
  }),
  title: {
    fontSize: 22,
    fontFamily: 'Mukta-SemiBold',
    color: colors.primary,
    textAlign: 'center',
  },
  profession: {
    fontSize: 14,
    fontFamily: 'Mukta-Regular',
    color: colors.secondary,
    textAlign: 'center',
  },
});
