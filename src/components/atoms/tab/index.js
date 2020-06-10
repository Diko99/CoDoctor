import React from 'react';
import {Text, StyleSheet, TouchableOpacity} from 'react-native';
import {
  IconHome,
  IconHomeActive,
  IconMessagesActive,
  IconMessages,
  IconHospitalsActive,
  IconHospitals,
} from '../../../assets';
import {colors} from '../../../utils';

const TabItem = ({title, onPress, onLongPress, active}) => {
  const Icon = () => {
    if (title === 'Home') {
      return active ? <IconHomeActive /> : <IconHome />;
    }
    if (title === 'Messages') {
      return active ? <IconMessagesActive /> : <IconMessages />;
    }
    if (title === 'Hospitals') {
      return active ? <IconHospitalsActive /> : <IconHospitals />;
    }
    return <IconHome />;
  };
  return (
    <TouchableOpacity
      style={styles.container}
      onLongPress={onLongPress}
      onPress={onPress}>
      <Icon />
      <Text style={styles.title}> {title} </Text>
    </TouchableOpacity>
  );
};

export default TabItem;

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
  },
  title: {
    marginTop: 2,
    color: colors.border,
    fontSize: 12,
    fontFamily: 'Mukta-Light',
  },
});
