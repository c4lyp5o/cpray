/**
 * An array of valid zones, each representing a specific region with its associated details.
 *
 * @typedef {Object} Zone
 * @property {string} zone - The unique identifier for the zone.
 * @property {string} negeri - The state or region the zone belongs to.
 * @property {string} label - A descriptive label for the zone.
 * @property {string|undefined} bearing - The bearing information for the zone, represented as a string or undefined if not available.
 *
 * @constant {Zone[]} validZones
 */
export const validZones = [
  {
    zone: 'KDH01',
    negeri: 'Kedah',
    label: 'KOTA SETAR, POKOK SENA DAN KUBANG PASU',
    bearing: '291&#176; 5&#8242; 39&#8243;',
  },
  {
    zone: 'KDH02',
    negeri: 'Kedah',
    label: 'KUALA MUDA, PENDANG DAN YAN',
    bearing: '291&#176; 7&#8242; 23&#8243;',
  },
  {
    zone: 'KDH03',
    negeri: 'Kedah',
    label: 'PADANG TERAP DAN SIK',
    bearing: '291&#176; 10&#8242; 23&#8243;',
  },
  {
    zone: 'KDH04',
    negeri: 'Kedah',
    label: 'BALING',
    bearing: '291&#176; 7&#8242; 48&#8243;',
  },
  {
    zone: 'KDH05',
    negeri: 'Kedah',
    label: 'KULIM DAN BANDAR BAHARU',
    bearing: '219',
  },
  {
    zone: 'KDH06',
    negeri: 'Kedah',
    label: 'LANGKAWI',
    bearing: undefined,
  },
  {
    zone: 'KDH07',
    negeri: 'Kedah',
    label: 'GUNUNG JERAI',
    bearing: undefined,
  },
  {
    zone: 'MLK01',
    negeri: 'Melaka',
    label: 'MELAKA',
    bearing: '292&#176; 50&#8242; 49&#8243;',
  },
  {
    zone: 'NGS01',
    negeri: 'Negeri Sembilan',
    label: 'JEMPOL DAN KUALA PILAH',
    bearing: '292&#176; 33&#8242; 31&#8243;',
  },
  {
    zone: 'NGS02',
    negeri: 'Negeri Sembilan',
    label: 'JELEBU, SEREMBAN, PORT DICKSON DAN REMBAU',
    bearing: '292&#176; 48&#8242; 18&#8243;',
  },
  {
    zone: 'PHG01',
    negeri: 'Pahang',
    label: 'KUANTAN, PEKAN, ROMPIN DAN MUADZAM SHAH',
    bearing: '292&#176; 22&#8242; 32&#8243;',
  },
  {
    zone: 'PHG02',
    negeri: 'Pahang',
    label: 'TEMERLOH, MARAN, BERA, CHENOR DAN JENGKA',
    bearing: '292&#176; 24&#8242; 36&#8243;',
  },
  {
    zone: 'PHG03',
    negeri: 'Pahang',
    label: 'BENTONG, RAUB DAN LIPIS',
    bearing: '292&#176; 19&#8242; 16&#8243;',
  },
  {
    zone: 'PHG04',
    negeri: 'Pahang',
    label: 'GENTING SEMPAH, JANDA BAIK DAN BUKIT TINGGI',
    bearing: '292&#176; 7&#8242; 27&#8243;',
  },
  {
    zone: 'PHG05',
    negeri: 'Pahang',
    label: 'CAMERON HIGHLANDS',
    bearing: '292&#176; 15&#8242; 10&#8243;',
  },
  {
    zone: 'PHG06',
    negeri: 'Pahang',
    label: 'PULAU TIOMAN',
    bearing: '291&#176; 55&#8242; 59&#8243;',
  },
  {
    zone: 'PRK01',
    negeri: 'Perak',
    label: 'TAPAH, SLIM RIVER DAN TANJUNG MALIM',
    bearing: '291&#176; 50&#8242; 6&#8243;',
  },
  {
    zone: 'PRK02',
    negeri: 'Perak',
    label: 'KUALA KANGSAR DAN LENGGONG',
    bearing: '291&#176; 42&#8242;',
  },
  {
    zone: 'PRK03',
    negeri: 'Perak',
    label: 'TAIPING, BAGAN SERAI DAN PARIT BUNTAR',
    bearing: '291&#176; 48&#8242; 0&#8243;',
  },
  {
    zone: 'PRK04',
    negeri: 'Perak',
    label: 'TELOK INTAN DAN KAMPAR',
    bearing: undefined,
  },
  {
    zone: 'PRK05',
    negeri: 'Perak',
    label: 'IPOH, BATU GAJAH DAN KUALA KANGSAR',
    bearing: undefined,
  },
  {
    zone: 'PRK06',
    negeri: 'Perak',
    label: 'SELAMA, LARUT DAN MATANG',
    bearing: undefined,
  },
  {
    zone: 'PRK07',
    negeri: 'Perak',
    label: 'BUKIT LARUT',
    bearing: undefined,
  },
  {
    zone: 'PLS01',
    negeri: 'Perlis',
    label: 'PERLIS',
    bearing: '291&#176; 2&#8242; 45&#8243;',
  },
  {
    zone: 'PNG01',
    negeri: 'Pulau Pinang',
    label: 'PULAU PINANG',
    bearing: '291&#176; 34&#8242; 37&#8243;',
  },
  {
    zone: 'SGR01',
    negeri: 'Selangor',
    label: 'GOMBAK, PETALING, SEPANG, HULU LANGAT, HULU SELANGOR DAN SHAH ALAM',
    bearing: '291&#176; 7&#8242; 23&#8243;',
  },
  {
    zone: 'SGR02',
    negeri: 'Selangor',
    label: 'KUALA SELANGOR DAN SABAK BERNAM',
    bearing: '292&#176; 20&#8242; 35&#8243;',
  },
  {
    zone: 'SGR03',
    negeri: 'Selangor',
    label: 'KLANG DAN KUALA LANGAT',
    bearing: '292&#176; 31&#8242; 16&#8243;',
  },
  {
    zone: 'TRG01',
    negeri: 'Terengganu',
    label: 'KUALA TERENGGANU, MARANG DAN KUALA NERUS',
    bearing: '291&#176; 23&#8242; 2&#8243;',
  },
  {
    zone: 'TRG02',
    negeri: 'Terengganu',
    label: 'BESUT DAN SETIU',
    bearing: '291&#176; 21&#8242;  20&#8243;',
  },
  {
    zone: 'TRG03',
    negeri: 'Terengganu',
    label: 'HULU TERENGGANU',
    bearing: '291&#176; 32&#8242; 40&#8243;',
  },
  {
    zone: 'TRG04',
    negeri: 'Terengganu',
    label: 'DUNGUN DAN KEMAMAN',
    bearing: '291&#176; 44&#8242; 46&#8243;',
  },
  {
    zone: 'JHR01',
    negeri: 'Johor',
    label: 'PULAU AUR DAN PULAU PEMANGGIL',
    bearing: '292&#176; 25&#8242; 40&#8243;',
  },
  {
    zone: 'JHR02',
    negeri: 'Johor',
    label: 'JOHOR BAHRU, KOTA TINGGI DAN MERSING',
    bearing: '292&#176; 54&#8242; 30&#8243;',
  },
  {
    zone: 'JHR03',
    negeri: 'Johor',
    label: 'PONTIAN DAN KLUANG',
    bearing: '292&#176; 59&#8242; 18&#8243;',
  },
  {
    zone: 'JHR04',
    negeri: 'Johor',
    label: 'BATU PAHAT, MUAR, SEGAMAT DAN GEMAS JOHOR',
    bearing: '292&#176;  49&#8242;',
  },
  {
    zone: 'KTN01',
    negeri: 'Kelantan',
    label:
      'KOTA BHARU, BACHOK, PASIR PUTEH, TUMPAT, PASIR MAS, TANAH MERAH, MACHANG, KUALA KRAI DAN MUKIM CHIKU',
    bearing: '291&#176; 6&#8242;',
  },
  {
    zone: 'KTN03',
    negeri: 'Kelantan',
    label: 'GUA MUSANG DAN JELI',
    bearing: '291&#176; 40&#8242; 41&#8243;',
  },
  {
    zone: 'SBH01',
    negeri: 'Sabah',
    label: 'BAHAGIAN PANTAI BARAT',
    bearing: '290&#176; 44&#8242; 58&#8243;',
  },
  {
    zone: 'SBH02',
    negeri: 'Sabah',
    label: 'KENINGAU, TAMBUNAN DAN NABAWAN',
    bearing: '290&#176; 48&#8242; 20&#8243;',
  },
  {
    zone: 'SBH03',
    negeri: 'Sabah',
    label: 'BAHAGIAN SANDAKAN',
    bearing: '290&#176; 51&#8242; 30&#8243;',
  },
  {
    zone: 'SBH04',
    negeri: 'Sabah',
    label: 'BAHAGIAN TAWAU',
    bearing: '290&#176; 59&#8242; 4&#8243;',
  },
  {
    zone: 'SBH05',
    negeri: 'Sabah',
    label: 'BAHAGIAN KUDAT',
    bearing: '290&#176; 24&#8242; 31&#8243;',
  },
  {
    zone: 'SBH06',
    negeri: 'Sabah',
    label: 'BEAUFORT, SIPITANG, TENOM DAN LONG PASIA',
    bearing: '290&#176; 35&#8242; 48&#8243;',
  },
  {
    zone: 'SBH07',
    negeri: 'Sabah',
    label: 'LAHAD DATU',
    bearing: '290&#176; 40&#8242; 37&#8243;',
  },
  {
    zone: 'SBH08',
    negeri: 'Sabah',
    label: 'SEMPORNA',
    bearing: '290&#176; 46&#8242; 36&#8243;',
  },
  {
    zone: 'SBH09',
    negeri: 'Sabah',
    label: 'KINABATANGAN',
    bearing: '290&#176; 50&#8242; 27&#8243;',
  },
  {
    zone: 'SWK01',
    negeri: 'Sarawak',
    label: 'LIMBANG, LAWAS, SUNDAR DAN TRUSAN',
    bearing: '290&#176; 55&#8242; 36&#8243;',
  },
  {
    zone: 'SWK02',
    negeri: 'Sarawak',
    label: 'MIRI, NIAH, BEKENU DAN MARUDI',
    bearing: '291&#176; 11&#8242; 56&#8243;',
  },
  {
    zone: 'SWK03',
    negeri: 'Sarawak',
    label: 'BINTULU, TATAU DAN SEBAUH',
    bearing: '291&#176; 31&#8242; 8&#8243;',
  },
  {
    zone: 'SWK04',
    negeri: 'Sarawak',
    label: 'SIBU, KANOWIT DAN KAPIT',
    bearing: '291&#176; 36&#8242; 33&#8243;',
  },
  {
    zone: 'SWK05',
    negeri: 'Sarawak',
    label: 'MUKAH, DALAT DAN BALINGIAN',
    bearing: '291&#176; 49&#8242; 38&#8243;',
  },
  {
    zone: 'SWK06',
    negeri: 'Sarawak',
    label: 'SRI AMAN, BETONG, ENGKILILI DAN LUBOK ANTU',
    bearing: '291&#176; 58&#8242; 20&#8243;',
  },
  {
    zone: 'SWK07',
    negeri: 'Sarawak',
    label: 'SAMARAHAN, SIMUNJAN, SEBUYAU DAN MELUDAM',
    bearing: '292&#176; 7&#8242; 47&#8243;',
  },
  {
    zone: 'SWK08',
    negeri: 'Sarawak',
    label: 'KUCHING, BAU, LUNDU DAN SEMATAN',
    bearing: '292&#176; 5&#8242; 26&#8243;',
  },
  {
    zone: 'SWK09',
    negeri: 'Sarawak',
    label: 'ZON KHAS (KAMPUNG PATARIKAN)',
    bearing: '292&#176; 5&#8242; 26&#8243;',
  },
  {
    zone: 'WLY01',
    negeri: 'Wilayah Persekutuan',
    label: 'KUALA LUMPUR DAN PUTRAJAYA',
    bearing: '292&#176; 31&#8242; 16&#8243;',
  },
  {
    zone: 'WLY02',
    negeri: 'Wilayah Persekutuan',
    label: 'LABUAN',
    bearing: '290&#176; 47&#8242; 30&#8243;',
  },
];
