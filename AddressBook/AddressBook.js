const util = require('../Utility/Utility');
const input = require('../Utility/Input');

try {


    let fName = input.getFirstName();
    let lName = input.getLastName();
    let address = input.getAddress();
    let city = input.getCity();
    let state = input.getState();
    let zip = input.getZip();
    let phone = input.getPhone();
    let email = input.getEmail();

    const data = new util(fName, lName, address, city, state, zip, phone, email);
    console.log(data.toString());
} catch (err) {
    console.error(err);
}