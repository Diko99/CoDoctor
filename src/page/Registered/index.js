import React, {useState} from 'react';
import {
  Text,
  StyleSheet,
  View,
  ImageBackground,
  ScrollView,
} from 'react-native';
import {ILBackgroundLight} from '../../assets';
import {Input, Button, Gap, Link, Loading} from '../../components';
import {useForm, storeData} from '../../utils';
import {Firebase} from '../../config';
import {showMessage} from 'react-native-flash-message';

const Registered = ({navigation}) => {
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useForm({
    fullName: '',
    profession: '',
    email: '',
    password: '',
  });
  const onContinue = () => {
    setLoading(true);
    Firebase.auth()
      .createUserWithEmailAndPassword(form.email, form.password)
      .then(success => {
        setForm('reset');
        setLoading(false);
        const data = {
          fullName: form.fullName,
          profession: form.profession,
          email: form.email,
        };
        Firebase.database()
          .ref('users/' + success.user.uid + '/')
          .set(data);
        storeData('user', data);
        navigation.navigate('UploadPhoto', data);
        console.log('success', success);
      })
      .catch(error => {
        showMessage({
          message: error.message,
          type: 'default',
          backgroundColor: '#cc2d45',
        });
        console.log('failed!', error);
        setLoading(false);
      });
  };
  return (
    <>
      <ImageBackground source={ILBackgroundLight} style={styles.container}>
        <View style={styles.content}>
          <Text style={styles.title}>Create new account</Text>
          <ScrollView showsVerticalScrollIndicator={false}>
            <Input
              onChangeText={value => setForm('fullName', value)}
              value={form.fullName}
              title="Nama Lengkap"
              light
            />
            <Gap height={15} />
            <Input
              onChangeText={value => setForm('profession', value)}
              value={form.profession}
              title="Pekerjaan"
              light
            />
            <Gap height={15} />
            <Input
              onChangeText={value => setForm('email', value)}
              value={form.email}
              title="Email"
              light
            />
            <Gap height={15} />
            <Input
              onChangeText={value => setForm('password', value)}
              value={form.password}
              title="Password"
              light
              secureTextEntry
            />
            <Button title="Mendaftar" type="register" onPress={onContinue} />
          </ScrollView>
        </View>
        <Link
          title="Sudah memiliki akun ?  Masuk"
          type="dark"
          onPress={() => navigation.navigate('Login')}
        />
      </ImageBackground>
      {loading && <Loading />}
    </>
  );
};

export default Registered;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 40,
  },
  content: {
    marginTop: 50,
  },
  title: {
    fontSize: 24,
    width: 150,
    fontFamily: 'Mukta-SemiBold',
    marginBottom: 30,
  },
});
