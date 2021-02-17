const fs = require('fs');
const userInput = require('readline-sync');

class Operation {

    saveData(data) {

        let rawdata = fs.readFileSync('../Assets/data.json');
        let contData = JSON.parse(rawdata);

        try {
            contData.push(data);
            fs.writeFileSync('../Assets/data.json', JSON.stringify(contData));
            console.log("Contact Saved successfully");
        }
        catch (err) {
            console.error(err);
        }
    }

    updateRecord(editData) {

        try {
            fs.writeFileSync('../Assets/data.json', JSON.stringify(editData));
            console.log("Contact updated successfully");
        }
        catch (err) {
            console.error(err);
        }
    }

    deleteData(firstName, lastName) {
        let rawdata = fs.readFileSync('../Assets/data.json');
        let data = JSON.parse(rawdata);
        let flag = false;
        data.forEach(del => {
            if (del._fName == firstName && del._lName == lastName) {
                flag = true;
                data.splice(data.indexOf(del), 1);
                this.updateRecord(data);
            }
        });
        if (!flag) {
            console.log("Contact not found!!!");
        }
    }

    editData(firstName, lastName) {
        let rawdata = fs.readFileSync('../Assets/data.json');
        let editData = JSON.parse(rawdata);
        let flag = false;
        editData.forEach(cont => {
            if (cont._fName == firstName && cont._lName == lastName) {
                console.log("Contact found Sucessfully");
                flag = true;
                console.log("1. Update First Name" +
                    "\n2. Update Last Name" +
                    "\n3. Update Address" +
                    "\n4. Update City" +
                    "\n5. Update State" +
                    "\n6. Update Zip" +
                    "\n7. Update Mobile Number" +
                    "\n8. Update Email" +
                    "\n9. Press any key to Exit");

                var ch = userInput.questionInt("Enter your choice: ");
                switch (ch) {
                    case 1:
                        cont._fName = userInput.question("Enter first name: ");
                        this.updateRecord(editData);
                        break;
                    case 2:
                        cont._lName = userInput.question("Enter last name: ");
                        this.updateRecord(editData);
                        break;
                    case 3:
                        cont._address = userInput.question("Enter address: ");
                        this.updateRecord(editData);
                        break;
                    case 4:
                        cont._city = userInput.question("Enter city: ");
                        this.updateRecord(editData);
                        break;
                    case 5:
                        cont._state = userInput.question("Enter state: ");
                        this.updateRecord(editData);
                        break;
                    case 6:
                        cont._zip = userInput.questionInt("Enter zip: ");
                        this.updateRecord(editData);
                        break;
                    case 7:
                        cont._phone = userInput.questionInt("Enter phone: ");
                        this.updateRecord(editData);
                        break;
                    case 8:
                        cont._email = userInput.question("Enter email: ");
                        this.updateRecord(editData);
                        break;
                    case 9:
                        break;
                    default:
                        console.log("please enter a valid choice!!!");
                        break;
                }

            }
        });
        if (!flag) {
            console.log("Contact not found!!!");
        }
    }

    doOperations() {
        console.log("1. Edit Contact" +
            "\n2. Delete Contact" +
            "\n3. Exit..."
        );
        let choose = userInput.questionInt("Enter your choice: ");
        switch (choose) {
            case 1:
                var firstName = userInput.question("Enter first name to search: ");
                var lastName = userInput.question("Enter last name to search: ");
                this.editData(firstName, lastName);
                break;
            case 2:
                var firstName = userInput.question("Enter first name to search: ");
                var lastName = userInput.question("Enter last name to search: ");
                this.deleteData(firstName, lastName);
                break;
            case 3:
                break;
            default:
                console.log("Please enter a valid choice!!!");
                break;
        }
    }
}

module.exports = new Operation();