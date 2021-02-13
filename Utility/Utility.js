class Utility {

    constructor(fName, lName, address, city, state, zip, phone, email) {
        this.fName = fName;
        this.lName = lName;
        this.address = address;
        this.city = city;
        this.state = state;
        this.zip = zip;
        this.phone = phone;
        this.email = email;
    }

    set fName(fName) {
        let f_Reg = RegExp("^[A-Z]{1}[a-z]{2,}");
        if (f_Reg.test(fName)) {
            this._fName = fName;
        }
        else {
            throw 'Invalid first name';
        }
    }
    get fName() { return this._fName }

    set lName(lName) {
        let l_Reg = RegExp("^[A-Z]{1}[a-z]{2,}");
        if (l_Reg.test(lName)) {
            this._lName = lName;
        }
        else {
            throw 'Invalid last name';
        }
    }
    get lName() { return this._lName }

    set address(address) {
        let add_Reg = RegExp("^[A-Za-z]{4,}");
        if (add_Reg.test(address)) {
            this._address = address;
        }
        else {
            throw 'Invalid address';
        }
    }
    get address() { return this._address }

    set city(city) {
        let c_Reg = RegExp("^[A-Za-z]{4,}");
        if (c_Reg.test(city)) {
            this._city = city;
        }
        else {
            throw 'Invalid city name';
        }
    }
    get city() { return this._city }

    set state(state) {
        let s_Reg = RegExp("^[A-Za-z]{4,}");
        if (s_Reg.test(state)) {
            this._state = state;
        }
        else {
            throw 'State is incorrect';
        }
    }
    get state() { return this._state }

    set zip(zip) {
        let z_Reg = RegExp("^[1-9]{1}[0-9]{2}[0-9]{3}$");
        if (z_Reg.test(zip)) {
            this._zip = zip;
        }
        else {
            throw 'Zip is invalid';
        }
    }
    get zip() { return this._zip }

    set phone(phone) {
        let p_Reg = RegExp("(0/91)?[7-9][0-9]{9}");
        if (p_Reg.test(phone)) {
            this._phone = phone;
        }
        else {
            throw 'phone number is invalid';
        }
    }
    get phone() { return this._phone }

    set email(email) {
        let e_Reg = RegExp("^[a-zA-Z]{4,}[a-zA-Z0-9\.\!\_]*\@[a-z]*\.(co|in|com)$");
        if (e_Reg.test(email)) {
            this._email = email;
        }
        else {
            throw 'Email is incorrect';
        }
    }
    get email() { return this._email }

    toString() {
        return "\nFirstName : " + this.fName + "\nLastName : " + this.lName + "\nAddress :" + this.address +
            "\nCity : " + this.city + "\nState : " + this.state + "\nZip : " + this.zip + "\nPhoneNumber : " + this.phone +
            "\nemail : " + this.email;
    }
}

module.exports = Utility;