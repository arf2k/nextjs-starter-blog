const getEducation = (education) => {
  // eslint-disable-next-line no-unused-vars
  const {
    degreeSubtype,
    majorOne,
    majorTwo,
    minorOne,
    minorTwo,
    university,
  } = education;
  // eslint-disable-next-line consistent-return
  const getMajors = () => {
    if (majorOne) {
      if (majorTwo) {
        return `${degreeSubtype} in ${majorOne} & ${majorTwo}.`;
      }
      return `${degreeSubtype} in ${majorOne}.`;
    }
    return null;
  };
  const majors = getMajors();

  const getMinors = () => {
    if (minorOne) {
      if (minorTwo) {
        return `Minors in ${minorOne} & ${minorTwo}.`;
      }
      return `Minor in ${minorOne}.`;
    }
    return null;
  };
  const minors = getMinors();

  if (university && majors && minors) return `${university} - ${majors} ${minors}`;
  if (university && majors) return `${university} - ${majors}`;
  if (majors && minors) return `${majors} ${minors}`;
  if (majors) return `${majors}`;
  return 'Education in progress.';
};

export default getEducation;
