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
            return "Contact updated successfully";
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
            return "Contact not found!!!";
        }
    }

    countData() {
        let rawdata = fs.readFileSync('../Assets/data.json');
        let data = JSON.parse(rawdata);
        let count = data.reduce(((count) => {
            count++;
            return count;
        }), 0);
        return `Number of contacts are: ${count}`;
    }

    duplicateData(fName, lName) {
        let rawdata = fs.readFileSync('../Assets/data.json');
        let data = JSON.parse(rawdata);
        if (data.some((s) => (s._fName == fName && s._lName == lName))) {
            return true
        } else {
            return false
        }
    }

    searchByCityState(city, state) {
        let rawdata = fs.readFileSync('../Assets/data.json');
        let data = JSON.parse(rawdata);

        data.forEach((element) => {
            if (element._city == city && element._state == state) {
                console.log(`First Name: ${element._fName}, LastName: ${element._lName}`);
            }
        })
    }

    countByCity(city) {
        let rawdata = fs.readFileSync('../Assets/data.json');
        let data = JSON.parse(rawdata);
        return data.filter(contact => contact._city == city).reduce((count, contact) => count += 1, 0);
    }
    countByState(state) {
        let rawdata = fs.readFileSync('../Assets/data.json');
        let data = JSON.parse(rawdata);
        return data.filter(contact => contact._state == state).reduce((count, contact) => count += 1, 0);
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
                        let first = this.updateRecord(editData);
                        console.log(first);
                        break;
                    case 2:
                        cont._lName = userInput.question("Enter last name: ");
                        let last = this.updateRecord(editData);
                        console.log(last);
                        break;
                    case 3:
                        cont._address = userInput.question("Enter address: ");
                        let add = this.updateRecord(editData);
                        console.log(add);
                        break;
                    case 4:
                        cont._city = userInput.question("Enter city: ");
                        let cit = this.updateRecord(editData);
                        console.log(cit);
                        break;
                    case 5:
                        cont._state = userInput.question("Enter state: ");
                        let st = this.updateRecord(editData);
                        console.log(st);
                        break;
                    case 6:
                        cont._zip = userInput.questionInt("Enter zip: ");
                        let zp = this.updateRecord(editData);
                        console.log(zp);
                        break;
                    case 7:
                        cont._phone = userInput.questionInt("Enter phone: ");
                        let ph = this.updateRecord(editData);
                        console.log(ph);
                        break;
                    case 8:
                        cont._email = userInput.question("Enter email: ");
                        let em = this.updateRecord(editData);
                        console.log(em);
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
            "\n3. Get Count of Contacts" +
            "\n4. Search by city and state" +
            "\n5. Get Count by city and state" +
            "\n5. Exit..."
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
                let cnt = this.countData();
                console.log(cnt);
                break;
            case 4:
                var city = userInput.question("Enter city: ");
                var state = userInput.question("Enter state: ");
                this.searchByCityState(city, state);
                break;
            case 5:
                var city = userInput.question("Enter city: ");
                var state = userInput.question("Enter state: ");
                console.log("count by the city: " + this.countByCity(city));
                console.log("count in the state : " + this.countByState(state));
                break;
            case 6:
                break;
            default:
                console.log("Please enter a valid choice!!!");
                break;
        }
    }
}

module.exports = new Operation();