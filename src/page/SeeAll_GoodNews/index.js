import React from 'react';
import {StyleSheet, Text, View, ScrollView} from 'react-native';
import {colors} from '../../utils';
import {dummyDataAllGoodNews} from '../../assets';
import {List, MainSearch} from '../../components';

const SeeAllGoodNews = ({navigation}) => {
  return (
    <View style={styles.container}>
      <MainSearch placeholder="Cari info seputar kesehatan" type="seeAll" />
      <Text style={styles.title}>Info Seputar Kesehatan</Text>
      <ScrollView>
        <View>
          {dummyDataAllGoodNews.map(item => (
            <List
              key={item.id}
              type="news"
              title={item.title}
              desc={item.desc}
              photo={item.photo}
              onPress={() => navigation.navigate('GoodNews')}
            />
          ))}
        </View>
      </ScrollView>
    </View>
  );
};

export default SeeAllGoodNews;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
    paddingTop: 20,
  },
  title: {
    paddingVertical: 16,
    paddingHorizontal: 20,
    color: colors.primary,
    fontSize: 18,
    fontFamily: 'Mukta-SemiBold',
  },
  content: {
    padding: 20,
  },
});
