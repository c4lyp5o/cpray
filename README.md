# CPRAY

[![CI & Publish](https://github.com/c4lyp5o/cpray/actions/workflows/ci-coverage-publish.yml/badge.svg)](https://github.com/c4lyp5o/cpray/actions/workflows/ci-coverage-publish.yml)
[![codecov](https://codecov.io/gh/c4lyp5o/cpray/graph/badge.svg?token=QMOMM22SVB)](https://codecov.io/gh/c4lyp5o/cpray)
[![npm version](https://img.shields.io/npm/v/cpray)](https://www.npmjs.com/package/cpray)
[![npm downloads](https://img.shields.io/npm/dm/cpray)](https://www.npmjs.com/package/cpray)
[![package size](https://img.shields.io/npm/unpacked-size/cpray)](https://www.npmjs.com/package/cpray?activeTab=code)
[![node](https://img.shields.io/node/v/cpray)](https://www.npmjs.com/package/cpray)
[![license](https://img.shields.io/github/license/c4lyp5o/cpray)](LICENSE)

# Module to retrieve prayer times from the official JAKIM Malaysia website

> إِنَّ الصَّلَاةَ كَانَتْ عَلَى الْمُؤْمِنِينَ كِتَابًا مَوْقُوتًا - سورة النساء 4:103

> Indeed, prayer has been decreed upon the believers a decree of specified times - Surah An-Nisa 4:103

This module retrieves prayer times from the official JAKIM website (e-solat) and returns the data as a JSON object. If e-solat is down or returns no data, it automatically falls back to [waktusolat.me](https://waktusolat.me) and normalizes that response into the same format.

Requires **Node.js 18 or newer**. No runtime dependencies.

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
import Cpray from 'cpray';
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

## Response format

Every method resolves to the same shape, whether the data came from e-solat or the fallback:

```json
{
  "prayerTime": [
    {
      "hijri": "1448-05-14",
      "date": "25-Okt-2026",
      "day": "Sunday",
      "imsak": "05:45:00",
      "fajr": "05:55:00",
      "syuruk": "07:03:00",
      "dhuha": "07:30:00",
      "dhuhr": "13:05:00",
      "asr": "16:24:00",
      "maghrib": "19:02:00",
      "isha": "20:12:00"
    }
  ],
  "status": "OK!",
  "serverTime": "2026-10-25 01:34:28",
  "periodType": "today",
  "lang": "ms_my",
  "zone": "KDH01",
  "bearing": "291&#176; 5&#8242; 39&#8243;"
}
```

Dates use Malay month abbreviations (`Jan Feb Mac Apr Mei Jun Jul Ogos Sep Okt Nov Dis`), as e-solat does. `bearing` is the qibla direction, HTML-encoded. The fallback does not provide dhuha, so on fallback responses it is calculated as syuruk + 27 minutes (e-solat uses 27–28 minutes depending on the zone).

## Errors

The module will throw an error in the following scenarios:

- **The zone is not specified or invalid**: Each method of the `Cpray` class requires a `zone` parameter, which should be a string representing a valid zone. The valid zones are hardcoded in the module. If the `zone` parameter is not provided, or if it's not included in the list of valid zones, the method will throw an error with the message 'Invalid zone: {zone}'.

- **Both the main and fallback URLs are down**: The `Cpray` class uses two URLs to fetch prayer times: a main URL and a fallback URL. Each request times out after 10 seconds and is retried up to 2 times. If the main URL fails (server down, timeout, HTTP error, or a non-`OK!` status such as `NO_RECORD!`), the class automatically tries the fallback URL. If both fail, the method throws an error with the message 'Server error. Sila cuba lagi.'. The underlying failure is available as `error.cause`.

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

The tests use [Vitest](https://vitest.dev/) with a mocked `fetch`, so they make no network calls. They cover the primary API, every fallback trigger (network error, HTTP error, non-`OK!` status), fallback normalization for each period, total failure, invalid zones, and the date/time helpers.

Developing requires Node.js 22.12 or newer (for Vitest 5). Then run:

```bash
npm install
npm test        # tests + coverage report
npm run build   # bundles to dist/
```
