function telephoneCheck(str) {
  let regEx = /(^1*\s*)(\([0-9]{3}\)|[0-9]{3})(\s*|-*)([0-9]{3})(\s*|-*)([0-9]{4})$/
  let found = str.match(regEx)
  if (found)
    return true;
  else 
  return false
  }
  
  telephoneCheck("555-555-5555");