import React from 'react';
import {
  StyleSheet,
  View,
  ScrollView,
  Text,
  TouchableOpacity,
} from 'react-native';
import {Header, MainSearch, DocterCategory, List} from '../../components';
import {colors} from '../../utils';
import {dataCategoryDokter, Data, News} from '../../assets';

const MainApp = ({navigation}) => {
  return (
    <View style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.content}>
          <Header
            title="Andiko Mahendra"
            desc="Frontend Enthusiast"
            onPress={() => navigation.navigate('Profile')}
            type="mainApp"
          />
          <View style={styles['wrapper-text']}>
            <Text style={styles['title-text']}>
              Mau konsultasi dengan siapa hari ini ?
            </Text>
          </View>
          <View style={styles['content-dokter-category']}>
            <View style={styles['label-content']}>
              <Text style={styles['title-content']}> Docter Category </Text>
              <TouchableOpacity
                onPress={() => navigation.navigate('SeeAllDocterCategory')}>
                <Text style={styles['title-seeAll']}>See All</Text>
              </TouchableOpacity>
            </View>
            <View style={styles['cards-dokter-category']}>
              <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                {dataCategoryDokter.data.map(data => {
                  return (
                    <DocterCategory
                      key={data.id}
                      title={data.category}
                      onPress={() => navigation.navigate('ChooseDocter')}
                    />
                  );
                })}
              </ScrollView>
            </View>
          </View>
          <View style={styles['content-topRatedDokter']}>
            <View style={styles['label-content']}>
              <Text style={styles['title-content']}> Top Rated Dokter </Text>
              <TouchableOpacity
                onPress={() => navigation.navigate('SeeAllTopRatedDocter')}>
                <Text style={styles['title-seeAll']}>See All</Text>
              </TouchableOpacity>
            </View>
            <View style={styles['list-topRated-dokter']}>
              {Data.map(item => (
                <List
                  key={item.id}
                  photo={item.photo}
                  title={item.title}
                  desc={item.desc}
                  type="all"
                  onPress={() => navigation.navigate('DocterProfile')}
                />
              ))}
            </View>
          </View>
          <View style={styles['content-good-news']} />
          <View style={styles['label-content-news']}>
            <Text style={styles['title-content']}>Info Seputar Kesehatan</Text>
            <TouchableOpacity
              onPress={() => navigation.navigate('SeeAllGoodNews')}>
              <Text style={styles['title-seeAll']}> See All </Text>
            </TouchableOpacity>
          </View>
          <View style={styles['list-content-goodNew']}>
            <View>
              {News.map(item => (
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
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default MainApp;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
  'wrapper-text': {
    width: 250,
    padding: 16,
  },
  'title-text': {
    fontSize: 20,
    marginTop: 20,
    color: colors.primary,
  },
  content: {
    backgroundColor: colors.white,
    flex: 1,
  },
  'content-dokter-category': {
    paddingHorizontal: 16,
  },
  'cards-dokter-category': {
    flexDirection: 'row',
  },
  'label-content': {
    justifyContent: 'space-between',
    flexDirection: 'row',
    padding: 16,
    paddingHorizontal: -16,
  },
  'label-content-news': {
    justifyContent: 'space-between',
    flexDirection: 'row',
    marginTop: 20,
    marginBottom: 10,
    paddingHorizontal: 16,
  },
  'title-content': {
    fontSize: 18,
    fontFamily: 'Mukta-SemiBold',
    color: colors.primary,
  },
  'title-seeAll': {
    fontSize: 16,
    fontFamily: 'Mukta-SemiBold',
    color: colors.orange,
  },
  'content-topRatedDokter': {
    paddingHorizontal: 16,
    marginTop: 20,
  },
});
