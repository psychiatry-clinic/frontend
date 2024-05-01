import { isEmpty, isEmptyArray, isNullOrUndefined } from './helpers'

// 👉 Required Validator
export const requiredValidator = (value: unknown) => {
  if (isNullOrUndefined(value) || isEmptyArray(value) || value === false)
    return 'This field is required'

  return !!String(value).trim().length || 'This field is required'
}

// 👉 Email Validator
export const emailValidator = (value: unknown) => {
  if (isEmpty(value))
    return true

  const re = /^(?:[^<>()[\]\\.,;:\s@"]+(?:\.[^<>()[\]\\.,;:\s@"]+)*|".+")@(?:\[\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}\]|(?:[a-z\-\d]+\.)+[a-z]{2,})$/i

  if (Array.isArray(value))
    return value.every(val => re.test(String(val))) || 'The Email field must be a valid email'

  return re.test(String(value)) || 'The Email field must be a valid email'
}

// 👉 Password Validator
export const passwordValidator = (password: string) => {
  const regExp = /(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%&*()]).{8,}/

  const validPassword = regExp.test(password)

  return validPassword || 'Field must contain at least one uppercase, lowercase, special character and digit with min 8 chars'
}

// 👉 Confirm Password Validator
export const confirmedValidator = (value: string, target: string) =>

  value === target || 'The Confirm Password field confirmation does not match'

// 👉 Between Validator
export const betweenValidator = (value: unknown, min: number, max: number) => {
  const valueAsNumber = Number(value)

  return (Number(min) <= valueAsNumber && Number(max) >= valueAsNumber) || `Enter number between ${min} and ${max}`
}

// 👉 Integer Validator
export const integerValidator = (value: unknown) => {
  if (isEmpty(value))
    return true

  if (Array.isArray(value))
    return value.every(val => /^-?\d+$/.test(String(val))) || 'This field must be an integer'

  return /^-?\d+$/.test(String(value)) || 'This field must be an integer'
}

// Date of Birth Validator
export const dateOfBirthValidator = (value: unknown) => {
  if (isEmpty(value))
    return true;

  const stringValue = String(value);
  
  // Check if the value is a 4-digit number
  if (/^\d{4}$/.test(stringValue)) {
    const year = parseInt(stringValue, 10);
    
    // Check if the year is within the specified range
    if (year >= 1950 && year <= 2050) {
      return true;
    } else {
      return 'Date of birth must be between 1950 and 2050';
    }
  } else {
    return 'Date of birth must be a 4-digit number';
  }
};

// Age Validator
export const ageValidator = (value: unknown) => {
  if (isEmpty(value))
    return true;

  const stringValue = String(value);

  // Check if the value is a string consisting of 1 or 2 digits
  if (/^\d{1,2}$/.test(stringValue)) {
    const age = parseInt(stringValue, 10);
    
    // Check if the age is between 0 and 90
    if (age >= 0 && age <= 90) {
      return true;
    } else {
      return 'Age must be between 0 and 90';
    }
  } else {
    return 'Age must consist of 1 or 2 digits';
  }
};

// Phone Number Validator
export const phoneNumberValidator = (value: unknown) => {
  if (isEmpty(value))
    return true;

  const stringValue = String(value);

  // Check if the value is a string consisting of 11 digits
  if (/^\d{11}$/.test(stringValue)) {
    // Check if the phone number starts with 078, 079, 077, or 075
    if (/^07[5789]/.test(stringValue)) {
      return true;
    } else {
      return 'Phone number must start with 078, 079, 077, or 075';
    }
  } else {
    return 'Phone number must consist of 11 digits';
  }
};



// 👉 Regex Validator
export const regexValidator = (value: unknown, regex: RegExp | string): string | boolean => {
  if (isEmpty(value))
    return true

  let regeX = regex
  if (typeof regeX === 'string')
    regeX = new RegExp(regeX)

  if (Array.isArray(value))
    return value.every(val => regexValidator(val, regeX))

  return regeX.test(String(value)) || 'The Regex field format is invalid'
}

// 👉 Alpha Validator
export const alphaValidator = (value: unknown) => {
  if (isEmpty(value))
    return true

  return /^[A-Z]*$/i.test(String(value)) || 'The Alpha field may only contain alphabetic characters'
}

// 👉 URL Validator
export const urlValidator = (value: unknown) => {
  if (isEmpty(value))
    return true

  const re = /^https?:\/\/[^\s$.?#].\S*$/

  return re.test(String(value)) || 'URL is invalid'
}

// 👉 Length Validator
export const lengthValidator = (value: unknown, length: number) => {
  if (isEmpty(value))
    return true

  return String(value).length === length || `"The length of the Characters field must be ${length} characters."`
}

// 👉 Alpha-dash Validator
export const alphaDashValidator = (value: unknown) => {
  if (isEmpty(value))
    return true

  const valueAsString = String(value)

  return /^[\w-]*$/.test(valueAsString) || 'All Character are not valid'
}
