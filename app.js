function PhoneBook() {
  const database = [];

  //@DESC this func is to validate phoneNumber
  //@TYPE Private
  function isPhoneNumber(inputtxt) {
    var re = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im;
    return re.test(inputtxt);
  }

  //@DESC this func is to validate email address
  //@TYPE Private
  function isEmail(email) {
    return String(email)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
  }

  //@DESC this func is check unique phone numbers
  //@TYPE Private
  function isExist(value) {
    return database.findIndex((e) => e.phoneNumber == value) !== -1;
  }

  //@DESC this func is to add new phone number to the phone book
  //@TYPE Public
  this.create = (body) => {
    const { phoneNumber, name, email } = body;
    return new Promise((resolve, reject) => {
      if (!isPhoneNumber(phoneNumber)) {
        reject("invalid phone number");
      } else if (!isEmail(email)) {
        reject("invalid email address");
      } else if (isExist(phoneNumber)) {
        reject("phone number already exist");
      } else if (!name || name.trim() == "") {
        reject("name is required");
      } else {
        const new_book = {
          phoneNumber,
          email,
          name,
          created_at: Date.now(),
        };
        database.push(new_book);
        resolve(new_book);
      }
    });
  };

  //@DESC this func is to Get unique phone details using the phone number
  //@TYPE Public
  this.findByPhoneNumber = (phoneNumber) => {
    const data = database.find((book) => book.phoneNumber == phoneNumber);
    return new Promise((resolve, reject) => {
      if (!data) reject("phone number doesn't not exist");
      else resolve(data);
    });
  };

  //@DESC this func is Get list of phone numbers with details
  //@TYPE Public
  this.findAll = () => {
    return new Promise((resolve, reject) => {
      if (database.length < 1) reject("phone number doesn't not exist");
      else resolve(database);
    });
  };
}

const book = new PhoneBook();

//@DESC create new phone number  without email
//@OUTPUT invalid email address
book
  .create({ phoneNumber: "8137088555", name: "abayomi" })
  .then((res) => console.log(res))
  .catch((err) => console.log(err));

//@DESC create new phone number  without name
//@OUTPUT name is required
book
  .create({ phoneNumber: "8137088555", email: "contact@test.test" })
  .then((res) => console.log(res))
  .catch((err) => console.log(err));

//@DESC create new phone number with proper data
//@OUTPUT return back the phone number detail
book
  .create({
    phoneNumber: "8137088555",
    name: "adewale",
    email: "test@test.test",
  })
  .then((res) => console.log(res))
  .catch((err) => console.log(err));

//@DESC create new phone number with exist phone number
//@OUTPUT phone number already exist
book
  .create({
    phoneNumber: "8137088555",
    name: "adewale",
    email: "test@test.test",
  })
  .then((res) => console.log(res))
  .catch((err) => console.log(err));

//@DESC create new phone number with proper data
//@OUTPUT return back the phone number detail
book
  .create({
    phoneNumber: "8137909090",
    name: "kunle",
    email: "king@test.test",
  })
  .then((res) => console.log(res))
  .catch((err) => console.log(err));

//@DESC Get unique phone details using the phone number
//@OUTPUT return back the phone number detail
book
  .findByPhoneNumber("8137088555")
  .then((res) => console.log(res))
  .catch((err) => console.log(err));

//@DESC Get unique phone details using  phone number that doesn't exist
//@OUTPUT phone number doesn't not exist
book
  .findByPhoneNumber("8137082726")
  .then((res) => console.log(res))
  .catch((err) => console.log(err));

//@DESC Get list of phone numbers with details
//@OUTPUT return list of phone numbers with details
book
  .findAll()
  .then((res) => console.log(res))
  .catch((err) => console.log(err));
