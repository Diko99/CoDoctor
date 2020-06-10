import React, {useEffect} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {colors} from '../../utils';
import {Logo} from '../../assets';

const SplashScreen = ({navigation}) => {
  useEffect(() => {
    setTimeout(() => {
      navigation.replace('GetStarted');
    }, 3000);
  }, [navigation]);

  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Logo />
        <Text style={styles.text}>CoApp</Text>
      </View>
    </View>
  );
};

export default SplashScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1E1939',
    justifyContent: 'center',
    alignItems: 'center',
  },
  content: {
    alignItems: 'center',
  },
  text: {
    color: colors.white,
    fontSize: 24,
    fontFamily: 'Mukta-Bold',
  },
});
