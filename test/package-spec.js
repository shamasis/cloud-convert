/*
 * This test specs runs tests on the package.json file of repository. It has a set of strict tests on the content of
 * the file as well. Any change to package.json must be accompanied by valid test case in this spec-sheet.
 */
describe ("package.json", function () {
    var WORKING_DIRECTORY = "./",
        PACKAGE_FILENAME = "package.json",

        path = require("path"),
        fs = require("fs"),

        location = path.join(WORKING_DIRECTORY, PACKAGE_FILENAME),
        content,
        json;

    it ("must exist", function () {
        expect(fs.existsSync(location)).toBeTruthy();
    });

    it ("must have readable content", function () {
        expect(content = fs.readFileSync(location).toString()).toBeTruthy();
    });

    it ("content must be valid JSON", function () {
        expect(json = JSON.parse(content)).toBeTruthy();
    });

    describe ("package.json JSON data", function () {
        it ("must have valid name, description and author", function () {
            expect(json.name).toMatch("cloudconvert");
            expect(json.description).toMatch("API Wrapper for cloudconvert.org");
            expect(json.homepage).toMatch("http://cloudconvert.shamasis.net/");
            expect(json.author).toMatch("Shamasis Bhattacharya  <mail@shamasis.net>");
            expect(json.license).toMatch("MIT");
        });

        it ("must have a valid version string in form of <major>.<minor>.<revision>", function () {
            expect(json.version).toMatch(/^\d+\.\d+\.\d+$/);
        });
    });
});