import React from 'react';
import {StyleSheet, View} from 'react-native';
import {SecondHeader, List} from '../../components';
import {DummyDokter1, DummyDokter2, DummyDokter3} from '../../assets';
import { colors } from '../../utils';

const ChooseDocter = ({navigation}) => {
  return (
    <View style={styles.container}>
      <SecondHeader
        title="Pilih Dokter Umum"
        type="dark"
        onPress={() => navigation.goBack()}
      />
      <View style={styles.content}>
        <List
          type="docter"
          title="Dr. Diko Mahendra"
          desc="Dokter Umum"
          photo={DummyDokter1}
          onPress={() => navigation.navigate('DocterProfile')}
        />
        <List
          type="docter"
          title="Dr. Indri Lestari"
          desc="Dokter Umum"
          photo={DummyDokter2}
        />
        <List
          type="docter"
          title="Dr. Mira Wiranti"
          desc="Dokter Umum"
          photo={DummyDokter3}
        />
      </View>
    </View>
  );
};

export default ChooseDocter;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
  content: {
    padding: 16,
  },
});
