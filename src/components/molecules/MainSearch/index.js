import React from 'react';
import {Text, StyleSheet, View} from 'react-native';
import {Input} from '../../../components';
import {colors} from '../../../utils';

const MainSearch = () => {
  return (
    <View style={styles.search}>
      <View style={styles['wrapper_content-search']}>
        <Text style={styles['title-search']}> Cari Dokter </Text>
      </View>
      <Input title="Cari sesuai nama, spesialist" type="form-search" light />
    </View>
  );
};

export default MainSearch;

const styles = StyleSheet.create({
  search: {
    backgroundColor: colors.primary,
    paddingHorizontal: 16,
    paddingVertical: 20,
    paddingBottom: 10,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
  'wrapper_content-search': {
    marginBottom: 10,
  },
  'title-search': {
    color: colors.white,
    fontSize: 18,
    fontFamily: 'Mukta-SemiBold',
  },
});
