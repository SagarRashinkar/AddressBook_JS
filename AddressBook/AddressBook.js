const userInput = require('readline-sync');
const util = require('../Utility/Utility');
const input = require('../Utility/Input');
const oper = require('../Utility/Operation');

do {
    console.log("1=> Add contact");
    console.log("2=> Modify contact");
    console.log("3=> Exit...");
    var choice = userInput.questionInt("Enter your choice :");
    switch (choice) {
        case 1:
            try {
                let fName = input.getFirstName();
                let lName = input.getLastName();
                let address = input.getAddress();
                let city = input.getCity();
                let state = input.getState();
                let zip = input.getZip();
                let phone = input.getPhone();
                let email = input.getEmail();
                var data = new util(fName, lName, address, city, state, zip, phone, email);
            } catch (err) {
                console.error(err);
            }
            oper.saveData(data);
            break;
        case 2:
            oper.doOperations();
            break;
        case 3:
            console.log("Exiting...");
            break;
        default:
            console.log("Enter a valid choice!!!");
            break;
    }
} while (choice !== 3);
