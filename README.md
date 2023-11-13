# CPRAY

# Module to retrieve prayer times from the official JAKI Malaysia website

> إِنَّ الصَّلَاةَ كَانَتْ عَلَى الْمُؤْمِنِينَ كِتَابًا مَوْقُوتًا - سورة النساء 4:103

> Indeed, prayer has been decreed upon the believers a decree of specified times - Surah An-Nisa 4:103

This module retrieves prayer times from the official JAKIM website (e-solat) and returns the data as a JSON object. It also provides a human-readable format for the prayer times. Starting from version 1.2.0, a fallback URL (https://api.waktusolat.me) has been added to ensure reliability even if the main URL is down.

## **Functions**

There are 4 functions that can be used to retrieve prayer times:

```javascript
getTimesToday(zone); // Returns prayer times for today
```

```javascript
getTimesbyWeek(zone); // Returns prayer times for the week
```

```javascript
getTimesbyMonth(zone); // Returns prayer times for the month
```

```javascript
getTimesbyYear(zone); // Returns prayer times for the year
```

## **Zones**

The zones are:

### 1. Kedah

- KDH01: KOTA SETAR, POKOK SENA DAN KUBANG PASU
- KDH02: KUALA MUDA, PENDANG DAN YAN
- KDH03: PADANG TERAP DAN SIK
- KDH04: BALING
- KDH05: KULIM DAN BANDAR BAHARU
- KDH06: LANGKAWI
- KDH07: GUNUNG JERAI

### 2. Melaka

- MLK01: SELURUH NEGERI MELAKA

### 3. Negeri Sembilan

- NGS01: JEMPOL DAN TAMPIN
- NGS02: PORT DICKSON, SEREMBAN, KUALA PILAH, JELEBU DAN REMBAU

### 4. Pahang

- PHG01: PULAU TIOMAN
- PHG02: ROMPIN, PEKAN, MUADZAM SHAH DAN KUANTAN
- PHG03: MARAN, CHENOR, TEMERLOH, BERA, JENGKA DAN JERANTUT
- PHG04: BENTONG, RAUB DAN LIPIS
- PHG05: BUKIT TINGGI, GENTING SEMPAH, DAN JANDA BAIK
- PHG06: CAMERON HIGHLANDS, BUKIT FRASER DAN GENTING HIGHLANDS

### 5. Perak

- PRK01: TAPAH, SLIM RIVER DAN TANJUNG MALIM
- PRK02: IPOH, BATU GAJAH, KAMPAR, SG. SIPUT DAN KUALA KANGSAR
- PRK03: PENGKALAN HULU, GERIK DAN LENGGONG
- PRK04: TEMENGOR DAN BELUM
- PRK05: TELUK INTAN, BAGAN DATUK, KG. GAJAH, SERI ISKANDAR, BERUAS, PARIT, LUMUT, SITIAWAN DAN PULAU PANGKOR.
- PRK06: SELAMA, TAIPING, BAGAN SERAI DAN PARIT BUNTAR
- PRK07: BUKIT LARUT

### 6. Perlis

- PLS01: SELURUH NEGERI PERLIS

### 7. Pulau Pinang

- PNG01: SELURUH NEGERI PULAU PINANG

### 8. Selangor

- SGR01: HULU SELANGOR, GOMBAK, PETALING/SHAH ALAM, HULU LANGAT DAN SEPANG
- SGR02: SABAK BERNAM DAN KUALA SELANGOR
- SGR03: KLANG DAN KUALA LANGAT

### 9. Terengganu

- TRG01: KUALA TERENGGANU, MARANG DAN KUALA NERUS
- TRG02: BESUT DAN SETIU
- TRG03: HULU TERENGGANU
- TRG04: DUNGUN DAN KEMAMAN

### 10. Johor

- JHR01: PULAU AUR DAN PULAU PEMANGGIL
- JHR02: KOTA TINGGI, MERSING DAN JOHOR BAHRU
- JHR03: KLUANG DAN PONTIAN
- JHR04: BATU PAHAT, MUAR, SEGAMAT DAN GEMAS JOHOR

### 11. Kelantan

- KTN01: JAJAHAN KOTA BHARU, BACHOK, PASIR PUTEH, TUMPAT , PASIR MAS, TANAH MERAH, MACHANG KUALA KRAI DAN GUA MUSANG (DAERAH CHIKU)
- KTN03: (THIS IS NOT A TYPO) JAJAHAN JELI, GUA MUSANG (DAERAH GALAS DAN BERTAM) DAN JAJAHAN KECIL LOJING

### 12. Sabah

- SBH01: BAHAGIAN SANDAKAN (TIMUR) BANDAR SANDAKAN, BUKIT GARAM, SEMAWANG, TEMANGGONG DAN TAMBISAN
- SBH02: BAHAGIAN SANDAKAN (BARAT) PINANGAH, TERUSAN, BELURAN, KUAMUT DAN TELUPID
- SBH03: BAHAGIAN TAWAU (TIMUR) LAHAD DATU, KUNAK, SILABUKAN, TUNGKU, SAHABAT, DAN SEMPORNA
- SBH04: BAHAGIAN TAWAU (BARAT), BANDAR TAWAU, BALONG, MEROTAI DAN KALABAKAN
- SBH05: BAHAGIAN KUDAT KUDAT, KOTA MARUDU, PITAS DAN PULAU BANGGI
- SBH06: GUNUNG KINABALU
- SBH07: BAHAGIAN PANTAI BARAT KOTA KINABALU, PENAMPANG, TUARAN, PAPAR, KOTA BELUD, PUTATAN DAN RANAU
- SBH08: BAHAGIAN PEDALAMAN (ATAS) PENSIANGAN, KENINGAU, TAMBUNAN DAN NABAWAN
- SBH09: BAHAGIAN PEDALAMAN (BAWAH) SIPITANG, MEMBAKUT, BEAUFORT, KUALA PENYU, WESTON, TENOM DAN LONG PA SIA

### 13. Sarawak

- SWK01: LIMBANG, SUNDAR, TRUSAN DAN LAWAS
- SWK02: NIAH, SIBUTI, MIRI, BEKENU DAN MARUDI
- SWK03: TATAU, SUAI, BELAGA, PANDAN, SEBAUH, BINTULU
- SWK04: IGAN, KANOWIT, SIBU, DALAT, OYA, BALINGIAN, MUKAH, KAPIT DAN SONG
- SWK05: BELAWAI, MATU, DARO, SARIKEI, JULAU, BINTANGOR DAN RAJANG
- SWK06: KABONG, LINGGA, SRI AMAN, ENGKELILI, BETONG, SPAOH, PUSA, SARATOK, ROBAN, DEBAK DAN LUBOK ANTU
- SWK07: SAMARAHAN, SIMUNJAN, SERIAN, SEBUYAU DAN MELUDAM
- SWK08: KUCHING, BAU, LUNDU DAN SEMATAN
- SWK09: KAMPUNG PATARIKAN

### 14. Wilayah Persekutuan

- WLY01: KUALA LUMPUR DAN PUTRAJAYA
- WLY02: LABUAN

## **Usage**

Install the module with npm:

```bash
npm install cpray
```

Require the `Cpray` class and create a new instance:

```javascript
const Cpray = require('cpray');
const cpray = new Cpray();
```

You can then use the instance to get prayer times. Here's an example of getting the prayer times for a week for the 'KDH01' zone using async/await:

```javascript
async function getPrayerTimes() {
  try {
    const times = await cpray.getTimesbyWeek('KDH01');
    console.log(times);
  } catch (error) {
    console.error(error);
  }
}

getPrayerTimes();
```

And here's the same example using .then/.catch:

```javascript
cpray
  .getTimesbyWeek('KDH01')
  .then((times) => {
    console.log(times);
  })
  .catch((error) => {
    console.error(error);
  });
```

Please note, the zone is not case sensitive. You can use either 'KDH01' or 'kdh01' or 'Kdh01' or even 'kDh01' or 'kdH01' (if you must).

## Errors

The module will throw an error in the following scenarios:

- **The zone is not specified or invalid**: Each method of the `Cpray` class requires a `zone` parameter, which should be a string representing a valid zone. The valid zones are hardcoded in the module. If the `zone` parameter is not provided, or if it's not included in the list of valid zones, the method will throw an error with the message 'Invalid zone: {zone}'.

- **Both the main and fallback URLs are down**: The `Cpray` class uses two URLs to fetch prayer times: a main URL and a fallback URL. If the main URL fails (for example, if the server is down or the request times out), the class will automatically try the fallback URL. If both URLs fail, the method will throw an error with the message 'Both main and fallback URLs failed'. This ensures that the class can still return prayer times even if one of the URLs is down, but it also means that it's dependent on at least one of the URLs being up.

## Promises and Async/Await

The methods of the `Cpray` class return Promises, which are objects representing the eventual completion or failure of an asynchronous operation.

### Promises

You can use the `.then` method to handle the result of a Promise:

```javascript
cpray
  .getTimesToday('KDH01')
  .then((timesToday) => {
    console.log(timesToday);
  })
  .catch((error) => {
    console.error('Failed to fetch prayer times:', error.message);
  });
```

### Async/Await

You can also use the async/await syntax to handle Promises in a way that resembles synchronous code:

```javascript
async function fetchPrayerTimes() {
  try {
    const timesToday = await cpray.getTimesToday('KDH01');
    console.log(timesToday);
  } catch (error) {
    console.error('Failed to fetch prayer times:', error.message);
  }
}

fetchPrayerTimes();
```

## Testing

The `Cpray` class comes with a suite of tests to ensure its methods work as expected. These tests cover various scenarios, including successful requests, failed requests, the use of both the main and fallback URLs and the use of valid and invalid zones.

To run the tests, you need to have [Jest](https://jestjs.io/) installed. If you don't have Jest installed, you can install it with npm:

```bash
npm install --save-dev jest
```

Once Jest is installed, you can run the tests with the following command:

```bash
npm test
```

The tests ensure that the `Cpray` class handles Promises and errors correctly using async/await syntax, as well as `.then` and `.catch`. They also use `try-catch` blocks for error handling. Special attention is given to scenarios where an invalid zone is provided. The `Cpray` class methods require a `zone` parameter, representing a valid zone. These zones are hardcoded in the module. If an invalid `zone` is provided, the method will throw an error with the message 'Invalid zone: {zone}'.
