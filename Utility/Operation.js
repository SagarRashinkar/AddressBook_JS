const fs = require('fs');
class Operation {

    contArr = [];

    saveData(data) {

        this.contArr.push(data);
        try {
            let json = JSON.stringify(this.contArr);
            fs.writeFileSync('../Assets/data.json', json, { flag: 'a+' })
            console.log("Contact Saved successfully");
        }
        catch (err) {
            console.error(err);
        }
    }
}

module.exports = new Operation();