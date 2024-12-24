function checkLength (string, length) {
  if (string.length <= length) {
    return true;
  } else {
    return false;
  }
}
function isPalindrome (string) {
  string = string.replaceAll(' ', '');
  string = string.toApperCase();
  let reversedString = '';
  for (let i = string.length - 1; i >= 0; i--) {
    reversedString += string[i];
    return string === reversedString;
  }
}
