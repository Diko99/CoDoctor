import React from 'react';
import {StyleSheet, Text, View, ScrollView} from 'react-native';
import {colors} from '../../utils';
import {DocterCategory, MainSearch} from '../../components';

const SeeAllDocterCategory = ({navigation}) => {
  return (
    <View style={styles.container}>
      <MainSearch placeholder="Cari Dokter" type="seeAll" />
      <Text style={styles.title}>Pilih Kategori Dokter</Text>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.content}>
          <DocterCategory
            onPress={() => navigation.replace('ChooseDocter')}
            type="seeAll"
            title="Dokter Umum"
          />
          <DocterCategory
            onPress={() => navigation.replace('ChooseDocter')}
            type="seeAll"
            title="Dokter Anak"
          />
          <DocterCategory
            onPress={() => navigation.replace('ChooseDocter')}
            type="seeAll"
            title="Dokter Obat"
          />
          <DocterCategory
            onPress={() => navigation.replace('ChooseDocter')}
            type="seeAll"
            title="Dokter Gigi"
          />
          <DocterCategory
            onPress={() => navigation.replace('ChooseDocter')}
            type="seeAll"
            title="Dr.Kandungan"
          />
          <DocterCategory
            onPress={() => navigation.replace('ChooseDocter')}
            type="seeAll"
            title="Dokter Bedah"
          />
          <DocterCategory
            onPress={() => navigation.replace('ChooseDocter')}
            type="seeAll"
            title="Psikiater"
          />
          <DocterCategory
            onPress={() => navigation.replace('ChooseDocter')}
            type="seeAll"
            title="Psikilog"
          />
          <DocterCategory
            onPress={() => navigation.replace('ChooseDocter')}
            type="seeAll"
            title="Dokter Hewan"
          />
          <DocterCategory
            onPress={() => navigation.replace('ChooseDocter')}
            type="seeAll"
            title="Ilmuan"
          />
          <DocterCategory
            onPress={() => navigation.replace('ChooseDocter')}
            type="seeAll"
            title="Ruqyah"
          />
          <DocterCategory
            onPress={() => navigation.replace('ChooseDocter')}
            type="seeAll"
            title="Psikilog"
          />
          <DocterCategory
            onPress={() => navigation.replace('ChooseDocter')}
            type="seeAll"
            title="Dokter Hewan"
          />
          <DocterCategory
            onPress={() => navigation.replace('ChooseDocter')}
            type="seeAll"
            title="Ilmuan"
          />
          <DocterCategory
            onPress={() => navigation.replace('ChooseDocter')}
            type="seeAll"
            title="Ruqyah"
          />
        </View>
      </ScrollView>
    </View>
  );
};

export default SeeAllDocterCategory;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
    justifyContent: 'center',
    paddingTop: 20,
  },
  content: {
    flexWrap: 'wrap',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
  title: {
    paddingVertical: 16,
    paddingHorizontal: 20,
    color: colors.primary,
    fontSize: 18,
    fontFamily: 'Mukta-SemiBold',
  },
});
