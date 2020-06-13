import React from 'react';
import {Text, StyleSheet, View, ImageBackground} from 'react-native';
import {ILHospital1, dummGoodNews, ILGoodNews} from '../../assets';
import {colors} from '../../utils';
import {ScrollView} from 'react-native-gesture-handler';
const GoodNews = () => {
  return (
    <View style={styles.container}>
      <ImageBackground source={ILGoodNews} style={styles.imageHeader}>
        <Text style={styles.title}>Info Kesehatan</Text>
      </ImageBackground>
      <View style={styles.content}>
        <ScrollView showsVerticalScrollIndicator={false}>
          {dummGoodNews.map(item => (
            <View style={styles['list-content']} key={item.id}>
              <View style={styles['title-content']}>
                <Text style={styles['title-content']}>{item.title}</Text>
                <Text style={styles['desc-content']}>{item.desc}</Text>
              </View>
            </View>
          ))}
        </ScrollView>
      </View>
    </View>
  );
};

export default GoodNews;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  imageHeader: {
    width: '100%',
    height: 197,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 30,
    color: colors.white,
    fontFamily: 'Mukta-SemiBold',
  },
  desc: {
    fontSize: 18,
    color: colors.primary,
    fontFamily: 'Mukta-Medium',
  },
  content: {
    flex: 1,
    backgroundColor: colors.white,
    marginTop: -40,
    padding: 20,
    borderTopRightRadius: 30,
    borderTopLeftRadius: 30,
  },
  'list-content': {
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: colors.disabled,
    padding: 10,
  },
  'title-content': {
    fontSize: 24,
    color: colors.primary,
    fontFamily: 'Mukta-Medium',
    marginBottom: 10,
  },
  'desc-content': {
    fontSize: 14,
    color: colors.primary,
    fontFamily: 'Mukta-Light',
  },
});
