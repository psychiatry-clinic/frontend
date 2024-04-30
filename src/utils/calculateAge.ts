export default (dob: string | number) => {
  if (+dob===1) {
    return 'Missing Date of Birth'
  }
  const birthYear = +dob;
  const currentYear = new Date().getFullYear();

  return currentYear - +birthYear;
};
