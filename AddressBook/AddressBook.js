const userInput = require('readline-sync');
const util = require('../Utility/Utility');
const input = require('../Utility/Input');
const oper = require('../Utility/Operation');

do {
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
        oper.saveData(data);

    } catch (err) {
        console.error(err);
    }
    var choice = userInput.question("Want to add more contact (y/n) || (Y/N)) :");
} while (choice == "y" || choice == "Y");
