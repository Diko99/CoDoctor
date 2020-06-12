import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Header} from '../../components';

const Chatting = () => {
  return (
    <View style={styles.container}>
      <Header type="chat" title="Diko Mahendra" desc="Dokter Umum" />
      <Text> Chatting</Text>
    </View>
  );
};

export default Chatting;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
