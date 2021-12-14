const countLetters = require('./misc.js');

describe("countLetters", function(){
    test("hello,h returns 1", function(){
        expect(countLetters("hello", "h")).toEqual(1);
    });
    test("hello,l returns 2", function(){
        expect(countLetters("hello","l")).toEqual(2);
    });
    test("suspicious,s returns 3", function(){
        expect(countLetters("suspicious","s")).toEqual(3);
    });
    test("Apple,P returns 2", function(){
        expect(countLetters("Apple","P")).toEqual(2);
    });
    test("San Francisco,s returns 2", function(){
        expect(countLetters("San Francisco","s")).toEqual(2);
    });
});