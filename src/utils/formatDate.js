/**
 * Formats a date string into a specific format with abbreviated month names.
 *
 * @param {string} date - The date string to format. Expected format is either "DD/MM/YYYY" or "YYYY-MM-DD".
 * @param {string} splitter - The character used to split the date string. Should be either '/' or '-'.
 * @returns {string} The formatted date string in the format "DD-MMM-YYYY", where "MMM" is the abbreviated month name.
 *
 * @example
 * // Using '/' as the splitter
 * formatDate('25/12/2023', '/'); // Returns "25-Dec-2023"
 *
 * @example
 * // Using '-' as the splitter
 * formatDate('2023-12-25', '-'); // Returns "25-Dec-2023"
 */
export function formatDate(date, splitter) {
  const parts = date
    .split(splitter === '/' ? '/' : '-')
    .map((p) => p.trim().padStart(2, '0'));
  const [day, month, year] =
    splitter === '/' ? parts : [parts[2], parts[1], parts[0]];

  const monthNames = [
    'Jan',
    'Feb',
    'Mar',
    'Apr',
    'May',
    'Jun',
    'Jul',
    'Aug',
    'Sep',
    'Oct',
    'Nov',
    'Dec',
  ];
  return `${day}-${monthNames[parseInt(month, 10) - 1]}-${year}`;
}
