import { persianNumbersToEnglish } from './farsi_helper';

const patternOnlyDigit = /^[0-9]*$/;
const patternOnlyPersian = /^[\u0600-\u06FF\s]+$/;
const patternPersianDigit = /^[\u06F0-\u06F9]+$/;
const patternPersianLetter = /^[\u0622\u0627\u0628\u067E\u062A-\u062C\u0686\u062D-\u0632\u0698\u0633-\u063A\u0641\u0642\u06A9\u06AF\u0644-\u0648\u06CC\s]+$/;
// eslint-disable-next-line no-useless-escape
const patternUrl = /^(?:http(s)?:\/\/)?[\w.-]+(?:\.[\w\.-]+)+[\w\-\._~:/?#[\]@!\$&'\(\)\*\+,;=.]+$/;
const patternEmail = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
const patternPhoneNumber = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;
// eslint-disable-next-line no-useless-escape
const patternPhoneNumberWithoutZero = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im;
// eslint-disable-next-line no-useless-escape
const spictialCharacters = /[ !@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/;
const usernameCharacters = /[a-z A-Z0-9\\_.\\"]+$/;

/**
 * @param num : number - like: "۲۰۱۹"
 * @return number: "2019"
 */
const isNumber = (value) =>
  patternOnlyDigit.test(persianNumbersToEnglish(value));
const isOnlyDigit = (value) =>
  patternOnlyDigit.test(persianNumbersToEnglish(value));
const isPersianChar = (value) => patternOnlyPersian.test(value);
const isPersianLetter = (value) => patternPersianLetter.test(value);
const isPersianDigit = (value) => patternPersianDigit.test(value);
const isUrl = (value) => patternUrl.test(value);
const isEmail = (value) =>
  value && patternEmail.test(persianNumbersToEnglish(value.replace(/ /g, '')));
const isPhoneNumber = (value) =>
  patternPhoneNumber.test(persianNumbersToEnglish(value)) && value.length < 12;
const isPhoneNumber2 = (value) =>
  patternPhoneNumberWithoutZero.test(persianNumbersToEnglish(value)) &&
  value.length < 12;
const isrequired = (value) => value && value.trim().length === 0;
const minlength = (value, length) => value && value <= length;
const maxlength = (value, length) => value && value >= length;
const isSpectialCharacters = (value) => spictialCharacters.test(value);
const isUsernameCharacters = (value) => usernameCharacters.test(value);

export {
  isNumber,
  isrequired,
  isPhoneNumber,
  isPhoneNumber2,
  isEmail,
  isPersianDigit,
  minlength,
  maxlength,
  isUrl,
  isPersianChar,
  isSpectialCharacters,
  isUsernameCharacters,
  isPersianLetter,
  isOnlyDigit,
};
