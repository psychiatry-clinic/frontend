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

export const getVisitNumber=(visits: any, index: number): string => {
  const totalVisits = visits.length;
  const visitNumber = totalVisits - index;
  return `${visitNumber}${getOrdinalSuffix(visitNumber)}`;
}

// Function to get the ordinal suffix for a number
function getOrdinalSuffix(number: number): string {
  if (number === 11 || number === 12 || number === 13) {
      return 'th';
  }

  const lastDigit = number % 10;

  switch (lastDigit) {
      case 1:
          return 'st';
      case 2:
          return 'nd';
      case 3:
          return 'rd';
      default:
          return 'th';
  }
}
