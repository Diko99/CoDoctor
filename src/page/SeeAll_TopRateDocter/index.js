import React from 'react';
import {StyleSheet, Text, View, ScrollView} from 'react-native';
import {colors} from '../../utils';
import {List, MainSearch} from '../../components';
import {dummyDataAllRatedDocter} from '../../assets';

const SeeAllTopRatedDocter = ({navigation}) => {
  return (
    <View style={styles.container}>
      <MainSearch placeholder="Cari info seputar kesehatan" type="seeAll" />
      <Text style={styles.title}>Top Rated Docter</Text>
      <ScrollView>
        <View style={styles.content}>
          {dummyDataAllRatedDocter.map(item => (
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
      </ScrollView>
    </View>
  );
};

export default SeeAllTopRatedDocter;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
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
