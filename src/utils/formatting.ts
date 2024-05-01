export const formatDate = (dateString: string) => {
  const date = new Date(dateString)

  return date.toLocaleDateString('en-GB') // Adjust locale according to desired date format
}

export const calculateAge = (dob: string | number) => {
  if (+dob===1) {
    return 'Missing Date of Birth'
  }
  const birthYear = +dob;
  const currentYear = new Date().getFullYear();

  return currentYear - +birthYear;
};

export const formatSiblingOrder = (order: number | string): string => {
  const suffixes = ["th", "st", "nd", "rd", "th", "th", "th", "th", "th", "th"];
  const index = +order % 100;
  return (
    order + (suffixes[(index - 20) % 10] || suffixes[index] || suffixes[0])
  );
};
