function PhoneBook() {
  const books = [];

  //@DESC this method is to validate phoneNumber
  //@TYPE Private
  function isPhoneNumber(inputtxt) {
    var re = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im;
    return re.test(inputtxt);
  }

  //@DESC this method is to validate email address
  //@TYPE Private
  function isEmail(email) {
    return String(email)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
  }

  //@DESC this method is to check if the phone number is exist
  //@TYPE Private
  function isExist(key, value) {
    return books.findIndex((e) => e[key] == value) !== -1;
  }

  //@DESC this method is to add new phone number to the phone book
  //@TYPE Public
  function create(body) {
    const { phoneNumber, name, email } = body;
    return new Promise((resolve, reject) => {
      if (!isPhoneNumber(phoneNumber)) {
        reject("invalid phone number");
      } else if (!isEmail(email)) {
        reject("invalid email address");
      } else if (isExist("phoneNumber", phoneNumber)) {
        reject("phone number already exist");
      } else if (isExist("email", email)) {
        reject("email already exist");
      } else if (!name || name.trim() == "") {
        reject("name is required");
      } else {
        const new_book = {
          phoneNumber,
          email,
          name,
          created_at: Date.now(),
        };
        books.push(new_book);
        resolve(new_book);
      }
    });
  }

  return {
    create,
  };
}

const book = new PhoneBook();

book
  .create({ phoneNumber: "8137088555" })
  .then((res) => console.log(res))
  .catch((err) => console.log("book-1", err));

book
  .create({
    phoneNumber: "8137088555",
    name: "adewale",
    email: "test@test.test",
  })
  .then((res) => console.log(res))
  .catch((err) => console.log(err));
