import dateStringFormatter from "./dateStringFormatter";


describe("Date String Formatter Tests", () => {
    it("Check conversion 1", () => {
        var date = new Date(Date.parse('04 Dec 1995 00:12:00'));
        expect(dateStringFormatter(date)).toEqual("04 Dec 1995 at 00:12:00");
    });

    it("Check conversion 2", () => {
        var date = new Date(Date.parse('01 January 1970 00:00:00'));
        expect(dateStringFormatter(date)).toEqual("01 Jan 1970 at 00:00:00");
    });

    it("Check conversion 3", () => {
        var date = new Date(Date.parse('29 February 2020 12:12:12'));
        expect(dateStringFormatter(date)).toEqual("29 Feb 2020 at 12:12:12");
    });
});