let Mobile = function (pin ,battat) {
    this.ttPin = pin;
    this.getPin = function () {
        if (this.ttPin < 0) {
            return 0;
        } else if (this.ttPin > 100) {
            return 100;
        } else {
            return this.ttPin;
        }
    }
    this.setPin = function (a) {
        if (a) {
            this.ttPin++;
        } else {
            this.ttPin--;
        }
    }
    this.messNhap = '';
    this.getMessNhap = function () {
        return this.messNhap;
    }
    this.setMessNhap = function (a) {
        this.messNhap = a;
    }
    this.messNhan = [];
    this.getMessNhan = function (a) {
        return this.messNhan[a];
    }
    this.setMessNhan = function (a) {
        this.messNhan.push(a);
    }
    this.messGui = [];
    this.getMessGui = function (a) {
        return this.messGui[a];
    }
    this.setMessGui = function (a) {
        this.messGui.push(a);
    }
    this.batTat = battat;
    this.getBatTat = function () {
        if ((this.batTat) && this.getPin() != 0) {
            return true;
        }
        return false;
    }
    this.setBatTat = function () {
        if (this.batTat) {
            this.batTat = false;
        } else {
            this.batTat = true;
        }
    }
}