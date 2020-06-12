import {
  ILNews1,
  ILNews2,
  ILNews3,
  ILHospital1,
  ILHospital2,
  ILHospital3,
  ILHospital4,
  ILHospital5,
} from '../../illustration';
import {DummyDokter1, DummyDokter2, DummyDokter3} from '../../dummy';

const Data = [
  {
    id: 1,
    title: 'Diko Mahendra',
    desc: 'Dokter Umum',
    photo: DummyDokter1,
  },
  {
    id: 2,
    title: 'Indri Lestari',
    desc: 'Dokter Anak',
    photo: DummyDokter2,
  },
  {
    id: 3,
    title: 'Mira Wiranti',
    desc: 'Dokter Kandungan',
    photo: DummyDokter3,
  },
];

const News = [
  {
    id: 1,
    title: 'Buah-buahan',
    desc: 'Apa manfaat mengkonsumsi Buah setiap hari ?',
    photo: ILNews1,
  },
  {
    id: 2,
    title: 'Sayur-sayuran',
    desc: 'Apa manfaat mengkonsumsi Sayur setiap hari ?',
    photo: ILNews2,
  },
  {
    id: 3,
    title: 'Daging',
    desc: 'Apa manfaat mengkonsumsi daging setiap hari ?',
    photo: ILNews3,
  },
];

const dataMessages = [
  {
    id: 1,
    title: 'Diko Mahendra',
    desc: 'Selamat siang dok, saya ing...',
    photo: DummyDokter1,
  },
  {
    id: 2,
    title: 'Indri Lestari',
    desc: 'Selamat siang dok, obat yan..',
    photo: DummyDokter2,
  },
  {
    id: 3,
    title: 'Mira Wiranti',
    desc: 'asalamualaikum dok...',
    photo: DummyDokter3,
  },
];

const dataHospitals = [
  {
    id: 1,
    title: 'Rumah Sakit',
    subtitle: 'Umum Pusat Fatmawati',
    desc: 'Jln. Jendral Ahmad Yani 91',
    photo: ILHospital1,
  },
  {
    id: 2,
    title: 'Rumah Sakit',
    subtitle: 'Dr. Cipto Mangunkusomo',
    desc: 'Jln. Jendral Ahmad Yani 91',
    photo: ILHospital2,
  },
  {
    id: 3,
    title: 'Rumah Sakit',
    subtitle: 'Jakarta Eye Center Kedoyo',
    desc: 'Jln. Jendral Ahmad Yani 91',
    photo: ILHospital3,
  },
  {
    id: 4,
    title: 'Rumah Sakit',
    subtitle: 'Gatot Soebroto',
    desc: 'Jln. Jendral Ahmad Yani 91',
    photo: ILHospital4,
  },
];

const listMenuProfile = [
  {
    id: 1,
    title: 'Edit Profile',
    desc: 'Last Update Yesterday',
    type: 'profile',
  },
  {
    id: 2,
    title: 'Languages',
    desc: 'Last Update Yesterday',
    type: 'profile',
  },
  {
    id: 3,
    title: 'Give Us Rated',
    desc: 'Last Update Yesterday',
    type: 'profile',
  },
  {
    id: 4,
    title: 'Sign Out',
    desc: 'Last Update Yesterday',
    type: 'profile',
  },
];

const dummyProfileDokter = [
  {
    id: 1,
    title: 'Alumnus',
    desc: 'Universitas Gadjah Duduk',
    type: 'docter-profile',
  },
  {
    id: 2,
    title: 'Tempat Praktik',
    desc: 'Rumah Sakit Dr. Cipto Mangunkusumo',
    type: 'docter-profile',
  },
  {
    id: 3,
    title: 'No. STR',
    desc: '1122109489091098120',
    type: 'docter-profile',
  },
];

export {
  Data,
  News,
  dataMessages,
  dataHospitals,
  listMenuProfile,
  dummyProfileDokter,
};
