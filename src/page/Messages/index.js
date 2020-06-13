import React from 'react';
import {Text, StyleSheet, View} from 'react-native';
import {List} from '../../components';
import {dataMessages} from '../../assets';
import {colors} from '../../utils';

const Messages = ({navigation}) => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}> Messages </Text>
      </View>
      {dataMessages.map(item => (
        <View style={styles.content}>
          <List
            key={item.id}
            photo={item.photo}
            title={item.title}
            desc={item.desc}
            onPress={() => navigation.navigate('Chatting')}
          />
        </View>
      ))}
    </View>
  );
};

export default Messages;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
  header: {
    padding: 16,
  },
  title: {
    fontSize: 18,
    fontFamily: 'Mukta-SemiBold',
    color: colors.primary,
  },
  content: {
    borderBottomColor: colors.disabled,
    borderBottomWidth: 1,
    paddingHorizontal: 16,
  },
});
