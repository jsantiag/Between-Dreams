'use strict'; 

const required = value => (value ? undefined : 'Required');
const nonEmpty = value =>
  value.trim() !== '' ? undefined : 'Cannot be empty';
const isTrimmed = value =>
  value.trim() === value ? undefined : 'Cannot start or end with whitespace';
const length = length => value => {
  if (length.min && value.length < length.min) {
    return `Must be at least ${length.min} characters long`;
  }
  if (length.max && value.length > length.max) {
    return `Must be at most ${length.max} characters long`;
  }
};
const matches = field => (value, allValues) =>
  field in allValues && value.trim() === allValues[field].trim()
    ? undefined
    : 'Does not match';

module.exports = {required,nonEmpty,isTrimmed,length,matches};