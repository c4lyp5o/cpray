# CPRAY
## Module to retrieve prayer times from official JAKI Malaysia homepage (e-solat)

> إِنَّ الصَّلَاةَ كَانَتْ عَلَى الْمُؤْمِنِينَ كِتَابًا مَوْقُوتًا

> Indeed, prayer has been decreed upon the believers a decree of specified times.

This is a module to retrieve prayer times from official JAKIM website (e-solat). It will output data as a JSON object. It will also output a list of prayer times in a human-readable format.

# **Usage**

> npm install cpray

In your code, use the module like this:

> const Cpray = require('cpray');

and create an instance of the class like this:

> const cpray = new CPray();


# **Functions**

There are 3 functions that can be used to retrieve prayer times:
1. getTimesbyWeek(zone)
2. getTimesbyMonth(zone)
3. getTimesbyYear(zone)

The zones are:

## 1. Kedah
KDH01 = KOTA SETAR, POKOK SENA DAN KUBANG PASU

KDH02 = KUALA MUDA, PENDANG DAN YAN

KDH03 = PADANG TERAP DAN SIK

KDH04 = BALING

KDH05 = KULIM DAN BANDAR BAHARU

KDH06 = LANGKAWI

KDH07 = GUNUNG JERAI

## 2. Melaka
MLK01 = SELURUH NEGERI MELAKA

## 3. Negeri Sembilan
NGS01 = JEMPOL DAN TAMPIN
NGS02 = PORT DICKSON, SEREMBAN, KUALA PILAH, JELEBU DAN REMBAU

## 4. Pahang
PHG01 = PULAU TIOMAN
PHG02 = ROMPIN, PEKAN, MUADZAM SHAH DAN KUANTAN
PHG03 = MARAN, CHENOR, TEMERLOH, BERA, JENGKA DAN JERANTUT
PHG04 = BENTONG, RAUB DAN LIPIS
PHG05 = BUKIT TINGGI, GENTING SEMPAH, DAN JANDA BAIK
PHG06 = CAMERON HIGHLANDS, BUKIT FRASER DAN GENTING HIGHLANDS

## 5. Perak
PRK01 = TAPAH, SLIM RIVER DAN TANJUNG MALIM
PRK02 = IPOH, BATU GAJAH, KAMPAR, SG. SIPUT DAN KUALA KANGSAR
PRK03 = PENGKALAN HULU, GERIK DAN LENGGONG
PRK04 = TEMENGOR DAN BELUM
PRK05 = TELUK INTAN, BAGAN DATUK, KG. GAJAH, SERI ISKANDAR, BERUAS, PARIT, LUMUT, SITIAWAN DAN PULAU PANGKOR.
PRK06 = SELAMA, TAIPING, BAGAN SERAI DAN PARIT BUNTAR
PRK07 = BUKIT LARUT

## 6. Perlis
PLS01 = SELURUH NEGERI PERLIS

## 7. Pulau Pinang
PNG01 = SELURUH NEGERI PULAU PINANG

## 8. Selangor
SGR01 = HULU SELANGOR, GOMBAK, PETALING/SHAH ALAM, HULU LANGAT DAN SEPANG
SGR02 = SABAK BERNAM DAN KUALA SELANGOR
SGR03 = KLANG DAN KUALA LANGAT 

## 9. Terengganu
TRG01 = KUALA TERENGGANU, MARANG DAN KUALA NERUS
TRG02 = BESUT DAN SETIU
TRG03 = HULU TERENGGANU
TRG04 = DUNGUN DAN KEMAMAN

## 10. Johor
JHR01 = PULAU AUR DAN PULAU PEMANGGIL
JHR02 = KOTA TINGGI, MERSING DAN JOHOR BAHRU
JHR03 = KLUANG DAN PONTIAN
JHR04 = BATU PAHAT, MUAR, SEGAMAT DAN GEMAS JOHOR

## 11. Kelantan
KTN01 = JAJAHAN KOTA BHARU, BACHOK, PASIR PUTEH, TUMPAT , PASIR MAS, TANAH MERAH, MACHANG KUALA KRAI DAN GUA MUSANG (DAERAH CHIKU)
KTN03 <- (THIS IS NOT A TYPO) = JAJAHAN JELI, GUA MUSANG (DAERAH GALAS DAN BERTAM) DAN JAJAHAN KECIL LOJING

## 12. Sabah
SBH01 = BAHAGIAN SANDAKAN (TIMUR) BANDAR SANDAKAN, BUKIT GARAM, SEMAWANG, TEMANGGONG DAN TAMBISAN
SBH02 = BAHAGIAN SANDAKAN (BARAT) PINANGAH, TERUSAN, BELURAN, KUAMUT DAN TELUPID
SBH03 = BAHAGIAN TAWAU (TIMUR) LAHAD DATU, KUNAK, SILABUKAN, TUNGKU, SAHABAT, DAN SEMPORNA
SBH04 = BAHAGIAN TAWAU (BARAT), BANDAR TAWAU, BALONG, MEROTAI DAN KALABAKAN
SBH05 = BAHAGIAN KUDAT KUDAT, KOTA MARUDU, PITAS DAN PULAU BANGGI
SBH06 = GUNUNG KINABALU
SBH07 = BAHAGIAN PANTAI BARAT KOTA KINABALU, PENAMPANG, TUARAN, PAPAR, KOTA BELUD, PUTATAN DAN RANAU
SBH08 = BAHAGIAN PEDALAMAN (ATAS) PENSIANGAN, KENINGAU, TAMBUNAN DAN NABAWAN
SBH09 = BAHAGIAN PEDALAMAN (BAWAH) SIPITANG, MEMBAKUT, BEAUFORT, KUALA PENYU, WESTON, TENOM DAN LONG PA SIA

## 13. Sarawak
SWK01 = LIMBANG, SUNDAR, TRUSAN DAN LAWAS
SWK02 = NIAH, SIBUTI, MIRI, BEKENU DAN MARUDI
SWK03 = TATAU, SUAI, BELAGA, PANDAN, SEBAUH, BINTULU
SWK04 = IGAN, KANOWIT, SIBU, DALAT, OYA, BALINGIAN, MUKAH, KAPIT DAN SONG
SWK05 = BELAWAI, MATU, DARO, SARIKEI, JULAU, BINTANGOR DAN RAJANG
SWK06 = KABONG, LINGGA, SRI AMAN, ENGKELILI, BETONG, SPAOH, PUSA, SARATOK, ROBAN, DEBAK DAN LUBOK ANTU
SWK07 = SAMARAHAN, SIMUNJAN, SERIAN, SEBUYAU DAN MELUDAM
SWK08 = KUCHING, BAU, LUNDU DAN SEMATAN
SWK09 = KAMPUNG PATARIKAN

## 14. Wilayah Persekutuan
WLY01 = KUALA LUMPUR DAN PUTRAJAYA
WLY02 = LABUAN

# **Example**

> const Cpray = require('cpray');

> const cpray = new Cpray();

> cpray.getTimesbyWeek(KDH01); -> Returns an array of prayer times for the week of KDH01 in JSON format
