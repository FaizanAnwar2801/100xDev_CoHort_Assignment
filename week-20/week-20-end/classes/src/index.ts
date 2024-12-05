import { once } from "helpful-decorators";
class DateClass {
    public timeZone: string;
    constructor(timeZone: string) {
        this.timeZone = timeZone
    }

    // TS - Decorators. (run once)
    @once
    getTime() {
        var d = new Date();
        console.log("Hii from getTime.")
        return d.getTime();
    }

    getMonth() {
        var d = new Date();
        return d.getMonth();
    }

    getTimezone() {
        return this.timeZone
    }
}

const dateObj = new DateClass("IND");
// const response = dateObj.getMonth();
dateObj.getTime();
dateObj.getTime();
dateObj.getTime();
dateObj.getTime();
dateObj.getTime();
// console.log(response);
// console.log(dateObj.getTimezone());