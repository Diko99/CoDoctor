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

const dummGoodNews = [
  {
    id: 1,
    title: 'Manfaat Jeruk bagi kesehatan tubuh',
    desc:
      'Jeruk merupakan sebuah buah yang memiliki khasiat. Jeruk yang merupakan buah sitrus memiliki banyak kandungan vitamin C dan anti oksidan, yang meningkatkan sistem kekebalan tubuh dan membantu melawan infeksi dan flu. Kandungan phytochemicals dapat mencegah beberapa penyakit kanker. Mengutip Boldsky, berikut manfaat jeruk. 1. Melancarkan Pencernaan Sumber serat yang sangat baik larut dan tidak larut ada pada jeruk. Untuk itu, jeruk bagus untuk membuat perut Anda tetap sehat. Serat di dalamnya akan mengeluarkan kotoran sehingga mencegah sindrom iritasi usus besar. Jeruk pun bisa merangsang produksi cairan pencernaan serta memperbaiki pencernaan. Ini adalah cara paling enak untuk menghilangkan sembelit. 2. Mengatur Tekanan Darah Tinggi Jeruk adalah sumber magnesium yang kaya dan akan membantu mengatur tekanan darah. Flavonoid yang disebut hesperidin secara alami hadir dalam jeruk juga membuat tekanan darah terkendali. 3. Mencegah Kanker Kandungan vitamin C memiliki peran penting untuk mencegah terjadinya kanker. Senyawa yang disebut limonene, banyak ditemukan di jeruk memiliki sifat penghambat kanker. Senyawa ini bekerja dalam mendeteksi sel kanker dan menghancurkannya, tanpa memberi kesempatan untuk menyebar. 4. Mencegah Penyakit Jantung Antioksidan hadir dalam jeruk ini melawan kerusakan radikal bebas dan membantu mencegah oksidasi kolesterol. Kolesterol oksidisasi cenderung menempel di bagian dalam arteri dan membatasi suplai darah ke jantung. Hal itu dapat memicu serangan jantung. Namun serangan jantung ini bisa dicegah dengan anti ksidan yang ada di Jeruk. Kandungan ini membantu menetralisasikan efek radikal bebas dan melindungi jantung dari penyakit. 5. Meningkatkan Kekebalan Tubuh Jeruk penuh dengan vitamin C, yang dikenal sebagai kekebalan dengan meningkatkan vitamin. Bila kekebalan tubuh kita kuat, tubuh mampu melawan infeksi lebih baik dan mencegah penyakit. Selain itu, polifenol yang ada di dalamnya adalah antivirus untuk membunuh virus yang masuk ke dalam tubuh sebelum dapat menyebabkan infeksi. 6. Memurnikan Darah Jeruk adalah pembersih alami. Flavonoid yang ada di dalamnya dapan meningkatkan aktivitas enzim dalam tubuh dan membantu hati mengeluarkan racun. Vitamin C di dalamnya meningkatkan produksi kolagen, sehingga membuat kulit lebih elastis dan mengurangi tanda-tanda penuaan. Serat makanan di dalamnya membuat perut tetap bergerak, sehingga menghilangkan limbah dan zat yang tidak diinginkan keluar dari tubuh. 7. Memperkuat Tulang Semua makanan yang mengandung kalsium harus dipasangkan dengan makanan kaya vitamin D agar tubuh kita benar-benar menyerap kalsium dari makanan. Nah, jeruk memiliki cukup vitamin D, yang menjamin penyerapan kalsium secara tepat dan membantu mencapai tulang. Jeruk juga mengandung asam askorbat, yang membantu penyerapan kalsium dengan lebih baik. 8. Memperkuat Gigi Jeruk sangat baik dalam kesehatan gusi. Mereka memperkuat pembuluh darah dan jaringan pada gusi. Gigi pun juga mencegah perkembangan plak serta melapisi gigi di lapisan pelindung dan mencegah korosi. Vitamin C di dalamnya mengurangi peradangan dan juga membuat napas tetap segar lebih lama dengan membunuh bakteri yang berada di mulut 9. Mencegah Penyakit Ginjal Studi telah menemukan bahwa konsumsi jus jeruk secara teratur membantu mencegah batu ginjal. Pasalnya, jeruk dapat mengusir kelebihan sitrat dalam urin dan mengurangi keasamannya. Jeruk juga membantu fungsi ginjal dengan baik dengan mencegah tekanan darah tinggi dan mengendalikan kadar gula, mengurangi stres pada mereka. 10. Membantu Mencegah Asma Konsumsi jeruk secara teratur diketahui menurunkan frekuensi serangan asma. Sifat anti-inflamasi ini membantu mengurangi radang saluran napas. Serta juga menetralkan kerusakan oksidasi oleh radikal bebas karena diketahui meningkatkan peradangan dan menyebabkan asma. Flavonoid yang ada dalam jeruk mengurangi sensitivitas bronkial',
  },
];

export {
  Data,
  News,
  dataMessages,
  dataHospitals,
  listMenuProfile,
  dummyProfileDokter,
  dummGoodNews,
};
