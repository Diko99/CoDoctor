import React from 'react';
import {StyleSheet, Text, View, ScrollView} from 'react-native';
import {Header, Inbox, SendItem} from '../../components';
import {colors} from '../../utils';

const Chatting = () => {
  return (
    <View style={styles.container}>
      <Header type="chat" title="Diko Mahendra" desc="Dokter Umum" />
      <View style={styles.content}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <Text style={styles.chatID}>Selasa, 12 Januari 2012</Text>
          <Inbox isMe />
          <Inbox />
          <Inbox />
        </ScrollView>
      </View>
      <SendItem />
    </View>
  );
};

export default Chatting;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    flex: 1,
    padding: 16,
    paddingHorizontal: 16,
  },
  chatID: {
    color: colors.border,
    textAlign: 'center',
    paddingRight: 10,
    fontSize: 12,
    fontFamily: 'Mukta-Light',
    marginBottom: 30,
  },
});
