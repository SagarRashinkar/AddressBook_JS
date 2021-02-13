const inputData = require('readline-sync');
class Input {
    getFirstName() {
        return inputData.question("Enter Name: ");
    }
    getLastName() {
        return inputData.question("Enter Last Name: ");
    }
    getAddress() {
        return inputData.question("Enter Address: ");
    }
    getCity() {
        return inputData.question("Enter City: ");
    }
    getState() {
        return inputData.question("Enter State: ");
    }
    getZip() {
        return inputData.questionInt("Enter Zip Code: ");
    }
    getPhone() {
        return inputData.questionInt("Enter Phone Number: ");
    }
    getEmail() {
        return inputData.question("Enter email: ");
    }
}

module.exports = new Input();