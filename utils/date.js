const getMonth = (month) => {
  switch (month) {
    case '01':
      return 'Jan.';
    case '02':
      return 'Feb.';
    case '03':
      return 'Mar.';
    case '04':
      return 'Apr.';
    case '05':
      return 'May';
    case '06':
      return 'Jun.';
    case '07':
      return 'Jul.';
    case '08':
      return 'Aug.';
    case '09':
      return 'Sep.';
    case '10':
      return 'Oct.';
    case '11':
      return 'Nov.';
    case '12':
      return 'Dec.';
    default:
      return 'Jan.';
  }
};

const getDate = (date) => {
  if (date === 'Present') return date;
  const month = getMonth(date.slice(5));
  return `${month} ${date.slice(0, 4)}`;
};

export default getDate;
