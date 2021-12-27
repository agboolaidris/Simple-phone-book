function PhoneBook() {
  const books = [];

  //@DESC this method is to validate phoneNumber
  //@TYPE Private
  function isPhoneNumber(inputtxt) {
    const phoneno = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
    if (inputtxt.value.match(phoneno)) {
      return true;
    } else {
      return false;
    }
  }

  //@DESC this method is to check if the phone number is exist
  //@TYPE Private
  function isExist(inputtxt) {
    return books.indexOf(inputtxt) !== -1;
  }

  //@DESC this method is to add new phone number to the phone book
  //@TYPE Public
  
}
